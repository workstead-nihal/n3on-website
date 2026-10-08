import { Globe, MapPin, QrCode, Star, Zap, TrendingUp } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';

const iconMap = { Globe, MapPin, QrCode, Star, Zap, TrendingUp };

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="Everything Your Cafe Needs to"
        highlight="Win Online"
        subtitle="Six core services that take your restaurant from invisible to fully digital — all handled by one team."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.map((service, i) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Reveal key={service.title} delay={i * 0.08}>
              <Card glow="amber" className="group h-full p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon-amber/10 text-neon-amber transition-all duration-300 group-hover:bg-neon-amber/20 group-hover:shadow-[0_0_20px_rgba(255,159,28,0.3)]">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-cream">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-creamDark">{service.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
