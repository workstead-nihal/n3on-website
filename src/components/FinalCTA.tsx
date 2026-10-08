import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const serviceOptions = siteConfig.services.map((s) => s.title);

interface FormErrors {
  name?: string;
  business?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export function FinalCTA() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    business: '',
    phone: '',
    service: '',
    message: '',
  });

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.business.trim()) e.business = 'Please enter your business name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone or WhatsApp number';
    else if (form.phone.trim().length < 7) e.phone = 'Please enter a valid phone number';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Please tell us a bit about your needs';
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // ============================================================
    // BACKEND HOOK: Connect your email service or Supabase here.
    // The form data is in the `form` state object.
    // Example: await supabase.from('leads').insert(form)
    //          or: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
    // ============================================================
    const body = `Name: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`;
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Website enquiry from ${form.business}`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  const whatsappLink = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi N3on Tech! I'm ${form.name || '[name]'} from ${form.business || '[business]'}. I'd like to chat about your services.`,
  )}`;

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-20 md:px-10 md:py-28">
      {/* Neon glow background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-amber/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-neon-cyan/8 blur-[100px]" />
      </div>

      <Reveal className="relative z-10 mx-auto max-w-4xl">
        <div className="rounded-3xl border border-neon-amber/20 bg-espresso-800/60 p-6 neon-border-amber backdrop-blur-md md:p-12">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-cream md:text-4xl lg:text-5xl">
              Ready to Make Your Cafe{' '}
              <span className="text-neon-amber neon-text-amber">Smarter?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-creamDark">
              Get a free audit of your digital presence. We'll show you exactly where you can grow —
              no pressure, no jargon.
            </p>
          </div>

          {submitted ? (
            <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-neon-cyan/30 bg-espresso-700/50 p-8 text-center">
              <CheckCircle size={48} className="mb-4 text-neon-cyan" />
              <h3 className="font-display text-xl font-semibold text-cream">Email Draft Ready</h3>
              <p className="mt-2 max-w-sm text-sm text-creamDark">
                Send the draft in your email app to complete your enquiry. If no app opened,
                contact us at {siteConfig.contact.email}.
              </p>
              <div className="mt-6">
                <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="secondary" size="md">
                  <MessageCircle size={16} /> Chat on WhatsApp
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Your Name"
                  error={errors.name}
                  input={
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="John Smith"
                      className={inputClass(errors.name)}
                    />
                  }
                />
                <FormField
                  label="Business Name"
                  error={errors.business}
                  input={
                    <input
                      type="text"
                      value={form.business}
                      onChange={(e) => update('business', e.target.value)}
                      placeholder="Brew & Co. Cafe"
                      className={inputClass(errors.business)}
                    />
                  }
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Phone / WhatsApp"
                  error={errors.phone}
                  input={
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className={inputClass(errors.phone)}
                    />
                  }
                />
                <FormField
                  label="Service Interested In"
                  error={errors.service}
                  input={
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className={inputClass(errors.service)}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-espresso-800 text-cream">
                          {opt}
                        </option>
                      ))}
                    </select>
                  }
                />
              </div>

              <FormField
                label="Message"
                error={errors.message}
                input={
                  <textarea
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us about your cafe and what you'd like to improve..."
                    rows={4}
                    className={inputClass(errors.message)}
                  />
                }
              />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neon-amber px-8 py-4 text-base font-semibold text-espresso-900 transition-all duration-300 hover:bg-neon-amberLight hover:shadow-[0_0_30px_rgba(255,159,28,0.6)] active:scale-95"
                >
                  <Send size={16} /> Open Email Draft
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neon-cyan/40 px-6 py-4 text-sm font-medium text-neon-cyan transition-all hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_rgba(46,230,214,0.2)]"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}

function FormField({
  label,
  error,
  input,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-creamDark">{label}</label>
      {input}
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function inputClass(error?: string): string {
  const base =
    'w-full rounded-xl border bg-espresso-700/50 px-4 py-3 text-sm text-cream placeholder:text-creamDark/40 transition-all duration-200 focus:outline-none focus:ring-2';
  return error
    ? `${base} border-red-400/50 focus:ring-red-400/30`
    : `${base} border-creamDark/15 focus:border-neon-amber/40 focus:ring-neon-amber/20`;
}
