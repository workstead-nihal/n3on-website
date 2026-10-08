import { useState } from 'react';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [showReview, setShowReview] = useState(false);
  const categories = siteConfig.demoMenu.categories;

  return (
    <Section id="demo" className="circuit-bg">
      <SectionHeading
        eyebrow="See It in Action"
        title="Your Menu and Reviews,"
        highlight="In Their Pocket"
        subtitle="Tap through a live QR menu demo and see how automated review requests look on your customer's phone."
      />

      <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
        {/* Phone mockup: QR Menu */}
        <Reveal className="flex justify-center">
          <div className="relative">
            {/* Phone frame */}
            <div className="relative h-[560px] w-[280px] rounded-[2.5rem] border-4 border-espresso-600 bg-espresso-900 p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-espresso-700" />

              {/* Screen */}
              <div className="mt-8 h-[calc(100%-2rem)] overflow-hidden rounded-[2rem] bg-espresso-800">
                {/* Header */}
                <div className="border-b border-neon-amber/15 px-4 pb-3 pt-4">
                  <p className="font-display text-xs uppercase tracking-widest text-neon-cyan">
                    Scan &amp; Order
                  </p>
                  <h3 className="font-display text-lg font-bold text-cream">Brew &amp; Co. Cafe</h3>
                </div>

                {/* Category tabs */}
                <div className="flex gap-1 px-3 pt-3">
                  {categories.map((cat, i) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveTab(i)}
                      className={`flex-1 rounded-lg px-2 py-2 text-xs font-medium transition-all duration-200 ${
                        activeTab === i
                          ? 'bg-neon-amber text-espresso-900 shadow-[0_0_12px_rgba(255,159,28,0.4)]'
                          : 'text-creamDark hover:bg-espresso-700'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>

                {/* Menu items */}
                <div className="space-y-3 px-4 py-4">
                  {categories[activeTab].items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-2 rounded-lg bg-espresso-700/50 p-3"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-cream">{item.name}</p>
                        <p className="mt-0.5 text-xs text-creamDark/70">{item.desc}</p>
                      </div>
                      <span className="font-display text-sm font-semibold text-neon-amber">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Glow under phone */}
            <div className="absolute -bottom-4 left-1/2 h-20 w-40 -translate-x-1/2 rounded-full bg-neon-amber/15 blur-2xl" />
          </div>
        </Reveal>

        {/* Review request demo */}
        <Reveal delay={0.15} className="flex flex-col items-center lg:items-start">
          <div className="mb-6 text-center lg:text-left">
            <h3 className="font-display text-xl font-semibold text-cream">
              Automated Review Request
            </h3>
            <p className="mt-2 text-sm text-creamDark">
              After a customer visits, they get a friendly message like this — automatically.
            </p>
          </div>

          <button
            onClick={() => setShowReview(!showReview)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 px-5 py-2.5 text-sm font-medium text-neon-cyan transition-all hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(46,230,214,0.2)]"
          >
            <MessageCircle size={16} />
            {showReview ? 'Hide message preview' : 'Show message preview'}
          </button>

          {showReview && (
            <div className="w-full max-w-sm">
              {/* Chat bubble */}
              <div className="rounded-2xl rounded-bl-sm border border-neon-cyan/20 bg-espresso-800 p-4 shadow-lg">
                <div className="mb-3 flex items-center gap-2 border-b border-creamDark/10 pb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neon-cyan/20 text-neon-cyan">
                    <MessageCircle size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-cream">
                      {siteConfig.demoMenu.reviewMessage.business}
                    </p>
                    <p className="text-[10px] text-creamDark/60">WhatsApp Business</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-creamDark">
                  {siteConfig.demoMenu.reviewMessage.text}
                </p>
                <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-neon-amber px-4 py-2 text-xs font-semibold text-espresso-900 shadow-[0_0_12px_rgba(255,159,28,0.3)]">
                  {siteConfig.demoMenu.reviewMessage.buttonText}
                  <ArrowRight size={12} />
                </button>
              </div>

              {/* Rating stars */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="fill-neon-amber text-neon-amber" />
                  ))}
                </div>
                <span className="text-xs text-creamDark/60">Your future reviews</span>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
