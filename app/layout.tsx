import React from 'react';
import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });
const fira = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quinn Liu | Personal Portfolio',
  description: 'Quinn is a current student at the University of Pennsylvania majoring in Computer Science with minors in Math and Design. He is interested in full-stack development and is currently looking for full-time opportunities in software engineering.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${fira.className} bg-amber-100 text-gray-950`} style={{ height: '1500px' }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
