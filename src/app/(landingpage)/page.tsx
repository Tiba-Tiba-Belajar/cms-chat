"use client";

import dynamic from "next/dynamic";

const LandingPage = dynamic(
  () => import("@/features/landing-page/landing-page.page"),
  {
    ssr: true,
  }
);

export default function Page() {
  return (
    <LandingPage />
  );
}