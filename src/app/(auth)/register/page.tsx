"use client";

import dynamic from "next/dynamic";

const RegisterPage = dynamic(() => import("@/features/register/register.page"), {
  ssr: false,
});

export default function Page() {
  return <RegisterPage />;
}