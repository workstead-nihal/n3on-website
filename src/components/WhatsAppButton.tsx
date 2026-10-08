import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    const tipTimer = setTimeout(() => setShowTip(true), 3500);
    return () => {
      clearTimeout(timer);
      clearTimeout(tipTimer);
    };
  }, []);

  const link = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${siteConfig.brand.name}! I'd like to learn more about your services.`,
  )}`;

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {showTip && (
        <div className="relative max-w-[200px] rounded-2xl rounded-br-sm border border-neon-cyan/20 bg-espresso-800 p-3 shadow-lg">
          <button
            onClick={() => setShowTip(false)}
            className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-espresso-600 text-creamDark hover:text-cream"
            aria-label="Dismiss"
          >
            <X size={12} />
          </button>
          <p className="text-xs text-cream">Need help? Chat with us on WhatsApp!</p>
        </div>
      )}

      {/* Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)]"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <MessageCircle size={26} className="relative z-10" />
      </a>
    </div>
  );
}
