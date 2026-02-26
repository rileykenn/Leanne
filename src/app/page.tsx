"use client";

import { useState, useEffect } from "react";

/* ─── Navbar ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Why Me", href: "#why" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/z_logo.png"
            alt="Zampa Services Logo"
            className="w-10 h-10 rounded-lg object-contain group-hover:scale-105 transition-transform"
          />
          <span className="text-white font-semibold text-lg tracking-tight hidden sm:block">
            Zampa Services
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-gold-400 transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0413717358"
            className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all hover:scale-105"
          >
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-navy-700 px-6 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-slate-300 hover:text-gold-400 transition-colors font-medium border-b border-navy-700/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:0413717358"
            className="mt-4 block text-center bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-5 py-3 rounded-lg transition-all"
          >
            Call 0413 717 358
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(245,197,24,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-400 leading-tight mb-6">
            Divorce Made Simple — No Lawyer Needed
          </h1>
          <div className="gold-line mb-6" />
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
            Affordable divorce assistance, process serving, and Justice of the
            Peace witnessing — handled with care, clarity and discretion.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-8 py-3.5 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-gold-400/20"
            >
              Email Today
            </a>
            <a
              href="#contact"
              className="bg-pink-400/20 hover:bg-pink-400/30 text-pink-400 font-semibold px-8 py-3.5 rounded-lg border border-pink-400/30 transition-all hover:scale-105"
            >
              Free Quote
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            Services starting from{" "}
            <span className="text-gold-400 font-semibold text-lg">$100.00</span>
          </p>
        </div>

        {/* Hero image placeholder */}
        <div className="fade-up delay-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold-400/20 to-pink-400/10 blur-2xl rounded-2xl" />
            <div className="relative w-80 h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-navy-600/50 shadow-2xl">
              <img
                src="/images/portait.jpeg"
                alt="Leanne Zampa — Zampa Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ─── */
