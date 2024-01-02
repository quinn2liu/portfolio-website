'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border-white bg-amber-700 shadow-sm shadow-black/[0.03] sm:top-0 sm:h[5rem] sm:w-[36rem] sm:rounded-none"
        initial={{ y: -100, x: '-50%', opacity: 1 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />
      <nav className="fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul />
      </nav>
    </header>
  );
}
