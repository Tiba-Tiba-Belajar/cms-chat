import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Conversation, User, Message } from '@/types/chat';
import { AnalyticsData } from '@/types/api';

// Helper function for combining class names with Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to generate a random date within the last few days
const randomDate = (daysAgo = 7) => {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
  date.setHours(
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60),
    Math.floor(Math.random() * 60)
  );
  return date.toISOString();
};

// Generate random user
const generateUser = (role: 'admin' | 'agent' | 'customer', index: number): User => {
  if (role === 'admin') {
    return {
      id: 'admin-1',
      name: 'Admin User',
      email: 'admin@example.com',
      avatar: 'https://avatars.githubusercontent.com/u/1234567',
      role: 'admin',
      status: 'online'
    };
  }
  
  if (role === 'agent') {
    return {
      id: `agent-${index}`,
      name: `Agent ${index}`,
      email: `agent${index}@example.com`,
      avatar: `https://avatars.githubusercontent.com/u/${1000000 + index}`,
      role: 'agent',
      status: Math.random() > 0.3 ? 'online' : 'offline'
    };
  }
  
  // Customer
  const names = [
    'John Doe', 'Jane Smith', 'Robert Johnson', 'Maria Garcia', 
    'David Chen', 'Sophia Lee', 'Ali Hassan', 'Emma Wilson',
    'Mohamed Ahmed', 'Aisha Khan', 'Olivia Johnson', 'Hiroshi Tanaka'
  ];
  
  return {
    id: `customer-${index}`,
    name: names[index % names.length],
    email: `customer${index}@example.com`,
    avatar: Math.random() > 0.5 ? `https://avatars.githubusercontent.com/u/${2000000 + index}` : undefined,
    role: 'customer',
    status: Math.random() > 0.5 ? 'online' : 'offline'
  };
};

// Generate random message
const generateMessage = (conversationId: string, sender: User, isLatest = false): Message => {
  const messageTemplates = [
    "Hi there! I have a question about your service.",
    "I'm having an issue with my order #12345.",
    "Can you help me with the premium plan features?",
    "Is there a way to cancel my subscription?",
    "I want to know more about the pricing plans.",
    "How do I integrate the widget with my website?",
    "The chat widget isn't working on mobile devices.",
    "Do you offer enterprise solutions?",
    "I need help with setting up integrations.",
    "When will my order be delivered?",
    "Can I get a refund for my purchase?",
    "The product I received is damaged.",
    "I love your service! Just wanted to say thanks.",
    "Do you have any discount codes available?",
    "How can I become a partner?",
  ];
  
  const botResponses = [
    "Thank you for contacting us! An agent will be with you shortly.",
    "I understand you're having an issue. Let me help you with that.",
    "I'd be happy to assist you with your question about our services.",
    "Let me check the status of your order for you right away.",
    "I'll need a bit more information to help you properly.",
    "Based on what you've told me, I'd recommend the following solution...",
    "I've analyzed your issue and here's what I found.",
    "I'll escalate this to one of our human agents who can better assist you.",
  ];
  
  const messageText = sender.role === 'customer' 
    ? messageTemplates[Math.floor(Math.random() * messageTemplates.length)]
    : (sender.role === 'admin' || sender.role === 'agent')
      ? "Thanks for reaching out! We'll help you with your query right away."
      : botResponses[Math.floor(Math.random() * botResponses.length)];
  
  return {
    id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    conversationId,
    sender,
    content: messageText,
    timestamp: isLatest ? new Date().toISOString() : randomDate(),
    status: Math.random() > 0.7 ? 'read' : Math.random() > 0.5 ? 'delivered' : 'sent',
    type: sender.id.startsWith('bot') ? 'bot' : 'text'
  };
};

// Generate random conversation
const generateConversation = (index: number): Conversation => {
  const sources: ('website' | 'shopee' | 'tokopedia' | 'lazada')[] = ['website', 'shopee', 'tokopedia', 'lazada'];
  const source: 'website' | 'shopee' | 'tokopedia' | 'lazada' = sources[Math.floor(Math.random() * sources.length)];
  const statuses: ('active' | 'resolved' | 'pending')[] = ['active', 'resolved', 'pending'];
  const status: 'active' | 'resolved' | 'pending' = statuses[Math.floor(Math.random() * statuses.length)];
  
  const customer = generateUser('customer', index);
  const agent = generateUser('agent', Math.floor(Math.random() * 5));
  const bot = {
    id: 'bot-1',
    name: 'AI Assistant',
    email: 'bot@example.com',
    role: 'admin' as const,
    status: 'online' as const
  };
  
  const participants = [customer, agent];
  const messageCount = Math.floor(Math.random() * 10) + 1;
  const messages: Message[] = [];
  
  // First message from customer
  messages.push(generateMessage(`conv-${index}`, customer));
  
  // Bot response
  messages.push(generateMessage(`conv-${index}`, bot));
  
  // Subsequent messages
  for (let i = 0; i < messageCount; i++) {
    const sender = Math.random() > 0.5 ? customer : agent;
    messages.push(generateMessage(`conv-${index}`, sender, i === messageCount - 1));
  }
  
  // Sort messages by timestamp
  messages.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  
  const lastMessage = messages[messages.length - 1];
  const unreadCount = lastMessage.sender.id !== agent.id ? Math.floor(Math.random() * 5) : 0;
  
  return {
    id: `conv-${index}`,
    participants,
    messages,
    unreadCount,
    lastMessage,
    createdAt: messages[0].timestamp,
    updatedAt: lastMessage.timestamp,
    source,
    status,
    tags: Math.random() > 0.5 ? ['urgent', 'support'] : ['general']
  };
};

// Generate dummy analytics data
export const generateAnalyticsData = (): AnalyticsData => {
  const days = 30;
  const visitorHistory = [];
  const conversationHistory = [];
  const responseTimeHistory = [];
  const satisfactionHistory = [];
  
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    
    visitorHistory.push({
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 100) + 50
    });
    
    conversationHistory.push({
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 50) + 10
    });
    
    responseTimeHistory.push({
      date: date.toISOString().split('T')[0],
      value: Math.floor(Math.random() * 300) + 60
    });
    
    satisfactionHistory.push({
      date: date.toISOString().split('T')[0],
      value: Math.floor(Math.random() * 2) + 3
    });
  }
  
  return {
    visitors: {
      total: visitorHistory.reduce((sum, item) => sum + item.count, 0),
      trend: 12.5,
      history: visitorHistory
    },
    conversations: {
      total: conversationHistory.reduce((sum, item) => sum + item.count, 0),
      trend: 8.2,
      history: conversationHistory
    },
    responseTime: {
      average: Math.round(responseTimeHistory.reduce((sum, item) => sum + item.value, 0) / days),
      trend: -5.3,
      history: responseTimeHistory
    },
    satisfaction: {
      average: parseFloat((satisfactionHistory.reduce((sum, item) => sum + item.value, 0) / days).toFixed(1)),
      trend: 2.1,
      history: satisfactionHistory
    },
    channelDistribution: {
      website: 45,
      shopee: 25,
      tokopedia: 20,
      lazada: 10
    }
  };
};

// Generate all dummy data for the application
export const generateDummyData = () => {
  const conversationCount = 15;
  const conversations: Conversation[] = [];
  
  for (let i = 0; i < conversationCount; i++) {
    conversations.push(generateConversation(i));
  }
  
  // Sort conversations by updatedAt date (newest first)
  conversations.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  
  return {
    conversations,
    analytics: generateAnalyticsData()
  };
};