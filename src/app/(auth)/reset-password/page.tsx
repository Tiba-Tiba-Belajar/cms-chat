"use client";

import dynamic from "next/dynamic";

const RessetPasswordPage = dynamic(() => import("@/features/reset-password/reset-password.page"), {
  ssr: false,
});

export default function Page() {
  return <RessetPasswordPage />;
}