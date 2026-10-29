"use client";

import { motion } from "motion/react";
import {
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiBetterauth, SiStripe,
  SiMongodb, SiPostgresql,
  SiGit, SiVercel, SiNetlify, SiPostman, SiFigma, SiLinux,
} from "react-icons/si";
import { Network } from "lucide-react";
import { SectionHead } from "./Reveal";

const GROUPS = [
  {
    title: "Front-end",
    note: "Interfaces people enjoy using",
    items: [
      ["React", SiReact],
      ["Next.js", SiNextdotjs],
      ["TypeScript", SiTypescript],
      ["JavaScript", SiJavascript],
      ["Tailwind CSS", SiTailwindcss],
      ["Framer Motion", SiFramer],
    ],
  },
  {
    title: "Back-end",
    note: "APIs, auth and payments",
    items: [
      ["Node.js", SiNodedotjs],
      ["Express", SiExpress],
      ["REST APIs", Network],
      ["Better Auth", SiBetterauth],
      ["Stripe", SiStripe],
    ],
  },
  {
    title: "Data",
    note: "Models that hold up under load",
    items: [
      ["MongoDB", SiMongodb],
      ["PostgreSQL", SiPostgresql],
    ],
  },
  {
    title: "Ship & tooling",
    note: "From repo to production",
    items: [
      ["Git & GitHub", SiGit],
      ["Vercel", SiVercel],
      ["Netlify", SiNetlify],
      ["Linux", SiLinux],
      ["Postman", SiPostman],
      ["Figma", SiFigma],
    ],
  },
];

const ease = [0.16, 1, 0.3, 1];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section border-t border-line">
      <div className="shell">
        <SectionHead id="skills-title" title="Skills & tools">
          The stack I use to take a project from idea to a production deploy — chosen for reliability, not
          novelty.
        </SectionHead>

        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, gi) => (
            <div key={g.title}>
              <div className="border-t border-fg pt-5">
                <h3 className="text-xl font-semibold tracking-tight text-fg">{g.title}</h3>
                <p className="mt-1 text-sm text-subtle">{g.note}</p>
              </div>
              <ul className="mt-6 space-y-1">
                {g.items.map(([name, Icon], i) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                    transition={{ duration: 0.7, ease, delay: gi * 0.06 + i * 0.035 }}
                    className="group -mx-3 flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-surface"
                  >
                    <Icon
                      aria-hidden
                      className="h-[18px] w-[18px] shrink-0 text-subtle transition-colors duration-300 group-hover:text-signal"
                    />
                    <span className="text-[15px] text-fg">{name}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
