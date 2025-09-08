'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export function Theme({ children }: {children: ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
