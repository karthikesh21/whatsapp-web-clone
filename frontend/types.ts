
export enum MessageStatus {
  SENT = 'sent',
  DELIVERED = 'delivered',
  READ = 'read',
}

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  fromMe: boolean;
  status: MessageStatus;
}

export interface User {
  id: string; // wa_id
  name: string;
  avatar: string;
  phoneNumber: string;
}

export interface Conversation {
  user: User;
  messages: Message[];
  unreadCount: number;
}
