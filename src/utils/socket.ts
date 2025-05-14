import { io, Socket } from 'socket.io-client';
import { Message, User } from '@/types/chat';

interface ServerToClientEvents {
  'message:received': (message: Message) => void;
  'conversation:created': (conversationId: string) => void;
  'user:status': (user: { id: string; status: User['status'] }) => void;
  'typing:start': (data: { conversationId: string; userId: string }) => void;
  'typing:stop': (data: { conversationId: string; userId: string }) => void;
}

interface ClientToServerEvents {
  'message:send': (message: Omit<Message, 'id' | 'timestamp' | 'status'>) => void;
  'conversation:join': (conversationId: string) => void;
  'conversation:leave': (conversationId: string) => void;
  'typing:start': (conversationId: string) => void;
  'typing:stop': (conversationId: string) => void;
  'user:online': () => void;
  'user:offline': () => void;
  'user:away': () => void;
}

class SocketService {
  private socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;
  private isConnected = false;

  connect(token: string): void {
    if (this.isConnected && this.socket) return;

    const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:8080';
    
    this.socket = io(SOCKET_URL, {
      auth: { token },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    this.socket.on('connect', () => {
      this.isConnected = true;
      console.log('Socket connected');
      this.socket?.emit('user:online');
    });

    this.socket.on('disconnect', () => {
      this.isConnected = false;
      console.log('Socket disconnected');
    });
  }

  disconnect(): void {
    if (!this.socket) return;

    this.socket.emit('user:offline');
    this.socket.disconnect();
    this.isConnected = false;
    this.socket = null;
  }

  sendMessage(message: Omit<Message, 'id' | 'timestamp' | 'status'>): void {
    if (!this.socket || !this.isConnected) {
      console.error('Socket is not connected');
      return;
    }
    this.socket.emit('message:send', message);
  }

  joinConversation(conversationId: string): void {
    if (!this.socket || !this.isConnected) return;
    this.socket.emit('conversation:join', conversationId);
  }

  leaveConversation(conversationId: string): void {
    if (!this.socket || !this.isConnected) return;
    this.socket.emit('conversation:leave', conversationId);
  }

  startTyping(conversationId: string): void {
    if (!this.socket || !this.isConnected) return;
    this.socket.emit('typing:start', conversationId);
  }

  stopTyping(conversationId: string): void {
    if (!this.socket || !this.isConnected) return;
    this.socket.emit('typing:stop', conversationId);
  }

  onMessageReceived(callback: (message: Message) => void): () => void {
    if (!this.socket) return () => {};
    
    this.socket.on('message:received', callback);
    return () => {
      this.socket?.off('message:received', callback);
    };
  }

  onTypingStart(callback: (data: { conversationId: string; userId: string }) => void): () => void {
    if (!this.socket) return () => {};
    
    this.socket.on('typing:start', callback);
    return () => {
      this.socket?.off('typing:start', callback);
    };
  }

  onTypingStop(callback: (data: { conversationId: string; userId: string }) => void): () => void {
    if (!this.socket) return () => {};
    
    this.socket.on('typing:stop', callback);
    return () => {
      this.socket?.off('typing:stop', callback);
    };
  }

  onUserStatus(callback: (user: { id: string; status: User['status'] }) => void): () => void {
    if (!this.socket) return () => {};
    
    this.socket.on('user:status', callback);
    return () => {
      this.socket?.off('user:status', callback);
    };
  }
}

export const socketService = new SocketService();