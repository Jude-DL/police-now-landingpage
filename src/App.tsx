import { useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import heroVideo from './assets/hero-video-browser.mp4';
import systemDemo from './assets/system-demo-browser.mp4';
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Camera,
  ChevronRight,
  CircleGauge,
  Fingerprint,
  Gavel,
  GraduationCap,
  MapPinned,
  MessageSquareMore,
  Menu,
  RadioTower,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Mail,
  Phone,
  Sparkles,
  SquareStack,
  X,
  Wind,
} from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  icon: typeof ShieldAlert;
  accent: string;
};

type Step = {
  title: string;
  description: string;
  badge: string;
};

const metrics = [
  { label: 'Real-time GPS tracking for residents and police officers', value: 'Live GPS' },
  { label: 'Admin dashboard for monitoring and incident management', value: 'Control Center' },
  { label: 'Multimedia incident reporting with geotagging and encryption', value: 'Secure Media' },
  { label: 'Two-way communication through messages, calls, and updates', value: 'Live Comms' },
  { label: 'Analytics and performance reporting with hotspot visualization', value: 'Analytics' },
  { label: 'Intelligent dispatch and routing via Google Maps', value: 'Smart Routing' },
  { label: 'Offline support with SMS fallback for connectivity issues', value: 'Offline Ready' },
];

const features: Feature[] = [
  {
    title: 'Real-time GPS tracking for residents and police officers',
    description:
      'Always-on location updates for residents and officers so dispatchers can see live positions and movement.',
    icon: MapPinned,
    accent: 'from-emerald-400/30 to-teal-500/10',
  },
  {
    title: 'Admin dashboard for monitoring and incident management',
    description:
      'A centralized control center for incident triage, officer assignment, and case management.',
    icon: SquareStack,
    accent: 'from-cyan-400/30 to-blue-500/10',
  },
  {
    title: 'Multimedia incident reporting with geotagging and encryption',
    description:
      'Residents and officers can submit photos, video, and audio tied to precise locations with secure storage.',
    icon: Camera,
    accent: 'from-fuchsia-400/30 to-pink-500/10',
  },
  {
    title: 'Two-way communication through messages, calls, and updates',
    description:
      'In-app messaging and call handoffs keep residents and officers in sync during a response.',
    icon: MessageSquareMore,
    accent: 'from-amber-400/30 to-orange-500/10',
  },
  {
    title: 'Analytics and performance reporting with hotspot visualization',
    description:
      'Operational metrics, trend analysis, and map-based hotspot views help prioritize resources and measure outcomes.',
    icon: CircleGauge,
    accent: 'from-lime-400/30 to-green-500/10',
  },
  {
    title: 'Offline support with SMS fallback for connectivity issues',
    description:
      'Critical alerts and fallbacks ensure incidents get communicated even when mobile data is unavailable.',
    icon: Smartphone,
    accent: 'from-sky-400/30 to-blue-500/10',
  },
];

const steps: Step[] = [
  {
    badge: '01',
    title: 'Report',
    description: 'A resident submits an emergency with location and supporting media.',
  },
  {
    badge: '02',
    title: 'Assign',
    description: 'The system finds nearby officers and pushes real-time alerts to the field.',
  },
  {
    badge: '03',
    title: 'Respond',
    description: 'Officers move, chat, and coordinate while the dashboard keeps everything visible.',
  },
  {
    badge: '04',
    title: 'Resolve',
    description: 'The case closes with evidence, metrics, and feedback to improve future response.',
  },
];

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Security', href: '#security' },
];

