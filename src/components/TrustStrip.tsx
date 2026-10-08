import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

export function TrustStrip() {
  return (
    <section className="relative border-y border-neon-amber/10 bg-espresso-800/50 py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-6 sm:grid-cols-3">
          {siteConfig.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <span className="font-display text-4xl font-bold text-neon-amber neon-text-amber md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-creamDark md:text-base">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
