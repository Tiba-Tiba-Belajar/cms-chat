'use client';

import { ToastProvider as ToastProviderPrimitive } from '@/components/ui/toast';

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <ToastProviderPrimitive>{children}</ToastProviderPrimitive>;
}