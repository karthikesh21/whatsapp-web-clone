
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Welcome = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
      <div className="text-center p-8">
        <FontAwesomeIcon icon={faWhatsapp} className="w-40 h-40 mx-auto mb-4 text-green-500" />
        <h2 className="text-3xl font-light text-gray-700 dark:text-gray-300">Keep your phone connected</h2>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
          This is a demo app to simulate WhatsApp conversations.
        </p>
        <hr className="my-6 border-gray-300 dark:border-gray-600" />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Select a chat on the left to start messaging.
        </p>
      </div>
    </div>
  );
};

export default Welcome;