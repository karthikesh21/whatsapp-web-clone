
import { Conversation, MessageStatus } from '../types';

export const mockConversations: Conversation[] = [
  {
    user: {
      id: '919876543210',
      name: 'Alice Sharma',
      avatar: 'https://picsum.photos/seed/alice/200/200',
      phoneNumber: '+91 98765 43210',
    },
    messages: [
      { id: 'msg1', text: 'Hey, are we still on for the meeting tomorrow?', timestamp: '10:30 AM', fromMe: false, status: MessageStatus.READ },
      { id: 'msg2', text: 'Yes, absolutely! 2 PM at the usual place.', timestamp: '10:31 AM', fromMe: true, status: MessageStatus.READ },
      { id: 'msg3', text: 'Great, see you then!', timestamp: '10:32 AM', fromMe: false, status: MessageStatus.READ },
    ],
    unreadCount: 0,
  },
  {
    user: {
      id: '918765432109',
      name: 'Project Team',
      avatar: 'https://picsum.photos/seed/team/200/200',
      phoneNumber: '+91 87654 32109',
    },
    messages: [
      { id: 'msg4', text: 'Quick reminder: project deadline is this Friday.', timestamp: 'Yesterday', fromMe: false, status: MessageStatus.READ },
      { id: 'msg5', text: 'Thanks for the heads up. I\'m almost done with my part.', timestamp: 'Yesterday', fromMe: true, status: MessageStatus.READ },
      { id: 'msg6', text: 'I\'ve pushed the latest designs to the repo.', timestamp: '9:15 AM', fromMe: false, status: MessageStatus.READ },
      { id: 'msg7', text: 'Awesome, will check it out now.', timestamp: '9:16 AM', fromMe: true, status: MessageStatus.DELIVERED },
    ],
    unreadCount: 2,
  },
  {
    user: {
      id: '917654321098',
      name: 'Rohan Verma',
      avatar: 'https://picsum.photos/seed/rohan/200/200',
      phoneNumber: '+91 76543 21098',
    },
    messages: [
      { id: 'msg8', text: 'Did you see the latest news about the framework update?', timestamp: 'Yesterday', fromMe: true, status: MessageStatus.READ },
      { id: 'msg9', text: 'Oh no, I missed it. Anything major?', timestamp: 'Yesterday', fromMe: false, status: MessageStatus.READ },
      { id: 'msg10', text: 'Some breaking changes, but overall looks promising. Sending you the link.', timestamp: 'Yesterday', fromMe: true, status: MessageStatus.READ },
      { id: 'msg11', text: 'https://react.dev/blog/2024/04/25/react-19', timestamp: 'Yesterday', fromMe: true, status: MessageStatus.READ },
      { id: 'msg12', text: 'Perfect, thanks!', timestamp: '8:45 AM', fromMe: false, status: MessageStatus.READ },
    ],
    unreadCount: 0,
  },
  {
    user: {
      id: '916543210987',
      name: 'Priya Kumari',
      avatar: 'https://picsum.photos/seed/priya/200/200',
      phoneNumber: '+91 65432 10987',
    },
    messages: [
      { id: 'msg13', text: 'Happy Birthday! 🎉', timestamp: '12:00 AM', fromMe: false, status: MessageStatus.READ },
    ],
    unreadCount: 1,
  },
    {
    user: {
      id: '915432109876',
      name: 'Client Support',
      avatar: 'https://picsum.photos/seed/support/200/200',
      phoneNumber: '+91 54321 09876',
    },
    messages: [
      { id: 'msg14', text: 'Your ticket #5829 has been updated.', timestamp: 'Yesterday', fromMe: false, status: MessageStatus.READ },
      { id: 'msg15', text: 'Ok, thank you.', timestamp: 'Yesterday', fromMe: true, status: MessageStatus.SENT },
    ],
    unreadCount: 0,
  },
];
