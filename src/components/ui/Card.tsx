import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  glow?: 'amber' | 'cyan' | 'none';
}

export function Card({ children, className = '', glow = 'none' }: CardProps) {
  const glowClass =
    glow === 'amber'
      ? 'hover:neon-border-amber'
      : glow === 'cyan'
        ? 'hover:neon-border-cyan'
        : '';

  return (
    <div
      className={`glass-card rounded-2xl transition-all duration-300 hover:-translate-y-1 ${glowClass} ${className}`}
    >
      {children}
    </div>
  );
}
