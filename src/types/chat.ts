export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'agent' | 'customer';
  status: 'online' | 'offline' | 'away';
}

export interface Message {
  id: string;
  conversationId: string;
  sender: User;
  content: string;
  attachments?: Attachment[];
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
  type: 'text' | 'system' | 'bot';
}

export interface Attachment {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'file' | 'video';
  size?: number;
}

export interface Conversation {
  id: string;
  participants: User[];
  messages: Message[];
  unreadCount: number;
  lastMessage?: Message;
  createdAt: string;
  updatedAt: string;
  source: 'website' | 'shopee' | 'tokopedia' | 'lazada';
  status: 'active' | 'resolved' | 'pending';
  tags?: string[];
}

export interface ChatWidget {
  id: string;
  name: string;
  color: string;
  position: 'left' | 'right';
  greeting: string;
  offlineMessage: string;
  enabled: boolean;
}

export interface ChatbotResponse {
  messageId: string;
  content: string;
  suggestedReplies?: string[];
}