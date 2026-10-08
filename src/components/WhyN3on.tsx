import { X, Check } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function WhyN3on() {
  return (
    <Section id="why-us">
      <SectionHeading
        eyebrow="Why N3on Tech"
        title="The Difference Is"
        highlight="Night & Day"
        subtitle="See what changes when your cafe goes digital with the right partner."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Without N3on */}
        <Reveal>
          <div className="rounded-2xl border border-creamDark/15 bg-espresso-800/40 p-6 md:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold text-creamDark">
              Without N3on
            </h3>
            <ul className="space-y-4">
              {siteConfig.comparison.without.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-creamDark/10 text-creamDark">
                    <X size={12} />
                  </span>
                  <span className="text-sm text-creamDark/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* With N3on */}
        <Reveal delay={0.15}>
          <div className="rounded-2xl border border-neon-amber/30 bg-espresso-800/60 p-6 neon-border-amber md:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold text-neon-amber neon-text-amber">
              With N3on
            </h3>
            <ul className="space-y-4">
              {siteConfig.comparison.with.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-neon-amber/20 text-neon-amber">
                    <Check size={12} />
                  </span>
                  <span className="text-sm text-cream">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
