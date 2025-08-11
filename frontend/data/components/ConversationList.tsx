import React, { useState } from 'react';
import { Conversation } from '../../types';
import ConversationListItem from './ConversationListItem';
import { SearchIcon, MenuIcon } from './icons';

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversationId: string | null;
  onSelectConversation: (id: string) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({ conversations, selectedConversationId, onSelectConversation }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConversations = conversations.filter(convo => 
    convo.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full h-full border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <header className="flex-shrink-0 flex items-center justify-between p-4 bg-[#00a884] dark:bg-gray-800">
        <div className="flex items-center space-x-3">
          <img src="https://i.pravatar.cc/40?u=myprofile" alt="My Profile" 
            className="w-10 h-10 rounded-full cursor-pointer hover:opacity-90 transition-opacity" />
          <span className="text-white dark:text-gray-200 font-medium">WhatsApp Web</span>
        </div>
        <div className="flex items-center space-x-4 text-white dark:text-gray-300">
          <button className="p-2 rounded-full hover:bg-[#128c7e] dark:hover:bg-gray-700 transition-colors focus:outline-none" aria-label="Menu">
            <MenuIcon />
          </button>
        </div>
      </header>
      <div className="flex-shrink-0 p-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search or start new chat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-[#00a884] dark:focus:ring-[#128c7e] transition-all duration-200"
            aria-label="Search chats"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map(convo => (
          <ConversationListItem
            key={convo.user.id}
            conversation={convo}
            isSelected={selectedConversationId === convo.user.id}
            onSelect={onSelectConversation}
          />
        ))}
      </div>
    </div>
  );
};

export default ConversationList;
