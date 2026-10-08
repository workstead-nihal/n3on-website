import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions?"
        highlight="We Have Answers"
        subtitle="Everything you might want to know before getting started."
      />

      <div className="mx-auto mt-14 max-w-3xl space-y-3">
        {siteConfig.faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={faq.question} delay={i * 0.05}>
              <div
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? 'border-neon-amber/30 bg-espresso-800/60'
                    : 'border-creamDark/10 bg-espresso-800/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-medium text-cream md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-neon-amber transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-creamDark">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
