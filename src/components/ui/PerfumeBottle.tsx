import React from 'react';

export function PerfumeBottle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="45" y="10" width="30" height="20" rx="3" fill="currentColor" opacity="0.9" />
      <rect x="52" y="0" width="16" height="14" rx="2" fill="currentColor" opacity="0.7" />
      <path
        d="M40 35 h40 a6 6 0 0 1 6 6 v130 a20 20 0 0 1 -20 20 h-12 a20 20 0 0 1 -20 -20 v-130 a6 6 0 0 1 6 -6 z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <rect x="34" y="80" width="52" height="46" rx="4" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
