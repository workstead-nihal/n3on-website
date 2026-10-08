import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-neon-amber text-espresso-900 font-semibold hover:bg-neon-amberLight shadow-[0_0_20px_rgba(255,159,28,0.4)] hover:shadow-[0_0_30px_rgba(255,159,28,0.6)]',
  secondary:
    'bg-neon-cyan text-espresso-900 font-semibold hover:bg-neon-cyanLight shadow-[0_0_20px_rgba(46,230,214,0.3)] hover:shadow-[0_0_30px_rgba(46,230,214,0.5)]',
  outline:
    'border border-neon-amber/50 text-cream hover:bg-neon-amber/10 hover:border-neon-amber hover:shadow-[0_0_20px_rgba(255,159,28,0.2)]',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  target,
  rel,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
