"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-white/5 text-center"
    >
      <p className="text-gray-500 text-sm font-mono">
        <span className="text-cyan-400/60">{"<"}</span>
        {hero.name}
        <span className="text-cyan-400/60">{" />"}</span>{" "}
        <span className="text-gray-600">· {year}</span>
      </p>
      <p className="text-gray-600 text-xs mt-1">
        Built with Next.js · TypeScript · Tailwind · Framer Motion
      </p>
    </motion.footer>
  );
}
