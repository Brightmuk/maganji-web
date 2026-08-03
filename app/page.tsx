"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MaganjiFooter from "./footer";

// ─── Scroll-reveal hook ────────────────────────────────────────────────────────

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// ─── Icons (line-style, monotone — no emoji anywhere on this page) ────────────

function IconMessage({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 5.5h16v11H8.5L4 20.5v-4H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 10h8M8 13.2h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconLock({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15.3" r="1.3" fill="currentColor" />
    </svg>
  );
}

function IconSplit({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 5h4l6 14h4M15 5h4M5 19h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M11.5 4.5H6a1.5 1.5 0 0 0-1.5 1.5v5.5a2 2 0 0 0 .59 1.41l8 8a2 2 0 0 0 2.82 0l5.5-5.5a2 2 0 0 0 0-2.82l-8-8a2 2 0 0 0-1.41-.59Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="9" r="1.3" fill="currentColor" />
    </svg>
  );
}

function IconExport({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3.5v11m0-11 3.6 3.6M12 3.5 8.4 7.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 15.5v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function IconPlus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconApple({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.5 1.5c.1 1.1-.3 2.2-1 3-.7.8-1.9 1.5-3 1.4-.1-1.1.4-2.2 1-3 .8-.8 2-1.4 3-1.4ZM20.7 17.2c-.5 1.1-.8 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9-1.9 0-2.4.9-3.7.9-1.6 0-2.8-1.5-3.7-2.9-2.5-3.9-2.8-8.4-1.2-10.8 1.1-1.7 2.9-2.7 4.6-2.7 1.7 0 2.8 1 4.2 1 1.4 0 2.2-1 4.2-1 1.5 0 3.1.8 4.2 2.2-3.7 2-3.1 7.3.3 8.5Z" />
    </svg>
  );
}

function IconPlay({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 22" fill="none" className={className}>
      <path
        d="M1.5 1L11.5 11L1.5 21M1.5 1L18.5 8.5L11.5 11M1.5 21L18.5 13.5L11.5 11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Feature data ──────────────────────────────────────────────────────────────

const FEATURES = [
  {
    Icon: IconMessage,
    title: "Zero-Touch Tracking",
    body: "The automatic M-Pesa and Airtel Money expense tracker — every SMS is parsed the moment it arrives. Your transactions log themselves while you live your life.",
    highlight: true,
  },
  {
    Icon: IconLock,
    title: "Fully Offline",
    body: "Your financial data never leaves your device. No cloud sync, no account required, no servers involved — ever.",
  },
  {
    Icon: IconSplit,
    title: "Committed vs. Variable",
    body: "Rent, NHIF, loan repayments — separated cleanly from food, transport, and everything you actually choose to spend on.",
  },
  {
    Icon: IconTag,
    title: "Smart Categories",
    body: "Teach Maganji once — it applies the rule forever. Tag a Pochi payment to Susan as Groceries and every future payment follows.",
  },
  {
    Icon: IconExport,
    title: "Your Data, Always",
    body: "Export to CSV, back up to Google Drive, restore anytime. Maganji keeps your history even when you switch phones.",
  },
  {
    Icon: IconPin,
    title: "Built for Kenya",
    body: "Track your pesa the way you actually spend it — M-Pesa, Airtel Money, Equity, KCB, NCBA, Co-op and ABSA. Every major Kenyan payment channel, supported from day one.",
  },
];

// ─── FAQ data ───────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What is \u201cbreathing room\u201d?",
    a: "It's the money you can actually spend right now, without guilt. Not your M-Pesa balance — that includes rent you haven't paid yet and bills still coming. Breathing room is your income baseline, minus what's committed, minus what you've already spent variably this month. It updates every day as the month goes on.",
  },
  {
    q: "What counts as a committed expense?",
    a: "Anything you pay the same way, most months — rent, NHIF, DSTV, school fees, loan repayments. Maganji spots these automatically once it's seen four or more months of consistent payments to the same recipient, and you can mark any transaction as committed yourself. Paid ones get crossed off; unpaid ones stay visible as \u201cExpected\u201d so nothing slips through. If you pay something in installments — electricity in weekly top-ups, for example — Maganji tracks your progress toward the full monthly amount.",
  },
  {
    q: "What counts as a variable expense?",
    a: "Everything you choose, day to day — food, matatu fare, going out, subscriptions. Maganji doesn't ask you to set a budget for these. It looks at six months of your real spending, grouped by category, and shows you what your habits already are. Spending within your usual amount doesn't touch your breathing room — only spending past it does. A category with no history yet is simply marked \u201cnew this month, no baseline.\u201d",
  },
  {
    q: "Can I change how Maganji calculates things?",
    a: "Yes. Every number on the app has a \u201cHow?\u201d you can tap to see exactly what went into it, and Logic Settings let you adjust the underlying rules — like how breathing room handles a bad month — to match how you actually think about your money.",
  },
  {
    q: "Does it work with Airtel Money, or just M-Pesa?",
    a: "Both. Maganji reads M-Pesa and Airtel Money messages the same way, plus statements from Equity, KCB, NCBA, Co-op, and ABSA.",
  },
  {
    q: "Is there a budgeting app built specifically for Kenya?",
    a: "That's exactly what Maganji is. Most personal finance apps are built for Western banking and translated for Kenya afterward. Maganji is built the other way round — around paybill, till number, send money, and how Kenyans actually get paid.",
  },
  {
    q: "Can Maganji track chama or savings group contributions?",
    a: "Yes. A chama contribution sent by M-Pesa is read like any other transaction, so you can mark it as committed or give it its own category to track it separately from the rest of your matumizi.",
  },
  {
    q: "Does Maganji help with Januworry?",
    a: "Yes — a seasonal Beat Januworry challenge is on the roadmap to help you plan around the December-to-January squeeze before it hits, using your own spending history rather than guesswork.",
  },
  {
    q: "Is my financial data private?",
    a: "Maganji runs fully offline. There's no account, no login, and no server — your transaction data is parsed and stored only on your phone, and nothing is ever uploaded.",
  },
  {
    q: "Do I need to set a monthly budget?",
    a: "No. Maganji computes your typical variable spend from your own transaction history instead of asking you to guess a number up front and stick to it.",
  },
  {
    q: "What if something gets miscategorized?",
    a: "Recategorize it once and Maganji remembers — the same rule is applied automatically to every future transaction that matches.",
  },
  {
    q: "Is Maganji free?",
    a: "Maganji is free to download and use. A premium upgrade unlocking further tools is on the way — pricing details will be announced closer to launch.",
  },
  {
    q: "Is it available on iPhone and Android?",
    a: "Yes — Maganji is on the App Store and Google Play.",
  },
];

// ─── Components ────────────────────────────────────────────────────────────────

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-section ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function PlayStoreBadge({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <Link
      href="https://play.google.com/store/apps/details?id=com.brimukon.spenditize"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl font-semibold bg-black text-white border border-black transition-all duration-300 hover:opacity-85 active:scale-95 dark:bg-white dark:text-black dark:border-white ${sizes[size]}`}
    >
      <IconPlay className="w-5 h-5" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium opacity-70 uppercase tracking-wide">Get it on</span>
        <span className="block -mt-0.5">Google Play</span>
      </span>
    </Link>
  );
}

function AppStoreBadge({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-7 py-3.5 text-base",
  };

  return (
    <Link
      // TODO: swap in the live App Store URL once the listing is public
      href="https://apps.apple.com/app/maganji/id0000000000"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-xl font-semibold bg-black text-white border border-black transition-all duration-300 hover:opacity-85 active:scale-95 dark:bg-white dark:text-black dark:border-white ${sizes[size]}`}
    >
      <IconApple className="w-5 h-5" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] font-medium opacity-70 uppercase tracking-wide">Download on the</span>
        <span className="block -mt-0.5">App Store</span>
      </span>
    </Link>
  );
}

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border-b border-black/10 dark:border-white/10"
      style={isOpen ? { borderLeft: "2px solid #00A645" } : undefined}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 pl-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-black dark:text-white text-base md:text-lg">
          {q}
        </span>
        <IconPlus
          className={`w-5 h-5 flex-shrink-0 text-black/40 dark:text-white/40 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pl-5 pb-6 pr-8 text-foreground/60 leading-relaxed text-sm md:text-base">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MaganjiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ── Global styles for scroll reveal ── */}
      <style>{`
        .maganji-root {
          font-family: var(--font-jakarta), sans-serif;
        }
        .maganji-display {
          font-family: var(--font-syne), sans-serif;
        }
        .reveal-section {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-section.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .brand-underline {
          text-decoration: underline;
          text-decoration-color: #00A645;
          text-decoration-thickness: 3px;
          text-underline-offset: 6px;
        }
        .feature-card:hover {
          transform: translateY(-4px);
        }
        .hero-glow {
          background: radial-gradient(ellipse 55% 45% at 50% 40%, rgba(0,166,69,0.08) 0%, transparent 70%);
        }
        .phone-frame {
          filter: drop-shadow(0 30px 40px rgba(0,0,0,0.22));
        }
      `}</style>

      <div className="maganji-root">

        {/* ═══════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden pt-32 pb-0 lg:pt-44">

          {/* Background glow — restrained, monotone-first */}
          <div className="hero-glow absolute inset-0 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* Top badge */}
            <RevealSection className="flex justify-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border border-black/10 dark:border-white/15 text-black/70 dark:text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A645]" />
                Now on the App Store and Google Play
              </span>
            </RevealSection>

            {/* Headline */}
            <RevealSection delay={80} className="text-center mb-8">
              <h1 className="maganji-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-black dark:text-white mb-6">
                Know your
                <br />
                <span className="brand-underline">breathing room.</span>
              </h1>
              <p className="text-sm md:text-base italic text-foreground/40 mb-5">
                Fahamu nafasi yako ya kupumua.
              </p>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/60 leading-relaxed">
                Maganji is a personal finance app and M-Pesa expense tracker
                built for Kenya. It reads your M-Pesa and Airtel Money
                messages and tells you the one number that matters: what's
                actually left to spend — not your balance, not your salary.
                All without an internet connection.
              </p>
            </RevealSection>

            {/* CTA */}
            <RevealSection delay={160} className="flex flex-wrap justify-center gap-4 mb-20">
              <AppStoreBadge size="lg" />
              <PlayStoreBadge size="lg" />
            </RevealSection>

            {/* Hero image — phone mockup */}
            <RevealSection delay={240} className="relative flex justify-center">
              <div className="phone-frame relative w-[280px] md:w-[340px] lg:w-[380px]">
                {/* Replace src with your actual screenshot */}
                <Image
                  src="/images/maganji/hero_dark.webp"
                  alt="Maganji budgeting app Kenya — breathing room snapshot screen for M-Pesa spending"
                  width={380}
                  height={760}
                  className="w-full rounded-t-[40px]"
                  priority
                />
              </div>
            </RevealSection>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SOCIAL PROOF STRIP
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-12 border-y border-black/5 dark:border-white/5 mt-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealSection>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                {[
                  { value: "M-Pesa", label: "supported" },
                  { value: "Airtel Money", label: "supported" },
                  { value: "iPhone & Android", label: "available on" },
                  { value: "100% offline", label: "always" },
                ].map((stat) => (
                  <div key={stat.value} className="text-center">
                    <div className="maganji-display text-2xl font-bold text-black dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CORE CONCEPTS — breathing room / committed / variable
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <RevealSection className="max-w-2xl mb-16">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-6 uppercase text-black/60 dark:text-white/60 border border-black/10 dark:border-white/15">
                How Maganji thinks
              </div>
              <h2 className="maganji-display text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-5">
                Three ideas. One honest number.
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                Your M-Pesa balance includes rent you haven&apos;t paid yet. Maganji
                works out what&apos;s actually yours, from the transactions you
                already have.
              </p>
            </RevealSection>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">

              {/* The equation card — signature element */}
              <RevealSection className="lg:col-span-2">
                <div className="h-full rounded-2xl border border-black/10 dark:border-white/15 p-8 bg-black/[0.02] dark:bg-white/[0.03]">
                  <p className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-6">
                    A typical month
                  </p>
                  <div className="space-y-4 font-mono text-sm md:text-base">
                    <div className="flex justify-between text-black/70 dark:text-white/70">
                      <span className="flex flex-col">
                        Income baseline
                        <span className="font-sans not-italic text-[10px] text-foreground/35">Mapato</span>
                      </span>
                      <span>KES 85,000</span>
                    </div>
                    <div className="flex justify-between text-black/50 dark:text-white/50">
                      <span className="flex flex-col">
                        – Committed
                        <span className="font-sans not-italic text-[10px] text-foreground/35">Malipo ya lazima</span>
                      </span>
                      <span>32,400</span>
                    </div>
                    <div className="flex justify-between text-black/50 dark:text-white/50 pb-4 border-b border-dashed border-black/15 dark:border-white/15">
                      <span className="flex flex-col">
                        – Variable
                        <span className="font-sans not-italic text-[10px] text-foreground/35">Matumizi ya kawaida</span>
                      </span>
                      <span>18,650</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="font-sans font-bold text-black dark:text-white flex flex-col">
                        Breathing room
                        <span className="font-normal text-[10px] text-foreground/35">Nafasi ya kupumua</span>
                      </span>
                      <span className="font-bold text-lg" style={{ color: "#00A645" }}>
                        KES 33,950
                      </span>
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-foreground/50 leading-relaxed">
                    Updated every day, straight from your real transactions.
                  </p>
                </div>
              </RevealSection>

              {/* Committed */}
              <RevealSection delay={80} className="lg:col-span-3">
                <div className="h-full rounded-2xl border border-black/10 dark:border-white/15 p-8">
                  <IconSplit className="w-7 h-7 text-black dark:text-white mb-5" />
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    Committed expenses
                  </h3>
                  <p className="text-foreground/60 leading-relaxed mb-4">
                    Rent, NHIF, DSTV, school fees, loan repayments — the things
                    you never really decide to pay, you just pay them. Maganji
                    spots these automatically from your SMS history and crosses
                    each one off as it clears. Anything still unpaid stays
                    visible as expected, so nothing gets forgotten.
                  </p>
                  <p className="text-foreground/60 leading-relaxed">
                    Paying something off in installments, like electricity in
                    weekly top-ups? Maganji tracks your progress toward the
                    full monthly total.
                  </p>
                </div>
              </RevealSection>

              {/* Variable */}
              <RevealSection delay={140} className="lg:col-span-5">
                <div className="rounded-2xl border border-black/10 dark:border-white/15 p-8">
                  <IconTag className="w-7 h-7 text-black dark:text-white mb-5" />
                  <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                    Variable expenses
                  </h3>
                  <p className="text-foreground/60 leading-relaxed max-w-3xl">
                    Food, matatu fare, going out, subscriptions — what you
                    choose to spend on. Maganji doesn&apos;t ask you to set a
                    budget for these; it looks at six months of your real
                    habits and shows you what your usual is, category by
                    category. Spend within that and your breathing room stays
                    put — only spending past it counts against you.
                  </p>
                </div>
              </RevealSection>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            ABOUT / FEATURES
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 lg:py-36 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <RevealSection className="max-w-2xl mb-20">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-6 uppercase text-black/60 dark:text-white/60 border border-black/10 dark:border-white/15">
                Why Maganji
              </div>
              <h2 className="maganji-display text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-5">
                Your finances, finally making sense.
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                Maganji is a personal finance app and money manager built for
                Kenya, not adapted for it. From the moment a payment lands in
                your SMS inbox, it&apos;s already categorised, counted, and
                contributing to your monthly picture.
              </p>
            </RevealSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <RevealSection key={f.title} delay={i * 80}>
                  <div className="feature-card group relative p-7 rounded-2xl border border-black/10 dark:border-white/15 bg-white dark:bg-black transition-all duration-300 h-full">
                    <div
                      className="w-10 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-14"
                      style={{ background: f.highlight ? "#00A645" : "currentColor" }}
                    />
                    <f.Icon className="w-7 h-7 text-black dark:text-white mb-4" />
                    <h3 className="text-lg font-bold text-black dark:text-white mb-3">
                      {f.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </RevealSection>
              ))}
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SCREENSHOTS — overlapping iPhone frames
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 lg:py-36 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            <RevealSection className="max-w-2xl mb-16">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-6 uppercase text-black/60 dark:text-white/60 border border-black/10 dark:border-white/15">
                Inside the app
              </div>
              <h2 className="maganji-display text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight mb-5">
                Built around one question:
                <br />
                what can I actually spend?
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                As Kenya&apos;s budgeting app for M-Pesa and Airtel Money
                users, every screen answers one question. The Snapshot page
                leads with your breathing room. Committed expenses get
                crossed off as they clear. Variable spending shows itself as
                a mirror of your real habits — not a budget you were told to
                keep.
              </p>
            </RevealSection>

            {/* Overlapping phone cluster */}
            <RevealSection delay={100}>
              <div className="flex items-center justify-center py-10">
                <div className="flex items-end">
                  {/* Left phone */}
                  <div
                    className="phone-frame w-[150px] md:w-[220px] rounded-[28px] overflow-hidden -mr-8 md:-mr-14 z-0"
                    style={{ transform: "rotate(-7deg) translateY(18px)" }}
                  >
                    {/* Suggested screen: committed expenses list */}
                    <Image
                      src="/images/maganji/committed_dark.webp"
                      alt="Maganji committed expenses tracker — rent, NHIF and loan repayments in Kenya"
                      width={220}
                      height={440}
                      className="w-full"
                    />
                  </div>

                  {/* Center phone */}
                  <div className="phone-frame w-[190px] md:w-[270px] rounded-[32px] overflow-hidden z-20">
                    {/* Suggested screen: breathing room snapshot */}
                    <Image
                      src="/images/maganji/analysis_dark.webp"
                      alt="Maganji breathing room snapshot — M-Pesa and Airtel Money expense tracker"
                      width={270}
                      height={540}
                      className="w-full"
                    />
                  </div>

                  {/* Right phone */}
                  <div
                    className="phone-frame w-[150px] md:w-[220px] rounded-[28px] overflow-hidden -ml-8 md:-ml-14 z-0"
                    style={{ transform: "rotate(7deg) translateY(18px)" }}
                  >
                    {/* Suggested screen: variable category breakdown */}
                    <Image
                      src="/images/maganji/variable_dark.webp"
                      alt="Maganji variable spending breakdown by category — budgeting app Kenya"
                      width={220}
                      height={440}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3 flex-wrap mt-4">
                {["Committed", "Snapshot", "Variable"].map((label) => (
                  <span
                    key={label}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-foreground/50 border border-black/10 dark:border-white/15"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </RevealSection>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FAQ
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 lg:py-36 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">

            <RevealSection className="mb-14">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-6 uppercase text-black/60 dark:text-white/60 border border-black/10 dark:border-white/15">
                Questions
              </div>
              <h2 className="maganji-display text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
                Frequently asked.
              </h2>
            </RevealSection>

            <RevealSection delay={80}>
              <div>
                {FAQS.map((item, i) => (
                  <FaqItem
                    key={item.q}
                    q={item.q}
                    a={item.a}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                ))}
              </div>
            </RevealSection>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════════════════════════════ */}
        <section className="py-24 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <RevealSection>
              <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center bg-black dark:bg-white">
                <div className="relative z-10">
                  <p
                    className="text-sm font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "#00A645" }}
                  >
                    Poa. Free to download.
                  </p>
                  <h2 className="maganji-display text-4xl md:text-6xl font-bold text-white dark:text-black mb-6 leading-tight">
                    Start tracking
                    <br />
                    your money today.
                  </h2>
                  <p className="text-white/60 dark:text-black/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    No account. No subscription required. No internet
                    connection needed. Just an honest number.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      // TODO: swap in the live App Store URL once the listing is public
                      href="https://apps.apple.com/app/maganji/id0000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-7 py-3.5 bg-white dark:bg-black text-black dark:text-white rounded-xl text-base font-bold transition-all duration-300 hover:opacity-85 active:scale-95"
                    >
                      <IconApple className="w-5 h-5" />
                      App Store
                    </Link>
                    <Link
                      href="https://play.google.com/store/apps/details?id=com.brimukon.spenditize"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-7 py-3.5 bg-white dark:bg-black text-black dark:text-white rounded-xl text-base font-bold transition-all duration-300 hover:opacity-85 active:scale-95"
                    >
                      <IconPlay className="w-5 h-5" />
                      Google Play
                    </Link>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

      <MaganjiFooter/>
      </div>
    </>
  );
}
