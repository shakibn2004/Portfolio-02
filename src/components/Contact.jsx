"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Send } from "lucide-react";
import Reveal from "./Reveal";

const EMAIL = "shakibn2004@gmail.com";
const WHATSAPP = "8801302230277";

const CHANNELS = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "WhatsApp", value: "+880 1302230277", href: `https://wa.me/${WHATSAPP}` },
  { label: "Phone", value: "+880 9678640848", href: "tel:+8809678640848" },
];

const TYPES = ["Full-stack app", "Front-end / UI", "Back-end / API", "Consultation"];
const BUDGETS = ["$200 – $500", "$500 – $1,000", "$1,000 – $3,000", "$3,000 – $5,000", "$5,000+", "Not sure yet"];

const EMPTY = { name: "", email: "", type: TYPES[0], budget: "", message: "" };

function compose(form) {
  return [
    `Hi Shakib,`,
    ``,
    form.message.trim(),
    ``,
    `— ${form.name.trim()}${form.email ? ` (${form.email.trim()})` : ""}`,
    `Project type: ${form.type}`,
    form.budget ? `Budget: ${form.budget}` : null,
  ]
    .filter((l) => l !== null)
    .join("\n");
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [sentVia, setSentVia] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const sendEmail = (e) => {
    e.preventDefault();
    const subject = `Project inquiry: ${form.type} — ${form.name.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose(form))}`;
    setSentVia("email");
  };

  const sendWhatsApp = (e) => {
    const formEl = e.currentTarget.form;
    if (!formEl.reportValidity()) return;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(compose(form))}`, "_blank", "noopener");
    setSentVia("whatsapp");
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="section border-t border-line">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Left: invitation + direct channels */}
        <div className="lg:col-span-5">
          <h2
            id="contact-title"
            className="font-display font-semibold leading-[0.9] tracking-[-0.03em] text-fg"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", fontVariationSettings: '"wdth" 88, "opsz" 96' }}
          >
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                Let&rsquo;s build
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              >
                something.
              </motion.span>
            </span>
          </h2>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Open to freelance projects, remote roles and technical consultations. I usually reply within
              12 hours.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {CHANNELS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span>
                      <span className="block text-sm text-subtle">{c.label}</span>
                      <span className="mt-0.5 block text-lg text-fg transition-colors group-hover:text-signal sm:text-xl">
                        {c.value}
                      </span>
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-signal group-hover:bg-signal group-hover:text-signal-ink">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right: project inquiry */}
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <form
            onSubmit={sendEmail}
            className="rounded-[28px] border border-line bg-surface p-6 sm:p-10"
            style={{ boxShadow: "var(--shadow)" }}
          >
            <h3 className="text-2xl font-semibold tracking-tight text-fg">Tell me about your project</h3>
            <p className="mt-2 text-muted">
              This opens your email app (or WhatsApp) with everything filled in — just press send.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Your name</span>
                <input required className="field" autoComplete="name" value={form.name} onChange={set("name")} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-muted">Email</span>
                <input
                  required
                  type="email"
                  className="field"
                  autoComplete="email"
                  value={form.email}
                  onChange={set("email")}
                />
              </label>
            </div>

            <fieldset className="mt-6">
              <legend className="mb-2 text-sm text-muted">What do you need?</legend>
              <div className="flex flex-wrap gap-2">
                {TYPES.map((t) => {
                  const on = form.type === t;
                  return (
                    <label
                      key={t}
                      className={`relative cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-signal ${
                        on ? "border-fg bg-fg text-on-fg" : "border-line-strong text-fg hover:border-fg"
                      }`}
                    >
                      <input
                        type="radio"
                        name="type"
                        value={t}
                        checked={on}
                        onChange={set("type")}
                        className="sr-only"
                      />
                      {t}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <label className="mt-6 block">
              <span className="mb-2 block text-sm text-muted">Budget (USD, optional)</span>
              <select className="field appearance-none" value={form.budget} onChange={set("budget")}>
                <option value="">Select a range</option>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>

            <label className="mt-6 block">
              <span className="mb-2 block text-sm text-muted">Project details</span>
              <textarea
                required
                rows={5}
                className="field resize-none"
                placeholder="Goals, key features, timeline…"
                value={form.message}
                onChange={set("message")}
              />
            </label>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn btn-solid flex-1">
                <Send className="h-4 w-4" />
                Send by email
              </button>
              <button type="button" onClick={sendWhatsApp} className="btn btn-ghost flex-1">
                Send on WhatsApp
              </button>
            </div>

            <AnimatePresence>
              {sentVia && (
                <motion.p
                  role="status"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <span className="mt-5 flex items-start gap-2 text-sm text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {sentVia === "email"
                      ? `Your email app should now be open with the message ready. If nothing opened, email me directly at ${EMAIL}.`
                      : "WhatsApp opened in a new tab with your message ready to send."}
                  </span>
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
