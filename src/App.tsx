import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustStrip } from '@/components/TrustStrip';
import { Services } from '@/components/Services';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyN3on } from '@/components/WhyN3on';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-espresso-900 grain-overlay">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <WhyN3on />
        <InteractiveDemo />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