const services = [
  {
    num: "01",
    title: "Divorce Application Services",
    description:
      "With more than 30 years in legal services, I provide an easy and cost effective pathway to complete your divorce without needing a lawyer. You can proceed with either a Sole Application or a Joint Application, depending on what works best for you. I handle all aspects of the process myself — as a Licensed Process Server and a Justice of the Peace, I ensure everything is managed accurately, efficiently, and with personal attention from start to finish.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Licensed Process Server",
    description:
      "As a Licensed Process Server, I personally handle the service of your Application for Divorce and any other legal documents. This ensures your documents are delivered correctly, promptly, and in full compliance with legal requirements. By managing the service myself, you receive a reliable, streamlined process without delays or the need for external providers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Justice of the Peace",
    description:
      "As a Justice of the Peace, I can also certify or witness any required documents at no additional charge. This added convenience means you don't need to find a separate JP — everything is handled in one place, saving you time and effort.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            What I Do
          </h2>
          <div className="gold-line mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`fade-up delay-${i + 1} group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-gold-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/5 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-navy-900 rounded-xl flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors">
                  {s.icon}
                </div>
                <span className="text-5xl font-bold text-slate-100 group-hover:text-gold-400/20 transition-colors">
                  #{s.num}
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                {s.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Me ─── */
const reasons = [
  {
    title: "Fast & Efficient",
    description:
      "I streamline the entire process so you can move forward quickly. No unnecessary delays, no back and forth — just clear, efficient action from start to finish.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Cost Effective",
    description:
      "With services starting from just $100, you get professional assistance at a fraction of the cost of a solicitor. Transparent pricing with no hidden fees.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Availability",
    description:
      "I understand that legal matters don't always fit into business hours. I'm available around the clock to answer your questions and provide the support you need.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function WhyChooseMe() {
  return (
    <section id="why" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">
            The Zampa Difference
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Why Choose Me
          </h2>
          <div className="gold-line mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`fade-up delay-${i + 1} text-center p-8 rounded-2xl border border-navy-600/50 bg-navy-800/50 backdrop-blur-sm hover:border-gold-400/30 transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gold-400/10 rounded-2xl flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-all">
                {r.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            Transparent & Affordable
          </h2>
          <div className="gold-line mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Package 1 */}
          <div className="relative group rounded-2xl border-2 border-gold-400 bg-gradient-to-br from-navy-900 to-navy-800 p-10 text-center hover:shadow-2xl hover:shadow-gold-400/10 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-400 text-navy-900 font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2 mt-2">
              Divorce & Service Package
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Complete divorce application with personal service of documents
            </p>
            <div className="mb-6">
              <span className="text-slate-400 text-sm">from</span>
              <span className="text-5xl font-bold text-gold-400 ml-2">
                $400
              </span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Divorce application preparation",
                "All documents witnessed and certified",
                "Personal service by Licensed Process Server",
                "Full compliance with legal requirements",
                "Personal attention from start to finish",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:Leanne@zampaservices.com.au?subject=Divorce%20%26%20Service%20Package%20Enquiry"
              className="block w-full bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold py-3.5 rounded-lg transition-all hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Package 2 */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-10 text-center hover:shadow-2xl hover:border-gold-400/30 transition-all duration-300">
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Personal Service Only
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Document service without divorce application assistance
            </p>
            <div className="mb-6">
              <span className="text-slate-400 text-sm">from</span>
              <span className="text-5xl font-bold text-navy-900 ml-2">
                $100
              </span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Personal document delivery",
                "Licensed Process Server",
                "Full legal compliance",
                "Prompt and professional service",
                "Affidavit of service provided",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm">
                  <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:Leanne@zampaservices.com.au?subject=Personal%20Service%20Enquiry"
              className="block w-full bg-navy-900 hover:bg-navy-800 text-white font-semibold py-3.5 rounded-lg transition-all hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
const testimonials = [
  {
    text: "Leanne's fees were very reasonable, and her communication was excellent from start to finish. She was polite, knowledgeable, and incredibly helpful throughout the entire process. I would confidently recommend Zampa Services to anyone needing professional and reliable assistance.",
    stars: 5,
  },
  {
    text: "Leanne from Zampa Services was professional, polite, and incredibly helpful. She served the documents promptly and guided me through the online process with care and confidence. Her fees were reasonable, communication was excellent, and I wouldn't hesitate to recommend her.",
    stars: 5,
  },
  {
    text: "Leanne served the documents first time in a very professional, polite and non-threatening manner to the recipient.",
    stars: 5,
  },
  {
    text: "I can't thank you enough, and would recommend you accordingly. You alleviated so much pressure to get what I needed done. Your communication throughout the whole process was factual and timely! I truly felt you were on my side. Thank you again.",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
            What My Clients Say
          </h2>
          <div className="gold-line mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`fade-up delay-${(i % 4) + 1} bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-gold-400/20`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-gold-400/15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.998 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>
                <p className="text-slate-600 leading-relaxed italic pl-4">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Credentials ─── */
function Credentials() {
  const creds = [
    { label: "Years Legal Experience", value: "30+", icon: "🏛️" },
    { label: "Justice of the Peace No.", value: "154195", icon: "⚖️" },
    { label: "Commercial Agent Licence", value: "CAL000011829", icon: "📋" },
    { label: "Location", value: "Illawarra, NSW", icon: "📍" },
  ];

  return (
    <section className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold-400 font-semibold text-sm tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Licensed & Experienced
          </h2>
          <div className="gold-line mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {creds.map((c) => (
            <div
              key={c.label}
              className="text-center p-6 rounded-2xl border border-navy-600/50 bg-navy-800/50 backdrop-blur-sm"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <p className="text-gold-400 font-bold text-xl mb-1">{c.value}</p>
              <p className="text-slate-400 text-sm">{c.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info side */}
            <div>
              <p className="text-gold-500 font-semibold text-sm tracking-widest uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                Ready to Get Started?
              </h2>
              <div className="gold-line mb-6" />
              <p className="text-slate-500 leading-relaxed mb-8">
                Contact me today for a free, no obligation quote. I'm here to
                make the process as simple and stress free as possible.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:0413717358"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold group-hover:text-gold-500 transition-colors">
                      0413 717 358
                    </p>
                    <p className="text-slate-400 text-sm">Call or text anytime</p>
                  </div>
                </a>

                <a
                  href="mailto:Leanne@zampaservices.com.au"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold group-hover:text-gold-500 transition-colors">
                      Leanne@zampaservices.com.au
                    </p>
                    <p className="text-slate-400 text-sm">Email me directly</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center text-gold-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold">Illawarra, NSW</p>
                    <p className="text-slate-400 text-sm">
                      Servicing the Illawarra region
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA side */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gold-400/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Free Consultation
              </h3>
              <p className="text-slate-400 mb-8 max-w-sm">
                Not sure where to start? Reach out for a free, no obligation
                chat about your situation. I'm here to help.
              </p>
              <a
                href="mailto:Leanne@zampaservices.com.au?subject=Free%20Quote%20Request"
                className="bg-gold-400 hover:bg-gold-500 text-navy-900 font-semibold px-8 py-3.5 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-gold-400/20 mb-3 inline-block"
              >
                Request a Free Quote
              </a>
              <a
                href="tel:0413717358"
                className="text-gold-400 hover:text-gold-500 font-medium text-sm transition-colors"
              >
                or call 0413 717 358
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-700">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/z_logo.png"
                alt="Zampa Services Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <span className="text-white font-semibold text-lg">
                Zampa Services
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Illawarra based with over 30 years legal experience. Making
              divorce simple, affordable, and stress free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "Pricing", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-slate-400 hover:text-gold-400 text-sm transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>0413 717 358</p>
              <p>Leanne@zampaservices.com.au</p>
              <p>Illawarra, NSW</p>
              <p className="text-xs mt-4 pt-4 border-t border-navy-700">
                Justice of the Peace No. 154195
                <br />
                Commercial Agent Licence No. CAL000011829
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Zampa Services. All rights reserved.</p>
          <p>
            Website designed and developed by{" "}
            <a
              href="https://rileytechstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-500 transition-colors"
            >
              Riley Tech Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseMe />
      <Pricing />
      <Testimonials />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
