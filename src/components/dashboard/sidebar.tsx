'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MessageCircle,
  BarChart2,
  Settings,
  Users,
  Layout,
  Bot,
  Layers,
  LogOut
} from 'lucide-react';

const navItems = [
  {
    name: 'Chats',
    href: '/chats',
    icon: MessageCircle,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: BarChart2,
  },
  {
    name: 'Integrations',
    href: '/integrations',
    icon: Layers,
  },
  {
    name: 'Chatbots',
    href: '/chatbots',
    icon: Bot,
  },
  {
    name: 'Widget',
    href: '/widget',
    icon: Layout,
  },
  {
    name: 'Team',
    href: '/team',
    icon: Users,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      <div className="p-6">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="ml-2 text-xl font-semibold">ChatApp</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isActive
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
                }`}
            >
              <item.icon className={`h-5 w-5 mr-3 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
          <LogOut className="h-5 w-5 mr-3 text-gray-400" />
          Logout
        </button>
      </div>
    </aside>
  );
};