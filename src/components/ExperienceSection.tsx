"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm">// 03.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
            Experiencia
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-3" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="md:pl-12 relative"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2.5 top-3 w-3 h-3 rounded-full border-2 hidden md:block ${
                    job.current
                      ? "border-cyan-400 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                      : "border-cyan-400/40 bg-[#0a0f1e]"
                  }`}
                />

                <div className="p-5 rounded-xl bg-white/3 border border-white/8 hover:border-cyan-400/25 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-cyan-100 transition-colors">
                        {job.role}
                      </h3>
                      {job.company && (
                        <p className="text-cyan-400 text-sm font-medium">
                          {job.company}
                        </p>
                      )}
                    </div>
                    {job.current && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Presente
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-cyan-400/60" />
                      {job.period}
                    </span>
                    {job.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-cyan-400/60" />
                        {job.location}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
