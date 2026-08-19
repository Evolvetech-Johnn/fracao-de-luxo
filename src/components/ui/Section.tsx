import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string; // e.g. bg-marfim or bg-bordo
}

export function Section({ children, className = '', id, bgColor = 'bg-marfim' }: SectionProps) {
  return (
    <section id={id} className={`relative py-12 md:py-24 ${bgColor} ${className} after:content-[''] after:block after:md:hidden after:w-12 after:h-[2px] after:bg-ambar after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full after:opacity-70 after:z-10`}>
      {children}
    </section>
  );
}
