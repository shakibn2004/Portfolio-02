"use client";

import Reveal, { SectionHead } from "./Reveal";

const FACTS = [
  { label: "Based in", value: "Khulna, Bangladesh (GMT+6)" },
  { label: "Education", value: "B.Sc. in BECM" },
  { label: "Experience", value: "2+ years, freelance & client work" },
  { label: "Email", value: "shakibn2004@gmail.com", href: "mailto:shakibn2004@gmail.com" },
  { label: "Phone", value: "+880 9678640848", href: "tel:+8809678640848" },
  { label: "WhatsApp", value: "+880 1407306010", href: "https://wa.me/8801407306010" },
];

const PRINCIPLES = [
  {
    title: "Clean architecture",
    desc: "Modular, documented code that the next developer — or you — can pick up without a walkthrough.",
  },
  {
    title: "APIs that scale",
    desc: "Node.js and Express services with sensible data models, validation and indexes from day one.",
  },
  {
    title: "Interfaces that feel fast",
    desc: "Responsive Next.js front-ends tuned for load time, accessibility and smooth interaction.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="shell">
        <SectionHead id="about-title" title="About" />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p
                className="font-display text-[1.65rem] font-medium leading-[1.25] tracking-[-0.02em] text-fg sm:text-[2.1rem]"
                style={{ fontVariationSettings: '"opsz" 48' }}
              >
                I&rsquo;m a full-stack developer who turns product ideas into clean, secure and maintainable
                web applications — the kind that are pleasant to use and easy to keep improving.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[36rem] text-lg leading-relaxed text-muted">
                My day-to-day stack is Node.js, Express and MongoDB on the back end, with React and Next.js on the
                front. I&rsquo;ve built SaaS platforms, e-commerce flows and real-time apps, and I care as much
                about the hand-off — documentation, tests, a clear deploy — as the launch itself.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-line border-y border-line">
              {FACTS.map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="shrink-0 text-sm text-subtle">{f.label}</dt>
                  <dd className="min-w-0 truncate text-right text-[15px] text-fg">
                    {f.href ? (
                      <a
                        href={f.href}
                        className="link-draw"
                        {...(f.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {f.value}
                      </a>
                    ) : (
                      f.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="bg-canvas p-7 sm:p-8">
              <h3 className="text-xl font-semibold tracking-tight text-fg">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
