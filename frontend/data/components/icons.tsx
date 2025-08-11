import React from 'react';
import { MessageStatus } from '../../types';

export const SingleCheckIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15" className={className}><path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.059l-1.84-1.93a.364.364 0 0 0-.516.007l-.413.433a.364.364 0 0 0 .006.514l2.57 2.7a.32.32 0 0 0 .484-.058l6.052-8.03a.365.365 0 0 0-.063-.51z"></path></svg>
);

export const DoubleCheckIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15" className={className}><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.058l-1.782-1.86a.365.365 0 0 0-.516.005l-.413.433a.364.364 0 0 0 .006.514l2.57 2.7a.32.32 0 0 0 .484-.058l6.39-8.43a.365.365 0 0 0-.062-.51zM10.418 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.059l-1.84-1.93a.364.364 0 0 0-.516.007l-.413.433a.364.364 0 0 0 .006.514l2.57 2.7a.32.32 0 0 0 .484-.058l6.052-8.03a.365.365 0 0 0-.063-.51z"></path></svg>
);

export const MessageStatusIcon = ({ status }: { status: MessageStatus }) => {
  const color = status === MessageStatus.READ ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400';
  if (status === MessageStatus.SENT) {
    return <SingleCheckIcon className={color} />;
  }
  return <DoubleCheckIcon className={color} />;
};

export const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
);

export const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
);

export const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-white"><path fill="currentColor" d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg>
);

export const AttachmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="text-gray-500 dark:text-gray-400"><path fill="currentColor" d="M16.5 6V4.5c0-1.93-1.57-3.5-3.5-3.5S9.5 2.57 9.5 4.5V6H5v12h14V6h-2.5zm-7 0V4.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V6H9.5z"></path></svg>
);

export const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);
