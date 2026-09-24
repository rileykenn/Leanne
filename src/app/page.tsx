"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Scales,
  Stamp,
  FileText,
  Check,
  Quotes,
  Phone,
  EnvelopeSimple,
  MapPin,
  Certificate,
  Star,
  List,
  X,
  IconContext,
} from "@phosphor-icons/react";

/* One icon weight across the whole page, matching the thin line icons on the flyer. */
const ICON = "regular" as const;

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Me", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/* ─── Wave divider ───
   The curved edge both pamphlets use between cream and navy. The SVG's own
   background is the section above; the path is filled with the section below. */
function Wave({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 96"
      preserveAspectRatio="none"
      className={`block w-full h-12 sm:h-16 lg:h-24 ${className}`}
    >
      <path
        d="M0 70 C 300 100, 620 10, 980 44 C 1200 64, 1340 60, 1440 30 L 1440 96 L 0 96 Z"
        fill="currentColor"
      />
      <path
        d="M0 70 C 300 100, 620 10, 980 44 C 1200 64, 1340 60, 1440 30"
        fill="none"
        stroke="var(--color-rose-400)"
        strokeWidth="8"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-40 border-b border-cream-300/70 bg-cream-100/90 backdrop-blur-md"
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <span aria-hidden="true" className="z-mark h-9 w-9 bg-gold-500" />
          <span className="whitespace-nowrap font-serif text-2xl font-semibold tracking-wide text-navy-900">
            Zampa Services
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-sm font-medium text-ink-600 transition-colors hover:text-rose-600"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:0413717358" className="btn btn-primary !px-5 !py-2.5 text-sm">
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="p-2 text-navy-900 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-cream-300 bg-cream-100 px-6 pb-6 pt-2 lg:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-cream-300/70 py-3 font-medium text-navy-900"
            >
              {l.label}
            </a>
          ))}
          <a href="tel:0413717358" className="btn btn-primary mt-5 w-full">
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ───
   Cream left, navy curved panel right with the portrait, gold credential badge
   overlapping the curve: the business card, as a web page. */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="relative mx-auto grid min-h-[calc(100dvh-4.5rem)] max-w-7xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-7">
          <h1 className="enter font-serif text-[2.375rem] font-semibold leading-[1.05] tracking-tight text-navy-900 sm:text-6xl xl:text-7xl">
            Divorce made simple.
            <br />
            No lawyer needed.
          </h1>
          <p className="enter enter-2 mt-4 font-script text-4xl leading-none text-rose-500 sm:text-5xl">
            We&rsquo;re here to help.
          </p>
          <p className="enter enter-3 mt-7 max-w-xl text-lg leading-relaxed text-ink-600">
            Affordable, confidential divorce assistance, process serving and
            Justice of the Peace witnessing across the Illawarra and South
            Coast, from $59.
          </p>
          <div className="enter enter-4 mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn btn-primary">
              Get a Free Quote
            </a>
            <a href="tel:0413717358" className="btn btn-secondary">
              Call Now
            </a>
          </div>
        </div>

        <div className="enter enter-2 lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="rounded-[2.5rem] rounded-tl-[6rem] bg-navy-900 p-3 shadow-[0_36px_70px_-34px_rgb(10_26_54_/_0.7)]">
              <div className="overflow-hidden rounded-[2rem] rounded-tl-[5.5rem] ring-1 ring-rose-300/70">
                <Image
                  src="/images/Portaitnew.jpeg"
                  alt="Leanne Zampa"
                  width={1086}
                  height={1448}
                  priority
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>

            <div className="badge-gold absolute -left-5 bottom-10 flex h-32 w-32 flex-col items-center justify-center rounded-full text-center text-navy-950 sm:-left-10 sm:h-36 sm:w-36">
              <span className="font-serif text-4xl font-bold leading-none sm:text-[2.75rem]">
                30+
              </span>
              <span className="mt-1.5 text-xs font-semibold uppercase leading-tight tracking-[0.12em]">
                years&rsquo; legal
                <br />
                experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services ───
   The flyer's list: blush circle, line icon, bold title, thin rose hairline. */
