"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { hero } from "@/data/portfolio";

const links = [
  {
    icon: Github,
    href: hero.github,
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: hero.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: `mailto:${hero.email}`,
    label: "Email",
  },
  {
    icon: Phone,
    href: `tel:${hero.phone}`,
    label: "Phone",
  },
];

export function FloatingSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed left-4 bottom-1/2 translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4"
    >
      <div className="flex flex-col gap-3">
        {links.map(({ icon: Icon, href, label }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.1 }}
            className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200 group relative"
          >
            <Icon size={18} />
            <span className="absolute left-10 top-1/2 -translate-y-1/2 bg-gray-900 text-cyan-400 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-cyan-400/20">
              {label}
            </span>
          </motion.a>
        ))}
      </div>
      <div className="w-px h-16 bg-gradient-to-b from-cyan-400/50 to-transparent mt-2" />
    </motion.div>
  );
}
