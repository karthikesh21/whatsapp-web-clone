import React, { useState } from 'react';
import { AttachmentIcon, SendIcon } from './icons';

interface MessageInputProps {
    onSendMessage: (text: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onSendMessage(text.trim());
            setText('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e as unknown as React.FormEvent);
        }
    };

    return (
        <footer className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 p-2 border-t border-gray-200 dark:border-gray-600">
            <form onSubmit={handleSubmit} className="flex items-center space-x-3">
                <button type="button" className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" aria-label="Attach file">
                    <AttachmentIcon />
                </button>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message"
                    className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    aria-label="Message Input"
                />
                <button type="submit" className="bg-green-500 hover:bg-green-600 rounded-full p-3 transition-colors duration-150 disabled:bg-gray-400" aria-label="Send Message" disabled={!text.trim()}>
                    <SendIcon />
                </button>
            </form>
        </footer>
    );
};

export default MessageInput;
