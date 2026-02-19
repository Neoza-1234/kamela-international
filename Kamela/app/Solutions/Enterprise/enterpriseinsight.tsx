"use client";

import { useEffect, useRef, useState } from "react";
import {
  TrendingDown,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/* ─── Brand tokens ────────────────────────────────────────────── */
const BRAND = {
  orange: "#ff4500",
  blue: "#0866ff",
  orangeDim: "rgba(255,69,0,0.12)",
  orangeBorder: "rgba(255,69,0,0.25)",
  orangeText: "rgba(255,120,60,0.9)",
  blueDim: "rgba(8,102,255,0.12)",
  blueBorder: "rgba(8,102,255,0.25)",
  blueText: "rgba(80,150,255,0.9)",
} as const;

/* ─── Data ────────────────────────────────────────────────────── */
const challenges = [
  {
    id: "01",
    icon: TrendingDown,
    stat: "86%",
    statLabel:
      "of SA organisations struggle to recruit critically skilled professionals",
    source: "Xpatweb Critical Skills Survey, 2025",
    title: "Skills Shortage Crisis",
    problem:
      "South African organisations are battling a deepening skills deficit especially in the ICT sector. Vacancies go unfilled for months, institutional knowledge walks out the door with retiring staff, and entry-level candidates arrive underprepared — stalling growth, inflating recruitment costs, and leaving teams stretched thin.",
    solution:
      "Kamela deploys targeted learnership programmes, graduate readiness support, and customised up-skilling pathways that close critical gaps fast — converting raw potential into productive, work-ready contributors.",
    solutionPoints: [
      "Accredited learnership delivery across all 9 provinces",
      "Entry-level talent development & workplace readiness",
      "Recruitment-as-a-Service for graduate & internship pipelines",
    ],
    accentStart: "rgba(255,69,0,0.22)",
    accentEnd: "rgba(180,30,0,0.10)",
    borderColor: "rgba(255,69,0,0.20)",
    borderHover: "rgba(255,69,0,0.55)",
    pillBg: BRAND.orangeDim,
    pillBorder: BRAND.orangeBorder,
    pillText: BRAND.orangeText,
    statColor: BRAND.orange,
    iconBg: "rgba(255,69,0,0.15)",
    iconBorder: "rgba(255,69,0,0.25)",
  },
  {
    id: "02",
    icon: Zap,
    stat: "65%",
    statLabel: "of SA businesses are impacted by the technology skills gap",
    source: "IITPSA ICT Skills Survey, 2024",
    title: "Rapid Digital Evolution",
    problem:
      "Automation, AI, and digitisation are compressing technology adoption cycles from decades to months. Workforces trained for yesterday's economy find themselves misaligned to tomorrow's demands — and organisations that fail to re-skill fast enough lose competitive ground they may never recover.",
    solution:
      "Kamela's digital up-skilling and re-skilling solutions are built for speed and scale — blending LMS-driven e-learning, virtual classrooms, and digital labs with practical workplace application so employees adapt without operations grinding to a halt.",
    solutionPoints: [
      "Digital literacy & IT re-skilling programmes",
      "Blended learning via LMS, virtual classrooms & digital labs",
      "Business, retail & admin transformation curricula",
    ],
    accentStart: "rgba(8,102,255,0.22)",
    accentEnd: "rgba(4,50,160,0.10)",
    borderColor: "rgba(8,102,255,0.20)",
    borderHover: "rgba(8,102,255,0.55)",
    pillBg: BRAND.blueDim,
    pillBorder: BRAND.blueBorder,
    pillText: BRAND.blueText,
    statColor: BRAND.blue,
    iconBg: "rgba(8,102,255,0.15)",
    iconBorder: "rgba(8,102,255,0.25)",
  },
  {
    id: "03",
    icon: Users,
    stat: "59 in 100",
    statLabel: "workers will need reskilling or upskilling by 2030",
    source: "WEF Future of Jobs Report, 2025",
    title: "Weak Talent Pipeline",
    problem:
      "Without a deliberate pipeline strategy, organisations perpetually react to talent crises rather than preventing them. Succession gaps widen, diversity targets stall, and B-BBEE scorecards suffer — while competitors who invested in structured development move ahead.",
    solution:
      "Kamela designs enterprise talent pipelines end-to-end: sourcing, developing, and placing emerging talent while simultaneously strengthening existing workforce capability — turning your training spend into a measurable strategic asset.",
    solutionPoints: [
      "Work Integrated Learning (WIL) & supervisory development",
      "BBBEE-aligned enterprise & SMME development",
      "Emotional intelligence, leadership & management skills",
    ],
    /* third card bridges both colours */
    accentStart: "rgba(255,69,0,0.16)",
    accentEnd: "rgba(8,102,255,0.14)",
    borderColor: "rgba(255,69,0,0.15)",
    borderHover: "rgba(8,102,255,0.45)",
    pillBg: BRAND.orangeDim,
    pillBorder: BRAND.orangeBorder,
    pillText: BRAND.orangeText,
    statColor: BRAND.orange,
    iconBg: "rgba(255,69,0,0.15)",
    iconBorder: "rgba(255,69,0,0.25)",
  },
] as const;

/* ─── Intersection observer hook ─────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─── Challenge Card ──────────────────────────────────────────── */
function ChallengeCard({
  challenge,
  index,
}: {
  challenge: (typeof challenges)[number];
  index: number;
}) {
  const { ref, inView } = useInView();
  const Icon = challenge.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
        background: "#09090f",
        borderColor: hovered ? challenge.borderHover : challenge.borderColor,
      }}
      className="group relative overflow-hidden rounded-2xl border transition-[border-color] duration-500 flex flex-col"
    >
      {/* Brand radial gradient */}
      <div
        aria-hidden
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at top left, ${challenge.accentStart}, ${challenge.accentEnd} 65%, transparent)`,
          opacity: hovered ? 1 : 0.75,
        }}
      />

      <div className="relative z-10 p-7 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              style={{
                background: challenge.iconBg,
                borderColor: challenge.iconBorder,
              }}
              className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
            >
              <Icon className="w-5 h-5 text-white" aria-hidden />
            </div>
            <span className="text-xs font-mono text-white tracking-widest">
              {challenge.id}
            </span>
          </div>
          <span
            style={{
              background: challenge.pillBg,
              borderColor: challenge.pillBorder,
              color: challenge.pillText,
            }}
            className="text-xs font-semibold px-3 py-1 rounded-full border"
          >
            Challenge
          </span>
        </div>

        {/* Stat */}
        <div className="mb-5">
          <span
            style={{ color: challenge.statColor }}
            className="text-5xl font-black tracking-tight leading-none"
          >
            {challenge.stat}
          </span>
          <p className="text-xs text-white/80 mt-2 leading-snug max-w-52.5">
            {challenge.statLabel}
          </p>
          <p className="text-[10px] text-white/50 mt-3">* {challenge.source}</p>
        </div>

        {/* Title */}
        <h3 className="font-bold text-white mb-3">{challenge.title}</h3>

        {/* Problem body */}
        <p className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
          {challenge.problem}
        </p>

        {/* Kamela's Answer */}
        <div
          className="border-t pt-5 mt-auto"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              style={{ background: BRAND.blue }}
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
            >
              <ArrowRight className="w-3 h-3 text-white" aria-hidden />
            </div>
            <span
              style={{ color: BRAND.blueText }}
              className="text-xs font-semibold uppercase tracking-widest"
            >
              Kamela's Answer
            </span>
          </div>

          <p className="text-sm text-white/65 leading-relaxed mb-4">
            {challenge.solution}
          </p>

          <ul className="space-y-2">
            {challenge.solutionPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle
                  style={{ color: BRAND.blue }}
                  className="w-4 h-4 shrink-0 mt-0.5"
                  aria-hidden
                />
                <span className="text-xs text-white/60 leading-snug">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Export ─────────────────────────────────────────────── */
export default function EnterpriseInsights() {
  const { ref: headRef, inView: headInView } = useInView(0.2);

  return (
    <section
      aria-labelledby="insights-heading"
      className="relative overflow-hidden py-20 px-4"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div
          ref={headRef}
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2
                id="insights-heading"
                className="sm:text-4xl lg:text-5xl leading-tight"
              >
                The Workforce Crisis
                <br />
                <span
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND.orange} 0%, ${BRAND.blue} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Organisations Can't Ignore
                </span>
              </h2>
            </div>
            <p className="leading-relaxed max-w-sm lg:text-right">
              Three forces are converging to create the most disruptive talent
              landscape South Africa has ever faced — and most organisations are
              underprepared for all three.
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map((challenge, i) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={i} />
          ))}
        </div>

        {/* ── Bottom banner ── */}
        <BottomBanner />
      </div>
    </section>
  );
}

/* ─── Bottom Banner ───────────────────────────────────────────── */
function BottomBanner() {
  const { ref, inView } = useInView(0.3);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        borderColor: "rgba(8,102,255,0.22)",
        background: `linear-gradient(135deg, rgba(255,69,0,0.07) 0%, rgba(8,102,255,0.10) 100%)`,
      }}
      className="mt-10 rounded-2xl border p-7 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6"
    >
      <div className="flex items-center gap-4">
        <div
          style={{
            background: `linear-gradient(135deg, ${BRAND.orange} 0%, ${BRAND.blue} 100%)`,
          }}
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
        >
          <CheckCircle className="w-5 h-5 text-white" aria-hidden />
        </div>
        <div>
          <p className="font-bold mb-1">
            One training partner. All three problems solved.
          </p>
          <p className="leading-relaxed max-w-xl">
            Kamela International is uniquely positioned as an accredited,
            full-service training provider with national reach — delivering
            integrated skills, digital, and pipeline solutions under one roof,
            aligned to your BBBEE scorecard.
          </p>
        </div>
      </div>
    </div>
  );
}
