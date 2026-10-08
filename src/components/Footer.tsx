import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Footer() {
  const { brand, contact, nav } = siteConfig;
  const socials = [
    { icon: Instagram, href: contact.social.instagram, label: 'Instagram' },
    { icon: Facebook, href: contact.social.facebook, label: 'Facebook' },
    { icon: Twitter, href: contact.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: contact.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-neon-amber/10 bg-espresso-900 px-5 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-1 font-display text-2xl font-bold">
              <span className="text-cream">N</span>
              <span className="animate-neon-flicker text-neon-amber">3</span>
              <span className="text-cream">on Tech</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-creamDark">{brand.tagline}</p>
            <p className="mt-2 max-w-xs text-sm text-creamDark/70">
              Digital growth and automation for restaurants and cafes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-cream">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-creamDark transition-colors hover:text-neon-amber"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#demo"
                  className="text-sm text-creamDark transition-colors hover:text-neon-amber"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-cream">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-creamDark">
                <Mail size={16} className="flex-shrink-0 text-neon-amber" />
                <a href={`mailto:${contact.email}`} className="hover:text-neon-amber">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-creamDark">
                <Phone size={16} className="flex-shrink-0 text-neon-amber" />
                <a href={`tel:${contact.phone}`} className="hover:text-neon-amber">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-creamDark">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-neon-amber" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-cream">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-creamDark/15 bg-espresso-700/50 text-creamDark transition-all duration-300 hover:border-neon-amber/40 hover:text-neon-amber hover:shadow-[0_0_15px_rgba(255,159,28,0.2)]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-creamDark/10 pt-6 text-center">
          <p className="text-xs text-creamDark/60">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