const SERVICES = [
  {
    icon: FileText,
    title: "Divorce Application Services",
    body: "With more than 30 years in legal services, I provide an easy, cost-effective pathway to complete your divorce without a lawyer. Sole or joint application, whichever suits you. I handle every step myself, accurately and with personal attention from start to finish.",
  },
  {
    icon: Scales,
    title: "Licensed Process Server",
    body: "As a Licensed Process Server, I personally serve your Application for Divorce and any other legal documents correctly, promptly and in full compliance with legal requirements. Because I manage the service myself, nothing is handed off to a third party.",
  },
  {
    icon: Stamp,
    title: "Justice of the Peace",
    body: "As a Justice of the Peace, I can certify or witness any required documents at no additional charge. You don’t need to find a separate JP. Everything is handled in one place, saving you time and effort.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16">
        <div className="self-start lg:sticky lg:top-28 lg:col-span-4">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            What I can help with
          </h2>
          <div className="duo-line mt-5" />
          <p className="mt-6 leading-relaxed text-ink-600">
            Everything handled by one person, in one place, without a
            solicitor&rsquo;s fees.
          </p>
        </div>

        <ol className="divide-y divide-rose-200 lg:col-span-8">
          {SERVICES.map((s) => (
            <li
              key={s.title}
              className="reveal grid gap-6 py-10 first:pt-0 last:pb-0 sm:grid-cols-[auto_1fr]"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-200 text-navy-900">
                <s.icon size={30} />
              </span>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-navy-900 sm:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── Credentials + Why ───
   One navy band: gold-ringed credentials like the card, then three short
   reassurances. Enters under a wave, like the pamphlets. */
const CREDENTIALS = [
  { icon: Certificate, value: "30+", label: "Years’ legal industry experience" },
  { icon: Scales, value: "CAL000011829", label: "Commercial Agent Licence" },
  { icon: Stamp, value: "No. 154195", label: "Justice of the Peace" },
];

const WHY = [
  {
    title: "Fast and efficient",
    body: "No unnecessary delays, no back and forth. Clear action from start to finish.",
  },
  {
    title: "Cost effective",
    body: "Professional help from $59, a fraction of a solicitor’s fee. Transparent pricing with no hidden costs.",
  },
  {
    title: "Here when it suits you",
    body: "Legal matters don’t keep business hours, so appointments don’t have to either. Call or text and I’ll get back to you personally.",
  },
];

function Credentials() {
  return (
    <>
      <Wave className="bg-cream-50 text-navy-900" />
      <section id="why" className="bg-navy-900 pb-24 pt-6 text-cream-50 lg:pb-32 lg:pt-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Over thirty years in legal services. One person, start to finish.
            </h2>
            <div className="duo-line-dark mt-5" />
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c) => (
              <div key={c.label} className="reveal flex items-center gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-gold-400 ring-2 ring-gold-400">
                  <c.icon size={28} />
                </span>
                <div>
                  <p className="font-serif text-3xl font-semibold leading-none text-gold-300">
                    {c.value}
                  </p>
                  <p className="mt-1.5 text-sm text-cream-100/70">{c.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-cream-50/10 pt-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-cream-50/10">
            {WHY.map((w, i) => (
              <div
                key={w.title}
                className={`reveal ${i > 0 ? "sm:pl-10" : ""} ${i < 2 ? "sm:pr-10" : ""}`}
              >
                <h3 className="font-serif text-2xl font-semibold text-cream-50">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/70">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Pricing ───
   Card copy is exactly as Leanne signed it off. Only the styling changes. */
const PACKAGES = [
  {
    name: "Tailored Support",
    desc: "Support tailored to your individual needs",
    price: 59,
    subject: "Tailored%20Support%20Enquiry",
    items: [
      "Help with just the steps you need",
      "Guidance on forms and paperwork",
      "Justice of the Peace witnessing",
      "Questions answered in plain English",
      "Pay only for the help you use",
    ],
  },
  {
    name: "Divorce & Service Package",
    desc: "Complete divorce application with personal service of documents",
    price: 400,
    featured: true,
    subject: "Divorce%20%26%20Service%20Package%20Enquiry",
    items: [
      "Divorce application preparation",
      "All documents witnessed and certified",
      "Personal service by Licensed Process Server",
      "Full compliance with legal requirements",
      "Personal attention from start to finish",
    ],
  },
  {
    name: "Divorce & Filing Package",
    desc: "Complete divorce application and assistance with filing with the court",
    price: 320,
    subject: "Divorce%20%26%20Filing%20Package%20Enquiry",
    items: [
      "Divorce application preparation",
      "All documents witnessed and certified",
      "Assistance with filing your divorce application and relevant documents with the court",
      "Full compliance with legal requirements",
      "Personal attention from start to finish",
    ],
  },
  {
    name: "Personal Service Only",
    desc: "Document service without divorce application assistance",
    price: 100,
    subject: "Personal%20Service%20Enquiry",
    items: [
      "Personal document delivery",
      "Licensed Process Server",
      "Full legal compliance",
      "Prompt and professional service",
      "Affidavit of service provided",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            Transparent, affordable pricing
          </h2>
          <p className="mt-3 font-script text-3xl text-rose-500 sm:text-4xl">
            Simple. Professional. Stress‑free.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PACKAGES.map((p) => {
            const featured = !!p.featured;
            return (
              <div
                key={p.name}
                className={`reveal relative flex flex-col rounded-3xl p-8 ${
                  featured
                    ? "bg-navy-900 text-cream-50 ring-2 ring-gold-400 shadow-[0_30px_60px_-30px_rgb(10_26_54_/_0.7)]"
                    : "border border-rose-200 bg-cream-50 text-navy-900"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-navy-950">
                    Most Popular
                  </span>
                )}

                <h3 className="font-serif text-2xl font-semibold leading-tight xl:min-h-[2.5em]">{p.name}</h3>
                <p className={`mt-2 text-sm leading-relaxed xl:min-h-[4.25rem] ${featured ? "text-cream-100/70" : "text-ink-600"}`}>
                  {p.desc}
                </p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span className={`text-sm ${featured ? "text-cream-100/60" : "text-ink-500"}`}>from</span>
                  <span className={`font-serif text-5xl font-bold leading-none ${featured ? "text-gold-300" : "text-navy-900"}`}>
                    ${p.price}
                  </span>
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-sm leading-relaxed ${featured ? "text-cream-100/80" : "text-ink-600"}`}
                    >
                      <Check
                        size={18}
                        weight="bold"
                        className={`mt-0.5 shrink-0 ${featured ? "text-gold-400" : "text-rose-500"}`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:Leanne@zampaservices.com.au?subject=${p.subject}`}
                  className={`btn mt-8 w-full ${featured ? "btn-gold" : "btn-primary"}`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───
   Client quotes, trimmed to a glance. Blush ground like the flyer. */
const TESTIMONIALS = [
  "Leanne’s fees were very reasonable, and her communication was excellent from start to finish. I would confidently recommend Zampa Services to anyone needing professional and reliable assistance.",
  "She served the documents promptly and guided me through the online process with care and confidence. I wouldn’t hesitate to recommend her.",
  "Leanne served the documents first time in a very professional, polite and non-threatening manner to the recipient.",
  "You alleviated so much pressure to get what I needed done. Your communication throughout the whole process was factual and timely. I truly felt you were on my side.",
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-rose-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            What my clients say
          </h2>
          <div className="duo-line mt-5" />
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {TESTIMONIALS.map((text) => (
            <figure key={text} className="reveal">
              <Quotes size={36} weight="fill" className="text-rose-400" />
              <blockquote className="mt-4 font-serif text-2xl leading-snug text-navy-900">
                {text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-1">
                <span className="sr-only">Rated five out of five stars</span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} weight="fill" className="text-rose-500" />
                ))}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
const CONTACT_ROWS = [
  { icon: Phone, label: "Call or text", value: "0413 717 358", href: "tel:0413717358" },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: "Leanne@zampaservices.com.au",
    href: "mailto:Leanne@zampaservices.com.au",
  },
  { icon: MapPin, label: "Illawarra & South Coast", value: "By appointment" },
];

function Contact() {
  return (
    <section id="contact" className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-900 sm:text-5xl">
            Get in touch
          </h2>
          <div className="duo-line mt-5" />
          <p className="mt-6 leading-relaxed text-ink-600">
            Every enquiry is answered personally. Tell me a little about your
            situation and I&rsquo;ll come back to you with a clear quote.
          </p>

          <ul className="mt-10 space-y-6">
            {CONTACT_ROWS.map((r) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-200 text-navy-900">
                    <r.icon size={22} />
                  </span>
                  <span>
                    <span className="block text-sm text-ink-500">{r.label}</span>
                    <span className="block font-semibold text-navy-900">{r.value}</span>
                  </span>
                </>
              );
              return (
                <li key={r.label}>
                  {r.href ? (
                    <a href={r.href} className="group flex items-center gap-4 transition-colors hover:text-rose-500">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-900 p-10 text-cream-50 sm:p-14">
            <span
              aria-hidden="true"
              className="z-mark pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 bg-rose-400/15"
            />
            <h3 className="relative font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Free, no-obligation quote
            </h3>
            <p className="relative mt-2 font-script text-3xl text-rose-300">Ready when you are.</p>
            <a
              href="tel:0413717358"
              className="relative mt-8 block font-serif text-4xl font-semibold tracking-wide text-gold-300 transition-colors hover:text-gold-200 sm:text-5xl"
            >
              0413 717 358
            </a>
            <p className="relative mt-4 max-w-md leading-relaxed text-cream-100/75">
              Call or text, or send a short note about what you need. Every
              enquiry is answered by me, personally.
            </p>
            <a
              href="mailto:Leanne@zampaservices.com.au?subject=Free%20Quote%20Request"
              className="btn btn-gold relative mt-8"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ───
   Rose Z on navy with a rose bottom strip: the flyer's footer. */
function Footer() {
  return (
    <>
      <Wave className="bg-cream-100 text-navy-950" />
      <footer className="bg-navy-950 text-cream-100/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-14 pt-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="z-mark h-10 w-10 bg-rose-400" />
              <span className="font-serif text-2xl font-semibold text-cream-50">Zampa Services</span>
            </div>
            <p className="mt-3 font-script text-3xl text-rose-300">Legal support made simple</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Divorce assistance, process serving and Justice of the Peace
              witnessing across the Illawarra and South Coast.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-cream-50">Quick links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-rose-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-cream-50">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="tel:0413717358" className="transition-colors hover:text-rose-300">
                  0413 717 358
                </a>
              </li>
              <li>
                <a href="mailto:Leanne@zampaservices.com.au" className="transition-colors hover:text-rose-300">
                  Leanne@zampaservices.com.au
                </a>
              </li>
              <li>Illawarra &amp; South Coast, NSW</li>
            </ul>
          </div>
        </div>

        <div className="bg-rose-400 text-navy-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-6 py-4 text-xs font-medium sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} Zampa Services. Commercial Agent Licence No.
              CAL000011829
            </p>
            <p>
              Website by{" "}
              <a
                href="https://rileytechstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-navy-950/40 underline-offset-2 hover:decoration-navy-950 focus-visible:outline-navy-950"
              >
                Riley Tech Studio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default function Home() {
  return (
    <IconContext.Provider value={{ weight: ICON, "aria-hidden": true }}>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Credentials />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </IconContext.Provider>
  );
}
