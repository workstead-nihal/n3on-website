import { m as motion } from 'framer-motion';
import { QrCode, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-40">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/2174069/pexels-photo-2174069.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Cozy coffee shop interior with warm vintage lighting"
          className="h-full w-full object-cover opacity-20"
          loading="eager"
          fetchPriority="high"
          srcSet="https://images.pexels.com/photos/2174069/pexels-photo-2174069.jpeg?auto=compress&cs=tinysrgb&w=768 768w, https://images.pexels.com/photos/2174069/pexels-photo-2174069.jpeg?auto=compress&cs=tinysrgb&w=1920 1920w"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/80 via-espresso-900/90 to-espresso-900" />
        <div className="absolute inset-0 circuit-bg opacity-50" />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-neon-amber/10 blur-[120px] z-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="mb-5 font-display text-sm font-medium uppercase tracking-[0.2em] text-neon-cyan neon-text-cyan">
              Where hospitality meets technology
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-6xl">
              We Turn Your Cafe Into a{' '}
              <span className="text-neon-amber neon-text-amber">Digital-First Brand.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-creamDark">
              Websites, QR menus, Google Business, review automation, and smart workflows — built
              for restaurants and cafes.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" size="lg" variant="primary">
                Book a Free Consultation
              </Button>
              <Button href="#services" size="lg" variant="outline">
                See Our Services
              </Button>
            </div>
          </motion.div>

          {/* Right: animated visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <CoffeeVisual />

            {/* Floating cards */}
            <FloatingCard
              icon={<TrendingUp size={16} className="text-neon-amber" />}
              text="+42% more Google reviews"
              className="absolute -left-2 top-4 animate-float-slow md:left-0"
            />
            <FloatingCard
              icon={<QrCode size={16} className="text-neon-cyan" />}
              text="QR menu scans today: 238"
              className="absolute -right-1 top-1/3 animate-float-medium md:right-0"
            />
            <FloatingCard
              icon={<Zap size={16} className="text-neon-amber" />}
              text="Orders automated"
              className="absolute left-2 bottom-4 animate-float-fast md:left-8"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CoffeeVisual() {
  return (
    <div className="relative h-80 w-80 sm:h-96 sm:w-96">
      {/* Glow base */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-neon-amber/20 blur-[60px]" />

      {/* Steam particles turning into data lines */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px w-16 bg-gradient-to-t from-neon-cyan/60 to-transparent"
            style={{ left: `${i * 18 - 27}px` }}
            animate={{
              y: [0, -80, -160],
              opacity: [0, 0.8, 0],
              scaleX: [1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Coffee cup */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <svg width="160" height="140" viewBox="0 0 160 140" fill="none" className="drop-shadow-[0_0_20px_rgba(255,159,28,0.3)]">
          {/* Saucer */}
          <ellipse cx="80" cy="130" rx="70" ry="8" fill="#2A211B" />
          {/* Cup body */}
          <path
            d="M25 50 L30 120 Q30 130 40 130 L120 130 Q130 130 130 120 L135 50 Z"
            fill="#1F1813"
            stroke="#FF9F1C"
            strokeWidth="2"
            opacity="0.9"
          />
          {/* Coffee surface */}
          <ellipse cx="80" cy="52" rx="52" ry="8" fill="#0D0907" stroke="#FF9F1C" strokeWidth="1.5" opacity="0.8" />
          {/* Handle */}
          <path
            d="M135 65 Q155 65 155 85 Q155 105 135 105"
            fill="none"
            stroke="#FF9F1C"
            strokeWidth="2"
            opacity="0.9"
          />
          {/* Neon glow lines on cup */}
          <path d="M40 70 L120 70" stroke="#2EE6D6" strokeWidth="1" opacity="0.4" />
          <path d="M42 90 L118 90" stroke="#2EE6D6" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Circuit pattern accents */}
      <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="140" fill="none" stroke="#2EE6D6" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="160" cy="160" r="110" fill="none" stroke="#FF9F1C" strokeWidth="1" strokeDasharray="2 6" />
      </svg>
    </div>
  );
}

function FloatingCard({
  icon,
  text,
  className = '',
}: {
  icon: React.ReactNode;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`glass-card flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium text-cream shadow-lg md:text-sm ${className}`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}
