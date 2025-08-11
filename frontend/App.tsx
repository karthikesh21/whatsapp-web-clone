import React, { useEffect, useState } from 'react';
import { Conversation, Message, MessageStatus } from './types';
import { mockConversations } from './data/mockData';
import ConversationList from './data/components/ConversationList';
import ChatView from './data/components/ChatView';
import Welcome from './data/components/Welcome';

const API_BASE_URL = 'http://localhost:5000';

const App: React.FC = () => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchConversations();
    }, []);

    const fetchConversations = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/conversations`);
            if (!response.ok) {
                throw new Error('Failed to fetch conversations');
            }
            const data = await response.json();
            
            // Transform backend data to match frontend format
            const transformedConversations = data.map((convo: any) => ({
                user: {
                    id: convo.user.id,
                    name: convo.user.name,
                    avatar: `https://picsum.photos/seed/${convo.user.id}/200/200`,
                    phoneNumber: convo.user.phone,
                },
                messages: convo.messages.map((msg: any) => ({
                    id: msg.id,
                    text: msg.text,
                    timestamp: formatTimestamp(msg.timestamp),
                    fromMe: msg.fromMe,
                    status: msg.status || MessageStatus.SENT,
                })),
                unreadCount: 0, // You can implement unread count logic
            }));
            
            setConversations(transformedConversations);
        } catch (err) {
            console.error('Error fetching conversations:', err);
            setError('Failed to load conversations');
            // Fallback to mock data
            setConversations(mockConversations);
        } finally {
            setLoading(false);
        }
    };

    const formatTimestamp = (timestamp: string | number) => {
        if (typeof timestamp === 'string') {
            return timestamp;
        }
        const date = new Date(timestamp * 1000);
        return new Intl.DateTimeFormat('en-US', { 
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        }).format(date);
    };

    const handleSelectConversation = (id: string) => {
        const conversation = conversations.find(c => c.user.id === id);
        if (conversation && conversation.unreadCount > 0) {
          const updatedConversations = conversations.map(c => 
            c.user.id === id ? { ...c, unreadCount: 0 } : c
          );
          setConversations(updatedConversations);
        }
        setSelectedConversationId(id);
    };

    const handleSendMessage = async (conversationId: string, text: string) => {
        const newMessage: Message = {
            id: `msg${Date.now()}`,
            text,
            timestamp: new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date()),
            fromMe: true,
            status: MessageStatus.SENT,
        };

        // Update UI immediately
        let updatedConversations = conversations.map(convo => {
            if (convo.user.id === conversationId) {
                return { ...convo, messages: [...convo.messages, newMessage] };
            }
            return convo;
        });

        const targetConvoIndex = updatedConversations.findIndex(c => c.user.id === conversationId);
        if (targetConvoIndex > -1) {
            const targetConvo = updatedConversations.splice(targetConvoIndex, 1)[0];
            updatedConversations.unshift(targetConvo);
        }

        setConversations(updatedConversations);

        // Save to backend
        try {
            const messagePayload = {
                metaData: {
                    entry: [{
                        changes: [{
                            value: {
                                contacts: [{
                                    wa_id: conversationId,
                                    profile: { name: conversations.find(c => c.user.id === conversationId)?.user.name || conversationId }
                                }],
                                messages: [{
                                    id: newMessage.id,
                                    text: { body: text },
                                    timestamp: Math.floor(Date.now() / 1000),
                                    from: conversationId
                                }]
                            }
                        }]
                    }]
                }
            };

            await fetch(`${API_BASE_URL}/webhook`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messagePayload),
            });
        } catch (err) {
            console.error('Error saving message to backend:', err);
        }
    };

    const selectedConversation = conversations.find(c => c.user.id === selectedConversationId);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="text-lg">Loading conversations...</div>
            </div>
        );
    }

    return (
        <div className="flex h-screen text-gray-800 dark:text-gray-100 antialiased">
            <div className="flex w-full h-full overflow-hidden">
                <div className={`w-full md:w-1/3 lg:w-1/4 flex-shrink-0 md:flex ${selectedConversationId ? 'hidden' : 'flex'}`}>
                    <ConversationList
                        conversations={conversations}
                        selectedConversationId={selectedConversationId}
                        onSelectConversation={handleSelectConversation}
                    />
                </div>
                <main className={`flex-1 w-full h-full ${!selectedConversationId ? 'hidden' : 'flex'} md:flex`}>
                    {selectedConversation ? (
                        <ChatView
                            conversation={selectedConversation}
                            onSendMessage={handleSendMessage}
                            onBack={() => setSelectedConversationId(null)}
                        />
                    ) : (
                        <Welcome />
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;
