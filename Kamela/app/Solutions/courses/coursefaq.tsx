"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";


interface FaqItem {
  question: string;
  answer: string;
}

interface CourseFaqProps {
  courseName: string;
  nqfLevel: string | number;
  duration: string;
  category: string;
}


function buildFaqs(
  courseName: string,
  nqfLevel: string | number,
  duration: string,
  category: string,
): FaqItem[] {
  return [
    {
        question: "What is an Occupational Qualification and how does it differ from degrees and higher certificates?",
        answer: "An occupational qualification is a formal recognition of the skills and knowledge required to perform a specific job or role in a particular industry aligned with the National Qualifications Framework (NQF) in South Africa. Unlike traditional academic degrees that are theory heavy and require a significant time investment, occupational qualifications are designed to be practical and directly relevant to the workplace with far less time investment. "
    },
    {
      question: `What is the ${courseName} qualification?`,
      answer: `The ${courseName} is an accredited qualification registered on the National Qualifications Framework (NQF) at Level ${nqfLevel}. It is designed to equip learners with the practical skills and theoretical knowledge needed to succeed in the ${category} sector.`,
    },
    {
      question: `How long does the ${courseName} take to complete?`,
      answer: `The program runs for ${duration}. This includes both theoretical learning and workplace practical components, ensuring you graduate job-ready.`,
    },
    {
      question: "Will i get job placement support after the program ?",
      answer:
        "While we cannot guarantee job placement, our team provides dedicated career support services to all graduates. This includes resume building, interview preparation, and access to our network of industry partners who are actively seeking skilled professionals in the ${category} sector.",
    },
    {
      question: "Can I study while working full-time?",
      answer:
        "Yes. Our programs use a blended learning approach that combines online self-study, virtual sessions, and scheduled contact days — designed to accommodate working professionals without requiring you to take extended leave. Due note that you will be required to ask for time off on the exam days and vital contact days to complete the practical assessments, workplace learning components and write the exam.",
    },
    {
      question: "Is financial assistance or a learnership available?",
      answer:
        "Many of our qualifications can be delivered as learnerships, which are funded through SETA discretionary grants. Employers who sponsor learners can also claim their training spend towards their BBBEE scorecard. Contact our team to explore funding options for your specific situation.",
    },
    {
        question: "What makes Kamela International unique from other educational institutions for both students and companies?",
        answer: "Kamela International stands out by offering practical, industry-aligned qualifications that are directly relevant to the South African job market. We combine flexible learning options with strong career support services, ensuring students are job-ready upon completion. For companies, we offer tailored training solutions and learnership programs that support skills development and BBBEE compliance."

    },
  ];
}

/* ─── Component ───────────────────────────────────────────────── */
export default function CourseFaq({
  courseName,
  nqfLevel,
  duration,
  category,
}: CourseFaqProps) {
  const faqs = buildFaqs(courseName, nqfLevel, duration, category);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setOpenIdx((prev) => (prev === idx ? null : idx));

  /* FAQPage JSON-LD — picked up by Google for rich results in SERPs */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        id="section-faq"
        className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <h2 className=" font-bold mb-6 flex items-center gap-3 before:block before:w-1 before:h-6 before:rounded-full before:bg-blue-600">
          Frequently Asked Questions
        </h2>

        <dl className="space-y-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/60"
                    : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                }`}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span
                      className={`font-medium text-sm leading-snug transition-colors ${
                        isOpen ? "text-blue-700" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                      }`}
                    />
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </section>
    </>
  );
}