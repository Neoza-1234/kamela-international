import Image from "next/image";
import Link from "next/link";
import { Feature197 } from "@/app/Solutions/Enterprise/accordion-feature-section";
import Servicebtn from "@/components/servicebtn";
import { ArrowUpRight, CheckCheck, Globe, Layers, Cpu, Building2 } from "lucide-react";
import { Metadata } from "next";
import { StaggerTestimonials } from "@/components/stagger-testimonials";
import EnterpriseInsights from "@/app/Solutions/Enterprise/enterpriseinsight";

/* ─── SEO ─────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Enterprise Solutions | Kamela International",
  description:
    "Kamela International partners with leading South African organizations to deliver accredited training, learnership programmes, BBBEE-aligned enterprise development, and workforce transformation solutions — nationally.",
  keywords: [
    "Enterprise Solutions South Africa",
    "Corporate Training South Africa",
    "Workforce Development",
    "Learnership Programmes",
    "BBBEE Skills Development",
    "Talent Pipeline Development",
    "Work Integrated Learning",
    "SMME Development",
    "Digital Up-skilling",
    "Blended Learning Solutions",
    "National Learnership Delivery",
    "Kamela International",
  ],
  authors: [{ name: "Kamela International", url: "https://kamelatraining.co.za" }],
  creator: "Kamela International",
  publisher: "Kamela International",
  metadataBase: new URL("https://kamelatraining.co.za"),
  alternates: { canonical: "/Solutions/Enterprise" },
  openGraph: {
    title: "Enterprise Solutions | Kamela International",
    description:
      "Accredited workforce training, learnership delivery, BBBEE enterprise development, and talent pipeline solutions for South African organisations.",
    url: "https://www.kamelatraining.co.za/Solutions/Enterprise",
    siteName: "Kamela International",
    images: [
      {
        url: "https://www.kamelatraining.co.za/gallery-2.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Solutions - Kamela International",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Solutions | Kamela International",
    description:
      "Accredited workforce training, learnership delivery & talent pipeline development for South African organisations.",
    images: ["https://www.kamelatraining.co.za/gallery-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

/* ─── Brand Colors ───────────────────────────────────────────── */

const BRAND = {
  orange: "#ff4500",
  blue: "#0866ff",
} as const;


/* ─── Why Choose Kamela — data ────────────────────────────────── */
const whyKamela = [
  {
    icon: CheckCheck,
    title: "Proven Track Record",
    body: "Successfully delivered programmes for leading organisations in mining, logistics, public sector, telecoms, manufacturing, and academia.",
  },
  {
    icon: Layers,
    title: "Customized Skills Solutions",
    body: "Training tailored to each client's operational environment, workforce needs, and strategic goals — not off-the-shelf.",
  },
  {
    icon: Cpu,
    title: "Digital & Blended Learning",
    body: "LMS, virtual classrooms, digital labs, and workplace assessments ensure employees learn anywhere, anytime.",
  },
  {
    icon: Building2,
    title: "Enterprise Development & Incubation",
    body: "SMME development, incubation, and supplier development training aligned to B-BBEE requirements.",
  },
  {
    icon: Globe,
    title: "National Implementation Capability",
    body: "Programmes rolled out across all 9 provinces via digital, hybrid, or on-site delivery — seamlessly.",
  },
  {
    icon: CheckCheck,
    title: "Talent Pipeline Development",
    body: "We prepare youth and early-career employees for long-term employability and high professional performance.",
  },
];

/* ─── Partner logos ───────────────────────────────────────────── */
const partners = [
  { src: "/icons/anglo-american.svg", alt: "Anglo American", w: 100, h: 40 },
  { src: "/icons/alteram.png", alt: "Alteram", w: 100, h: 40 },
  { src: "/icons/master-plastics.webp", alt: "Master Plastics", w: 100, h: 40 },
  { src: "/icons/wits.png", alt: "University of the Witwatersrand", w: 100, h: 40 },
  { src: "/icons/unisa.jpg", alt: "UNISA", w: 100, h: 40 },
  { src: "/icons/transnet.png", alt: "Transnet", w: 100, h: 40 },
  { src: "/icons/marshalls.jpg", alt: "Marshalls", w: 100, h: 40 },
  { src: "/icons/makhophila.png", alt: "Makhophila", w: 100, h: 40 },
  { src: "/icons/raf.jpg", alt: "Road Accident Fund", w: 50, h: 50 },
  { src: "/icons/uj.png", alt: "UJ", w: 100, h: 40 },
  { src: "/icons/umgeni.png", alt: "Umgeni Water", w: 100, h: 40 },
  { src: "/icons/acsa.png", alt: "ACSA", w: 100, h: 40 },
  { src: "/icons/zppa.png", alt: "ZPPA", w: 100, h: 40 },
  { src: "/icons/undp.svg", alt: "United Nations", w: 100, h: 40 },
  { src: "/icons/eskom.jpg", alt: "Eskom", w: 100, h: 40 },
];

