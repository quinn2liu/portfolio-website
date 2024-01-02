'use client';

import { ThemeProvider } from 'next-themes';

export function Theme({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
