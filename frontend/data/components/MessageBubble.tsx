import React from 'react';
import { Message } from '../../types';
import { MessageStatusIcon } from './icons';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isFromMe = message.fromMe;
  const bubbleAlignment = isFromMe ? 'justify-end' : 'justify-start';
  const bubbleClass = isFromMe 
    ? 'bg-[#d9fdd3] dark:bg-[#005c4b]' 
    : 'bg-white dark:bg-gray-700';
  const bubbleStyle = isFromMe 
    ? 'rounded-lg rounded-tr-none' 
    : 'rounded-lg rounded-tl-none';

  return (
    <div className={`flex ${bubbleAlignment} mb-2`}>
      <div className={`${bubbleStyle} px-3 py-2 max-w-sm md:max-w-md lg:max-w-lg shadow-sm ${bubbleClass} transition-colors duration-200`}>
        <p className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words leading-relaxed">{message.text}</p>
        <div className="flex justify-end items-center mt-1 space-x-1">
          <p className="text-[11px] text-gray-500 dark:text-gray-400">{message.timestamp}</p>
          {isFromMe && <MessageStatusIcon status={message.status} />}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
