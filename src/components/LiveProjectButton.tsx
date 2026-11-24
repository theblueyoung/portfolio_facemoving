import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
}

export function LiveProjectButton({ onClick, className = '' }: LiveProjectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] whitespace-nowrap shrink-0 cursor-pointer transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] ${className}`}
    >
      Live Project
    </button>
  );
}
