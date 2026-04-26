import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Fira_Code, Inter } from 'next/font/google';
import './globals.css';
import { Theme } from './theme';
import Sidebar from './components/layout/Sidebar';
import TopNav from './components/layout/TopNav';

const fira = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Quinn Liu | Personal Portfolio',
  description: 'Quinn Liu is a Software Engineer at Symbotic and a University of Pennsylvania CS graduate. He builds full-stack applications across web and mobile, with a focus on clean, user-driven design.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${fira.variable}
          ${inter.variable} font-sans
          h-full
          bg-amber-50 dark:bg-gray-900
          text-gray-900 dark:text-amber-100
          `}
      >
        <Theme>
          {/* Mobile top nav — hidden on md+ */}
          <TopNav />

          {/* Sidebar — fixed overlay, hidden on mobile */}
          <Sidebar />

          {/* Main content — full viewport width, content centered */}
          <main className="min-h-screen overflow-y-auto scrollbar-hide">
            <div className="max-w-2xl mx-auto px-8 py-10 md:py-12">
              {children}
            </div>
          </main>
        </Theme>
      </body>
    </html>
  );
}
