"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  Code2, 
  Layers, 
  Globe, 
  Cpu 
} from "lucide-react";

const SERVICES = [
  { icon: Globe, name: "Full-Stack Web Apps", color: "#00f5a0" },
  { icon: Layers, name: "Next.js & React UI", color: "#3b82f6" },
  { icon: Cpu, name: "Node.js & Express APIs", color: "#a855f7" },
  { icon: ShieldCheck, name: "Auth & Security Systems", color: "#f59e0b" },
  { icon: Zap, name: "Performance Audit", color: "#06b6d4" },
  { icon: Code2, name: "MongoDB & Database Architecture", color: "#10b981" },
];

const CONTACT_METHODS = [
  { icon: Mail, label: "Email Address", val: "shakibn2004@gmail.com", href: "mailto:shakibn2004@gmail.com", color: "#3b82f6" },
  { icon: MapPin, label: "Location", val: "Khulna, Bangladesh", href: null, color: "#00f5a0" },
  { icon: Clock, label: "Response Time", val: "Within 12 Hours", href: null, color: "#a855f7" },
  { icon: Phone, label: "Direct Phone", val: "+880 9678640848", href: "tel:+8809678640848", color: "#10b981" },
  { icon: MessageCircle, label: "WhatsApp Direct", val: "+880 1407306010", href: "https://wa.me/8801407306010", color: "#22c55e" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "Full-Stack App", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", projectType: "Full-Stack App", budget: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 1200);
  };

  const inputCls = `w-full bg-dark-300/80 border border-white/10 rounded-2xl px-4 py-3.5 text-gray-200 text-sm
    placeholder-gray-500 outline-none focus:border-accent/60 focus:bg-dark-200 focus:ring-1 focus:ring-accent/30 transition-all duration-300
    font-display cursor-none`;

  return (
    <section id="contact" className="py-24 px-[6%] bg-dark-400 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid bg-grid-60 opacity-30 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle number="07" title="Hire Me" />
      </motion.div>

      <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 mt-12 relative z-10">

        {/* Left Column — Contact Info & Capabilities */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
          className="xl:w-[420px] shrink-0 space-y-8"
        >
          {/* Availability Header Box */}
          <div className="p-6 rounded-3xl bg-dark-100/90 backdrop-blur-xl border border-white/10 space-y-4 shadow-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Available for Work</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white leading-tight">
              Let&apos;s Build Something <span className="text-gradient">Extraordinary</span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              I am open for freelance projects, full-time remote developer positions, and technical consultations. Ready to take your idea from concept to production.
            </p>
          </div>

          {/* Contact Methods Cards */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase text-gray-500 tracking-widest px-1">
              Direct Channels
            </h4>
            <div className="space-y-2.5">
              {CONTACT_METHODS.map((c, i) => {
                const Icon = c.icon;
                const cardContent = (
                  <motion.div
                    whileHover={{ x: 6, borderColor: `${c.color}55` }}
                    className="flex items-center gap-3.5 bg-dark-100/80 backdrop-blur-md border border-white/8 rounded-2xl px-4 py-3.5 transition-all duration-300 cursor-none"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                      style={{
                        background: `${c.color}15`,
                        borderColor: `${c.color}30`,
                        color: c.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                        {c.label}
                      </span>
                      <span className="text-sm font-semibold text-gray-200 truncate">
                        {c.val}
                      </span>
                    </div>
                  </motion.div>
                );

                return c.href ? (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block cursor-none"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div key={i}>{cardContent}</div>
                );
              })}
            </div>
          </div>

          {/* Services Stack */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase text-gray-500 tracking-widest px-1">
              Services &amp; Solutions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03, borderColor: `${s.color}44` }}
                    className="flex items-center gap-2.5 bg-dark-100/60 border border-white/5 rounded-xl px-3 py-2.5 transition-all duration-200 cursor-none"
                  >
                    <Icon className="w-4 h-4 shrink-0" style={{ color: s.color }} />
                    <span className="text-xs font-medium text-gray-300 line-clamp-1">
                      {s.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column — Project Inquiry Form */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
          className="flex-1 bg-dark-100/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative"
        >
          {/* Form Top Title */}
          <div className="space-y-1 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-accent font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Project Inquiry</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Send a Message
            </h3>
            <p className="text-xs text-gray-400">
              Fill out the form below and I will respond within 12 hours with a proposal.
            </p>
          </div>

          <AnimatePresence>
            {sent && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-accent/15 border border-accent/40 text-accent rounded-2xl px-5 py-4 text-sm font-semibold flex items-center gap-3 shadow-lg"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Message received! Thank you, I will get back to you shortly.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Your Name *
                </label>
                <input
                  className={inputCls}
                  placeholder="e.g. Shakib Ahmed"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  className={inputCls}
                  placeholder="e.g. shakib@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Project Type Selector Tags */}
            <div>
              <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Project Type
              </label>
              <div className="flex flex-wrap gap-2">
                {["Full-Stack App", "Frontend UI", "Backend API", "Consultation"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setForm({ ...form, projectType: type })}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-none ${
                      form.projectType === type
                        ? "bg-accent/15 border-accent text-accent shadow-md"
                        : "bg-dark-300/60 border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Select */}
            <div>
              <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Estimated Budget (USD)
              </label>
              <select
                className={inputCls}
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                <option value="" disabled>Select estimated budget...</option>
                <option>$200 – $500</option>
                <option>$500 – $1,000</option>
                <option>$1,000 – $3,000</option>
                <option>$3,000 – $5,000</option>
                <option>$5,000+</option>
                <option>Let&apos;s discuss</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Project Overview &amp; Requirements *
              </label>
              <textarea
                className={`${inputCls} resize-none`}
                rows={5}
                placeholder="Describe your project goals, key features, timeline expectations..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit" 
              disabled={loading}
              whileHover={loading ? {} : { scale: 1.02, boxShadow: "0 0 25px rgba(0, 245, 160, 0.4)" }}
              whileTap={loading ? {} : { scale: 0.98 }}
              className={`btn-primary w-full flex items-center justify-center gap-2 text-sm py-4 font-bold cursor-none
                ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
