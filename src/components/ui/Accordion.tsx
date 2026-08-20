"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-rosa-antigo mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left font-bold text-lg text-carvao focus:outline-none focus-visible:ring-2 focus-visible:ring-ambar focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.225, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block transform"
        >
          {isOpen ? '–' : '+'}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.225, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-carvao text-base">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
