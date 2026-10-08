import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative px-5 py-20 md:px-10 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="mb-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-neon-amber">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-cream md:text-4xl lg:text-5xl">
        {title} {highlight && <span className="text-neon-amber neon-text-amber">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base text-creamDark md:text-lg ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
