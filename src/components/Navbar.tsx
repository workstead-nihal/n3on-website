import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-espresso-900/90 backdrop-blur-md border-b border-neon-amber/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-1 font-display text-2xl font-bold">
          <span className="text-cream">N</span>
          <span className="animate-neon-flicker text-neon-amber">3</span>
          <span className="text-cream">on Tech</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-creamDark transition-colors hover:text-neon-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#contact" size="sm" variant="primary">
            Get a Free Audit
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-cream lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-neon-amber/10 bg-espresso-900/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {siteConfig.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-creamDark transition-colors hover:bg-espresso-700 hover:text-neon-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 px-4">
              <Button
                href="#contact"
                size="md"
                variant="primary"
                className="w-full"
              >
                Get a Free Audit
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
