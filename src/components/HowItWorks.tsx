import { siteConfig } from '@/config/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="circuit-bg">
      <SectionHeading
        eyebrow="How It Works"
        title="From Audit to"
        highlight="Growth — in 4 Steps"
        subtitle="A simple, transparent process. No tech jargon, no surprises — just results."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {siteConfig.steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.15}>
            <div className="relative">
              {/* Connecting line */}
              {i < siteConfig.steps.length - 1 && (
                <div className="absolute top-8 left-full hidden h-px w-full bg-gradient-to-r from-neon-amber/40 to-transparent lg:block" />
              )}

              {/* Number circle */}
              <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-neon-amber/30 bg-espresso-700 font-display text-2xl font-bold text-neon-amber neon-text-amber shadow-[0_0_15px_rgba(255,159,28,0.15)]">
                {step.number}
              </div>

              <h3 className="mb-2 font-display text-lg font-semibold text-cream">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-creamDark">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
