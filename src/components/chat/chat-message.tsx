import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Paperclip, Send } from 'lucide-react';
import { socketService } from '@/lib/socket';
// import { useChatStore } from '@/store/chat-store';
// import { useUserStore } from '@/store/user-store';

interface ChatInputProps {
  conversationId: string;
  onSubmit: (message: string, attachments?: File[]) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ conversationId, onSubmit }) => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get the current user
  // const currentUser = useUserStore(state => state.user);

  // Handle typing events
  const handleTyping = () => {
    if (!isTyping) {
      setIsTyping(true);
      socketService.startTyping(conversationId);
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      socketService.stopTyping(conversationId);
    }, 2000);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    handleTyping();
  };

  const handleAttachmentClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setAttachments([...attachments, ...newFiles]);
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() && attachments.length === 0) return;

    // Clear typing timeout and reset typing state
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      socketService.stopTyping(conversationId);
      setIsTyping(false);
    }

    onSubmit(message, attachments.length > 0 ? attachments : undefined);

    // Reset form
    setMessage('');
    setAttachments([]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-t-lg">
          {attachments.map((file, index) => (
            <div key={index} className="flex items-center gap-1 bg-white p-1 rounded border">
              <span className="text-xs truncate max-w-[100px]">{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemoveAttachment(index)}
                className="text-red-500 hover:text-red-700 text-xs"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-end gap-2 p-3 bg-white border-t">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleAttachmentClick}
          className="flex-shrink-0"
        >
          <Paperclip className="h-5 w-5" />
        </Button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
          className="hidden"
        />

        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Type a message..."
          rows={1}
          className="flex-1 resize-none border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />

        <Button
          type="submit"
          size="icon"
          className="flex-shrink-0"
          disabled={!message.trim() && attachments.length === 0}
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
};