/* ─── Page ────────────────────────────────────────────────────── */
export default function Enterprise() {
  return (
    <>
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500 font-medium mt-30 px-10 md:px-16 lg:px-24 xl:px-32 mb-3"
      >
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <span aria-hidden className="text-gray-300">/</span>
        <span>Solutions</span>
        <span aria-hidden className="text-gray-300">/</span>
        <span className="text-(--prime) font-semibold">Enterprise</span>
      </nav>

      {/* ── Hero ── */}
      <header className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <h1
              className="sm:text-5xl leading-tight text-start md:text-left"
              style={{ color: "#0d0d14" }}
            >
              Elevate and Sustain{" "}
              <span
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.orange}, ${BRAND.blue})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Workforce Talent 
              </span>{" "}
              Through Enterprise Development Solutions
            </h1>
          <p className="mt-4 md:text-xl leading-relaxed">
            We partner with organisations to deliver customised training solutions that drive
            workforce transformation, enterprise development, and talent pipeline growth -
            enhancing employee performance and accelerating economic inclusion.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Servicebtn />
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <Image
            src="/gallery-2.jpg"
            alt="Kamela International enterprise training session"
            width={700}
            height={700}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </header>

      {/* ── Insights Section ── */}
      <EnterpriseInsights />

      {/* ── Trusted By ── */}
      <section aria-labelledby="trusted-heading" className="flex flex-col items-center justify-center px-4 w-full py-20 gap-8">
        <h2 id="trusted-heading" className="text-center sm:text-3xl">
          Trusted By Leading Corporate &amp; Public Organisations
        </h2>
        <ul
          aria-label="Partner organisations"
          className="max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 w-full mt-2"
        >
          {partners.map((p) => (
            <li
              key={p.src}
              className="border-2 border-slate-200 p-4 h-20 grid place-content-center rounded-xl hover:-translate-y-1 transition-all duration-200 hover:shadow-lg hover:border-blue-600"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                className="object-contain max-h-10"
              />
            </li>
          ))}
        </ul>
      </section>

      {/* ── Why Choose Kamela ── */}
      <section aria-labelledby="why-heading" className="py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <h2 id="why-heading" className="text-center sm:text-3xl">
            Why Corporates Choose Kamela
          </h2>
          <p className="text-center text-gray-500 max-w-2xl">
            Our enterprise development solutions are trusted because they offer:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 w-full">
            {whyKamela.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="border border-slate-200 rounded-2xl p-6 space-y-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:border-blue-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" aria-hidden />
                </div>
                <h3 className="font-bold text-gray-900">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom Training Solutions ── */}
      <section aria-labelledby="training-heading" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-12 gap-y-16 px-6 lg:grid-cols-2 lg:items-start lg:px-8">
          {/* Text column */}
          <div className="flex flex-col justify-start">
            <h2 id="training-heading" className="sm:text-4xl leading-tight">
              Training Solutions Tailored For Enterprise Success
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We partner with organisations to deliver customised training solutions that drive
              workforce transformation, enterprise development, and talent pipeline growth — designing
              programmes that enhance employee performance and accelerate economic inclusion.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether it's up-skilling employees, developing SMMEs, or building talent pipelines,
              we create programmes that deliver measurable impact and long-term value.
            </p>

            <ul className="mt-8 space-y-6">
              {[
                {
                  label: "In-House Training",
                  body: "Flexible on-site programmes tailored to your organisation's needs, delivered by experienced facilitators with minimal disruption to operations.",
                },
                {
                  label: "Online Training",
                  body: "Accessible, flexible virtual programmes combining expert instruction with interactive content — enabling teams to up-skill from anywhere, anytime.",
                },
                {
                  label: "Blended Learning",
                  body: "The best of both worlds: face-to-face instruction, digital content, and practical application — maximising engagement and knowledge retention.",
                },
              ].map(({ label, body }) => (
                <li key={label} className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-blue-600 shrink-0" aria-hidden />
                  <span className="text-gray-700">
                    <strong className="font-semibold text-(--prime)">{label}. </strong>
                    {body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image column */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <Image
                src="/Kamela18.jpg"
                alt="Kamela International training session in progress"
                width={800}
                height={900}
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section
        id="enterprise-services"
        aria-labelledby="services-heading"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="text-center mb-2">
          <h2 id="services-heading" className="sm:text-3xl mb-4">
            Our Enterprise Solutions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Kamela International offers a comprehensive suite of enterprise solutions designed to meet
            the diverse needs of organisations across South Africa and Africa.
          </p>
        </div>
        <Feature197 />
      </section>

      {/* ── Testimonials ── */}
      <section aria-labelledby="testimonials-heading" className="mx-auto px-6 py-20">
        <h2 id="testimonials-heading" className="text-center sm:text-3xl mb-12">
          What Our Partners Say About Us
        </h2>
        <StaggerTestimonials />
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="cta-heading"
        className="overflow-hidden sm:grid sm:grid-cols-2 mb-8 py-20 gap-8 max-w-7xl mx-auto px-6"
      >
        <div className="flex items-center py-8">
          <div className="max-w-xl">
            <h2 id="cta-heading" className="sm:text-3xl leading-tight">
              Ready to Transform Your Workforce and Drive Enterprise Success?
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Partner with Kamela International to access customised training solutions that empower
              your employees, develop SMMEs, and build talent pipelines for the future. Let's create a
              skilled, inclusive, and competitive workforce together.
            </p>
            <div className="mt-8">
              <Link
                href="/Contact"
                className="group bg-blue-700 text-white font-medium inline-flex flex-row justify-between items-center py-3 px-5 rounded-full w-52 border border-blue-700 transition-all duration-200 ease-in-out hover:bg-transparent hover:text-black"
              >
                <span className="transform transition-transform duration-200 ease-in-out group-hover:translate-x-8">
                  Let's Collaborate
                </span>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transform transition-all duration-200 ease-in-out group-hover:-translate-x-35 group-hover:rotate-45 group-hover:bg-black">
                  <ArrowUpRight className="w-4 h-4 text-black transition-colors duration-200 ease-in-out group-hover:text-white" strokeWidth={1.67} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Image
          src="/contact.jpg"
          alt="Get in touch with Kamela International"
          width={600}
          height={500}
          loading="lazy"
          sizes="(max-width: 640px) 100vw, 50vw"
          className="h-56 w-full object-cover rounded-3xl sm:h-full shadow-2xl"
        />
      </section>
    </>
  );
}