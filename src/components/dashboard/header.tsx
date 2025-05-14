import React from 'react';
import { Bell, Search } from 'lucide-react';
import Image from 'next/image';
// import { useUserStore } from '@/store/user-store';

export const Header = () => {
  // In a real app, we would get this from the store
  const user = {
    name: 'John Doe',
    avatar: 'https://avatars.githubusercontent.com/u/200611690'
  };

  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center px-6">
      <div className="flex-1">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search chats, contacts..."
            className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-1 text-gray-400 hover:text-gray-500">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center space-x-3">
          <div className="text-sm font-medium text-gray-700">{user.name}</div>
          <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
            <Image src={user.avatar} alt={user.name} width={32} height={32} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
};