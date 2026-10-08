import { Star, Quote } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';

export function Testimonials() {
  return (
    <Section id="testimonials" className="circuit-bg">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by Cafe and"
        highlight="Restaurant Owners"
        subtitle="Real results from hospitality businesses we have helped go digital."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {siteConfig.testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.1}>
            <Card glow="amber" className="flex h-full flex-col p-6">
              <Quote size={28} className="mb-4 text-neon-amber/40" />
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} className="fill-neon-amber text-neon-amber" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-creamDark">"{t.quote}"</p>
              <div className="mt-5 border-t border-creamDark/10 pt-4">
                <p className="font-display text-sm font-semibold text-cream">{t.name}</p>
                <p className="text-xs text-neon-cyan">{t.business}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
