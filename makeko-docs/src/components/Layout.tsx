"use client";

import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-[70px] min-h-screen">
        <div className="px-6 py-8 lg:px-12 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
