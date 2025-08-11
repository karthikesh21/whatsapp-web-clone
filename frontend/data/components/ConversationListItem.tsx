
import React from 'react';
import { Conversation } from '../../types';

interface ConversationListItemProps {
  conversation: Conversation;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const ConversationListItem: React.FC<ConversationListItemProps> = ({ conversation, isSelected, onSelect }) => {
  const lastMessage = conversation.messages[conversation.messages.length - 1];
  const bgColor = isSelected ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700';

  return (
    <div
      className={`flex items-center p-3 cursor-pointer border-b border-gray-200 dark:border-gray-700 transition-colors duration-150 ${bgColor}`}
      onClick={() => onSelect(conversation.user.id)}
    >
      <img src={conversation.user.avatar} alt={conversation.user.name} className="w-12 h-12 rounded-full mr-4" />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="text-base font-semibold text-gray-800 dark:text-gray-100 truncate">{conversation.user.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{lastMessage?.timestamp}</p>
        </div>
        <div className="flex justify-between items-start mt-1">
          <p className="text-sm text-gray-600 dark:text-gray-300 truncate pr-2">
            {lastMessage?.text || 'No messages yet'}
          </p>
          {conversation.unreadCount > 0 && (
            <span className="bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationListItem;
