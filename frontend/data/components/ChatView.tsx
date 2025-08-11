import React, { useEffect, useRef } from 'react';
import { Conversation } from '../../types';
import ChatHeader from './ChatHeader';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

interface ChatViewProps {
  conversation: Conversation;
  onSendMessage: (conversationId: string, text: string) => void;
  onBack: () => void;
}

const ChatView: React.FC<ChatViewProps> = ({ conversation, onSendMessage, onBack }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation.messages, conversation.user.id]);

  const handleSendMessage = (text: string) => {
    onSendMessage(conversation.user.id, text);
  };
  
  return (
    <div className="flex flex-col w-full h-full bg-[#efeae2] dark:bg-gray-900">
        <ChatHeader user={conversation.user} onBack={onBack} />
        <main 
          className="flex-1 overflow-y-auto p-4 md:p-6 bg-chat-pattern" 
          style={{
            backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFrSURBVFiF7Ze9TsMwFIWPg5MmaSPxM7E3T8ATMPIGiJGVmYERkJiQ+gYwsbKyMvRJGGBiwQnYUEuR2JE6kJQfAVLdBHIlS7HOvf7O8XUcGxgYuEckaaOks5Kek7yV9JDkpqRREcdVkpckxyRHkk5IviG5SXIcx/FwkOSC5CPJB0nHko7CvQclx3dIniT3AKAoiqler/dL0lzSl6RvSZ+SZpKuSY6TJJlIepI0JXkt6ULStaRRmqY7eZ7/tE3wStKMpP2lZmeSjiRNJe1Kek6SpK/Wr/P8vBf+L5O0kHQraRxF0W5ZljfNgziOh2VZ3kraC3UvJM1bJ8jz/DuKon1JU0kzko+SjkluAJiRfGqsPpR0J2kewrqWtPCb4FCH8YVQ+wrJW5LTv3rwnyR5TvKV5FjSAcn7EPp3kpM4jocr9WAVzOyX5HyxWEzMbN7pdB7NbNYJghWEYJ+ZWdfMis1ms+dcu6nDtXPOFWbW/Y11DAz8N34BpUVrr3bkRFsAAAAASUVORK5CYII=")`
          }}
          aria-live="polite">
            <div className="flex flex-col space-y-2">
              {conversation.messages.map((msg) => (
                  <MessageBubble key={msg.id} message={msg} />
              ))}
            </div>
            <div ref={messagesEndRef} />
        </main>
        <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatView;
