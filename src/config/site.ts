// ============================================================
// N3ON TECH — SITE CONFIG
// Edit this file to update all content: copy, prices, contact, etc.
// ============================================================

export const siteConfig = {
  brand: {
    name: 'N3on Tech',
    tagline: 'Where hospitality meets technology.',
  },

  contact: {
    email: 'info@n3ontech.in',
    phone: '+91 79785 73015',
    whatsappNumber: '917978573015', // digits only, used for wa.me links
    address: '221B Brew Street, Coffee District, Portland, OR 97201',
    social: {
      instagram: 'https://instagram.com/n3ontech',
      facebook: 'https://facebook.com/n3ontech',
      twitter: 'https://twitter.com/n3ontech',
      linkedin: 'https://linkedin.com/company/n3ontech',
    },
  },

  stats: [
    { value: '50+', label: 'Cafes & restaurants helped' },
    { value: '4.9', label: 'Average client rating' },
    { value: '24h', label: 'Setup time for QR menus' },
  ],

  services: [
    {
      icon: 'Globe',
      title: 'Website Designing',
      description:
        'Fast, mobile-first websites built specifically for cafes and restaurants. Beautiful design, instant loading, and easy online ordering.',
    },
    {
      icon: 'MapPin',
      title: 'Google Business Setup',
      description:
        'Profile creation, optimization, photos, and local SEO so customers searching nearby find you first — not your competitors.',
    },
    {
      icon: 'QrCode',
      title: 'QR Menus',
      description:
        'Instant digital menus your customers scan and browse on their phones. Update items in seconds — no reprinting, no hassle.',
    },
    {
      icon: 'Star',
      title: 'Review Request Automation',
      description:
        'Automatically ask happy customers for Google reviews via WhatsApp or SMS after their visit. Build a 5-star reputation on autopilot.',
    },
    {
      icon: 'Zap',
      title: 'Business Automations',
      description:
        'Orders, reservations, follow-ups, daily reports, and repetitive tasks — all running on autopilot so you can focus on the food.',
    },
    {
      icon: 'TrendingUp',
      title: 'Digital Growth Support',
      description:
        'Ongoing help to keep you visible and efficient. We monitor, tweak, and improve your digital presence month after month.',
    },
  ],

  steps: [
    {
      number: '01',
      title: 'Free Audit',
      description:
        'We review your current online presence — website, Google profile, reviews, and workflows — and show you exactly where you are leaking customers.',
    },
    {
      number: '02',
      title: 'Plan & Design',
      description:
        'We craft a tailored digital plan: a stunning website, QR menu design, and automation blueprints that fit your brand and budget.',
    },
    {
      number: '03',
      title: 'Build & Automate',
      description:
        'We build everything — website, QR menu, Google profile, and review automation — and connect it all so it runs without you lifting a finger.',
    },
    {
      number: '04',
      title: 'Launch & Grow',
      description:
        'We go live, monitor performance, and keep optimizing. You see more reviews, more foot traffic, and more time back in your day.',
    },
  ],

  comparison: {
    without: [
      'Customers can\'t find you on Google',
      'Paper menus that cost money to reprint',
      'Happy customers leave without leaving a review',
      'Hours spent on manual bookings and follow-ups',
      'No online presence beyond a social media page',
      'Falling behind tech-savvy competitors',
    ],
    with: [
      'You show up first in local Google searches',
      'QR menus updated instantly — zero printing costs',
      'Automated review requests after every visit',
      'Bookings, orders, and reports running on autopilot',
      'A polished website that turns visitors into customers',
      'Ongoing digital growth that keeps you ahead',
    ],
  },

  demoMenu: {
    categories: [
      {
        name: 'Coffee',
        items: [
          { name: 'Espresso', price: '$3.00', desc: 'Rich double shot, pulled to order' },
          { name: 'Flat White', price: '$4.50', desc: 'Silky microfoam over a double ristretto' },
          { name: 'Caramel Latte', price: '$5.00', desc: 'House caramel, steamed milk, espresso' },
          { name: 'Cold Brew', price: '$4.50', desc: '18-hour steeped, smooth and bold' },
        ],
      },
      {
        name: 'Snacks',
        items: [
          { name: 'Avocado Toast', price: '$8.00', desc: 'Sourdough, smashed avo, chili flakes' },
          { name: 'Croissant', price: '$4.00', desc: 'Buttery, flaky, baked fresh daily' },
          { name: 'Bagel & Cream Cheese', price: '$5.50', desc: 'Toasted bagel, house cream cheese' },
          { name: 'Granola Bowl', price: '$7.00', desc: 'House granola, yogurt, seasonal fruit' },
        ],
      },
      {
        name: 'Desserts',
        items: [
          { name: 'Cheesecake', price: '$6.50', desc: 'New York style, berry compote' },
          { name: 'Brownie', price: '$4.50', desc: 'Fudgy, walnut, sea salt finish' },
          { name: 'Tiramisu', price: '$7.00', desc: 'Classic, espresso-soaked ladyfingers' },
          { name: 'Cookie', price: '$3.00', desc: 'Warm chocolate chip, edge-crisp' },
        ],
      },
    ],
    reviewMessage: {
      business: 'Brew & Co. Cafe',
      text: "Hi Sarah! Thanks for visiting Brew & Co. today. We'd love your feedback — could you take 10 seconds to leave us a Google review? It really helps small cafes like ours grow.",
      buttonText: 'Leave a Google Review',
    },
  },

  pricing: [
    {
      name: 'Starter',
      price: '$499',
      period: 'one-time',
      description: 'Everything you need to get online and look professional.',
      features: [
        'Mobile-first website (up to 3 pages)',
        'QR menu with your first 20 items',
        'Google Business profile setup',
        'Basic local SEO',
        '2 rounds of revisions',
        '30 days post-launch support',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      price: '$899',
      period: 'one-time',
      description: 'For cafes ready to automate reviews and grow faster.',
      features: [
        'Everything in Starter, plus:',
        'Website with online ordering (up to 6 pages)',
        'Unlimited QR menu items & categories',
        'Review request automation (WhatsApp/SMS)',
        'Advanced local SEO & keyword targeting',
        'Booking & reservation automation',
        '60 days post-launch support',
      ],
      popular: true,
    },
    {
      name: 'Full Digital Partner',
      price: '$199/mo',
      period: 'ongoing',
      description: 'We become your digital team — hands-on, every month.',
      features: [
        'Everything in Growth, plus:',
        'Custom automation workflows',
        'Monthly performance reports',
        'Menu & content updates anytime',
        'Ongoing SEO & review management',
        'Priority support (same-day response)',
        'Quarterly strategy sessions',
      ],
      popular: false,
    },
  ],

  testimonials: [
    {
      name: 'Maria Gonzalez',
      business: 'Cafe Aurora',
      quote:
        'Within a month of launching our new website and QR menu, our Google reviews doubled. The automated review requests are pure magic — our customers love how easy it is.',
      rating: 5,
    },
    {
      name: 'James O\'Sullivan',
      business: 'The Crooked Spoon',
      quote:
        'N3on Tech rebuilt our website and set up our Google profile. We went from invisible to the top of local search. Walk-ins have gone up noticeably since launch.',
      rating: 5,
    },
    {
      name: 'Aisha Rahman',
      business: 'Saffron & Steam',
      quote:
        'The booking automation alone saved me 6 hours a week. No more phone calls during the lunch rush. The team is responsive, friendly, and genuinely cares about our success.',
      rating: 5,
    },
  ],

  faqs: [
    {
      question: 'How long does setup take?',
      answer:
        'Most projects launch within 5 to 10 business days. QR menus can be ready in as little as 24 hours. Larger projects with custom automations may take up to 3 weeks, but we will give you a clear timeline during your free audit.',
    },
    {
      question: 'Do I need technical knowledge?',
      answer:
        'Not at all. We handle everything from start to finish — design, setup, automation, and launch. You just tell us about your business, and we take care of the rest. If you ever want to update something yourself, we will show you how.',
    },
    {
      question: 'Can I update the menu myself?',
      answer:
        'Yes. Your QR menu comes with a simple dashboard where you can add, edit, or remove items and categories in seconds. No technical skills required. Or you can just send us a message and we will update it for you.',
    },
    {
      question: 'How do review requests work?',
      answer:
        'After a customer visits, our system sends a friendly WhatsApp or SMS message thanking them and inviting them to leave a Google review with a single tap. You choose when and how often the requests go out. It is fully automated once set up.',
    },
    {
      question: 'Do you offer monthly support?',
      answer:
        'Yes. Our Full Digital Partner plan includes ongoing monthly support — menu updates, SEO monitoring, review management, performance reports, and same-day responses to any questions. You can also add support hours to any plan.',
    },
    {
      question: 'What does it cost?',
      answer:
        'Our Starter plan is a one-time $499, Growth is $899, and the Full Digital Partner plan is $199/month. Every project is a little different, so we recommend starting with a free audit — we will give you a custom quote with no pressure.',
    },
  ],

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
};

export type SiteConfig = typeof siteConfig;
