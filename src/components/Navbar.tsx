"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0a0f1e]/80 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-cyan-400 font-mono text-sm font-semibold tracking-wider">
          {"<HPC />"}
        </span>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
