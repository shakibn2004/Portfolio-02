"use client";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

const SERVICES = [
  { icon: "🛍️", name: "E-Commerce Development" },
  { icon: "📊", name: "SaaS Dashboard" },
  { icon: "🔌", name: "REST / GraphQL API" },
  { icon: "📱", name: "Responsive Web App" },
  { icon: "🔐", name: "Auth & Security" },
  { icon: "🚀", name: "Performance Audit" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", budget: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  const inputCls = `w-full bg-dark-300 border border-white/8 rounded-xl px-4 py-3 text-gray-200 text-sm
    placeholder-gray-600 outline-none focus:border-accent/50 focus:bg-dark-200 transition-all duration-200
    font-display`;

  return (
    <section id="contact" className="py-24 px-[6%] bg-dark-400">
      <SectionTitle number="07" title="Hire Me" />

      <div className="flex flex-col xl:flex-row gap-14 mt-14">

        {/* Left — Info */}
        <div className="xl:w-[380px] flex-shrink-0">
          <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Build Something Amazing</h3>
          <p className="text-gray-500 text-sm leading-[1.85] mb-8">
            I&apos;m currently available for freelance projects, full-time remote roles, and technical
            consultations. Whether it&apos;s a startup MVP or an enterprise-scale application — I&apos;m ready to ship.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 mb-10">
            {[
              ["📧", "Email",        "rahim.dev@gmail.com"],
              ["📍", "Location",     "Khulna, Bangladesh"],
              ["⏰", "Availability", "Mon–Sat, 9 AM – 9 PM BST"],
              ["⚡", "Response",     "Within 24 hours"],
            ].map(([icon, key, val]) => (
              <div key={key} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-dark-100 border border-accent/15 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <div className="text-gray-600 text-xs font-semibold uppercase tracking-wider mb-0.5">{key}</div>
                  <div className="text-gray-300 text-sm font-medium">{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="border-t border-white/5 pt-8">
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">I can help with</p>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.map((s) => (
                <div key={s.name}
                  className="flex items-center gap-2 bg-dark-100 border border-white/5 rounded-xl px-3 py-2.5">
                  <span className="text-base">{s.icon}</span>
                  <span className="text-gray-400 text-xs font-medium leading-tight">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="flex-1 bg-dark-100 border border-white/5 rounded-2xl p-8">
          {sent && (
            <div className="mb-6 bg-accent/10 border border-accent/30 text-accent rounded-xl px-5 py-4 text-sm font-semibold flex items-center gap-3">
              <span className="text-xl">✅</span>
              Message sent! I&apos;ll get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Your Name *
                </label>
                <input
                  className={inputCls}
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className={inputCls}
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Budget Range
              </label>
              <select
                className={inputCls}
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option value="" disabled>Select budget...</option>
                <option>$500 – $1,000</option>
                <option>$1,000 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000+</option>
                <option>Let&apos;s discuss</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Tell Me About Your Project *
              </label>
              <textarea
                className={`${inputCls} resize-none`}
                rows={5}
                placeholder="Describe your project, goals, timeline..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" disabled={loading}
              className={`btn-primary w-full flex items-center justify-center gap-2 text-base
                ${loading ? "opacity-70 cursor-not-allowed" : ""}`}>
              {loading ? (
                <><span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending...</>
              ) : (
                <>🚀 Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
