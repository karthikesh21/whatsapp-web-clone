import React from 'react';
import { User } from '../../types';
import { SearchIcon, MenuIcon, BackIcon } from './icons';

interface ChatHeaderProps {
  user: User;
  onBack: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user, onBack }) => {
  return (
    <header className="flex-shrink-0 flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
      <div className="flex items-center min-w-0">
        <button onClick={onBack} className="md:hidden mr-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" aria-label="Back to chats">
            <BackIcon />
        </button>
        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
        <div className="min-w-0">
          <p className="text-base font-semibold text-gray-800 dark:text-gray-100 truncate">{user.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">online</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4 text-gray-500 dark:text-gray-400">
         <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-700" aria-label="Search in chat"><SearchIcon /></button>
         <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-700" aria-label="Chat menu"><MenuIcon /></button>
      </div>
    </header>
  );
};

export default ChatHeader;
