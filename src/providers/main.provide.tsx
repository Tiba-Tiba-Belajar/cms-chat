"use client";

import AuthProvider from "./auth.provider";
import { ToastProvider } from "@/components/ui/toast";

export default function MainProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </AuthProvider>
  );

}
