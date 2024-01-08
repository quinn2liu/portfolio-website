import React, {ReactNode} from 'react';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import { Theme } from './theme';

const fira = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quinn Liu | Personal Portfolio',
  description: 'Quinn Liu is a current student at the University of Pennsylvania majoring in Computer Science with minors in Math and Design. He is interested in full-stack development and is currently looking for full-time opportunities in software engineering.',
};

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${fira.className} h-full font-medium bg-amber-50 text-gray-800 dark:bg-gray-800 dark:text-amber-100 sm:text-base text-xs`}>
        <Theme>{children}</Theme>
        {/* add a footer component here? */}
      </body>
    </html>
  );
}
