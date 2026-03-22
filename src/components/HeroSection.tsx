"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Github, Linkedin, ArrowDown } from "lucide-react";
import { hero } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-cyan-400 font-mono text-sm mb-4 tracking-widest uppercase">
            {"// Hello, world!"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">Hans Peter</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
            Castellar del Río
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-3 font-light"
        >
          {hero.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-cyan-400/70 font-mono mb-8 tracking-wide"
        >
          {hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 mb-10"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-cyan-400" />
            {hero.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={14} className="text-cyan-400" />
            <a
              href={`mailto:${hero.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {hero.email}
            </a>
          </span>
          <span className="flex items-center gap-1.5">
            <Phone size={14} className="text-cyan-400" />
            <a
              href={`tel:${hero.phone}`}
              className="hover:text-cyan-400 transition-colors"
            >
              {hero.phone}
            </a>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all duration-200"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-sm text-white font-medium hover:bg-cyan-400 transition-all duration-200"
          >
            Contactar
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-400 transition-colors"
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
