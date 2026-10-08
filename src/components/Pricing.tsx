import { Check, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple, Transparent"
        highlight="Pricing"
        subtitle="Pick a plan that fits where your cafe is today. Upgrade anytime as you grow."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {siteConfig.pricing.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.1}>
            <div
              className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 md:p-8 ${
                plan.popular
                  ? 'border-neon-amber/50 bg-espresso-800/80 neon-border-amber lg:scale-105'
                  : 'border-creamDark/15 bg-espresso-800/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neon-amber px-4 py-1 text-xs font-bold uppercase tracking-wide text-espresso-900 shadow-[0_0_15px_rgba(255,159,28,0.4)]">
                  <span className="flex items-center gap-1">
                    <Sparkles size={12} /> Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-cream">{plan.name}</h3>
              <p className="mt-1 text-sm text-creamDark">{plan.description}</p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-cream">{plan.price}</span>
                <span className="text-sm text-creamDark/70">/ {plan.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-neon-amber/15 text-neon-amber">
                      <Check size={12} />
                    </span>
                    <span className="text-sm text-creamDark">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="#contact"
                  size="md"
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