function App() {
  const pageRef = useRef<HTMLElement | null>(null);

  useSectionReveal(pageRef);

  return (
    <div className="page-shell">
      <BackgroundGlow />
      <Navbar />
      <main id="top" ref={pageRef} className="page-grid">
        <HeroSection />
        <TrustStrip />
        <FeatureSection />
        <WorkflowSection />
        <SecuritySection />
        <ContactSection />
      </main>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero hero-github hero-banner reveal-section">
      <div className="hero-band">
        <div className="hero-band-media" aria-hidden="true">
          <video className="hero-band-video" src={heroVideo} autoPlay muted loop playsInline preload="metadata" />
          <div className="hero-band-overlay" />
        </div>

        <div className="hero-band-content">
          <div className="hero-copy hero-copy-left">
            <div className="eyebrow eyebrow-soft">
              <Sparkles size={14} />
              Real-time emergency response platform
            </div>

            <h1>
              POLICE NOW 
            </h1>

            <p className="lede hero-lede">
              A Mobile-based Real-time Emergency Response and Police Assistance.
            </p>

            <div className="hero-actions hero-actions-left">
              <a className="primary-button" href="#features">
                Explore features
                <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#workflow">
                View workflow
              </a>
            </div>
          </div>

          <div className="hero-brand-visual" aria-label="Police Now logo">
            <div className="hero-brand-ring" />
            <img src="/police-now-logo.png" alt="Police Now logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="nav-shell">
      <div className="nav-bar section-card">
        <div className="nav-top">
          <a className="brand" href="#top" aria-label="Police Now home">
            <div className="brand-mark">
              <img src="/police-now-logo.png" alt="Police Now logo" />
            </div>
            <div>
              <strong>Police Now</strong>
            </div>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`nav-panel ${isMenuOpen ? 'is-open' : ''}`} id="primary-navigation">
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-cta" href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function TrustStrip() {
  const chips = [
    { icon: Smartphone, label: 'Resident app' },
    { icon: GraduationCap, label: 'Officer app' },
    { icon: SquareStack, label: 'Admin dashboard' },
    { icon: ShieldAlert, label: 'Sanctum auth' },
    { icon: BadgeCheck, label: 'OTP verification' },
    { icon: Wind, label: 'Firebase Firestore' },
  ];

  return (
    <section className="trust-strip reveal-section" aria-label="Platform summary">
      {chips.map((chip) => {
        const Icon = chip.icon;
        return (
          <div className="trust-chip" key={chip.label}>
            <Icon size={16} />
            <span>{chip.label}</span>
          </div>
        );
      })}
      <br></br>
      <div className="hero-demo-card" aria-label="Police Now system demo">
        <div className="hero-demo-card-header">
          <span>System demo</span>
          <strong>Live platform walkthrough</strong>
        </div>
        <div className="hero-demo-frame">
          <video src={systemDemo} autoPlay muted loop playsInline preload="metadata" />
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="content-section reveal-section" id="features">
      <SectionHeader
        kicker="Platform features"
        title="Everything you need to coordinate emergency response"
        description=""
      />

      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article className={`feature-card ${feature.accent}`} key={feature.title}>
              <div className="feature-icon">
                <Icon size={22} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-footer">
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="content-section reveal-section" id="workflow">
      <br></br>
      <SectionHeader
        kicker="How it works"
        title="The emergency journey stays simple and readable"
        description=""
      />

      <div className="workflow-grid">
        {steps.map((step) => (
          <article className="workflow-card" key={step.title}>
            <span className="workflow-badge">{step.badge}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>

      <div className="insight-band">
        <div>
          <p className="insight-label">What this communicates</p>
          <h3>Police Now is not just a reporting app. It is a live operational layer for response teams.</h3>
        </div>
        <div className="insight-list">
          <div>
            <MessageSquareMore size={16} />
            Secure chat and call handoff
          </div>
          <div>
            <MapPinned size={16} />
            Real-time officer and incident mapping
          </div>
          <div>
            <Gavel size={16} />
            Admin oversight and incident management
          </div>
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section id="security" className="content-section reveal-section">
      <br></br>
      <SectionHeader
        kicker="Security and control"
        title="Built-in guardrails for every handoff"
        description=""
      />

      <div className="security-grid">
        <article className="security-card">
          <ShieldCheck size={22} />
          <h3>Assignment validation</h3>
          <p>Chats, calls, and response actions stay locked to the correct resident-officer pair.</p>
        </article>
        <article className="security-card">
          <BadgeCheck size={22} />
          <h3>Identity verification</h3>
          <p>OTP flows and Sanctum authentication keep access restricted to verified users.</p>
        </article>
        <article className="security-card">
          <CircleGauge size={22} />
          <h3>Operational visibility</h3>
          <p>Live metrics track response time, officer activity, and emergency status in one place.</p>
        </article>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="content-section reveal-section" id="contact">
      <br></br>
      <SectionHeader
        kicker="Contact us"
        title="Get in touch with the Police Now team"
        description="Questions, partnerships, or trial requests — drop us a message and we’ll respond promptly."
      />

      <div className="contact-grid">
        <div className="contact-left">
          <div className="contact-card section-card">
            <p>
              <Mail size={18} />
              <strong style={{ marginLeft: 8 }}>Email:</strong>
              <a style={{ marginLeft: 8 }} href="mailto:policenowresident@gmail.com">policenowresident@gmail.com</a>
            </p>
          </div>

          <div className="contact-card section-card">
            <p>
              <Phone size={18} />
              <strong style={{ marginLeft: 8 }}>Phone:</strong>
              <a style={{ marginLeft: 8 }} href="tel:+639271746890">+63 927 174 6890</a>
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="How can we help?" />
          </label>
          <div>
            <button className="primary-button" type="submit">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function SectionHeader({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <div className="section-header">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="background-glow" aria-hidden="true">
      <div className="glow glow-a" />
      <div className="glow glow-b" />
      <div className="glow glow-c" />
    </div>
  );
}

function useSectionReveal(rootRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>('.reveal-section'));

    sections.forEach((section) => {
      section.classList.remove('is-visible');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [rootRef]);
}

export default App;
