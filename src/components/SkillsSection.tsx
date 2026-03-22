"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm">// 02.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
            Skills
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-3" />
        </motion.div>

        <div className="space-y-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
            >
              <h3 className="text-sm font-mono text-cyan-400/70 uppercase tracking-widest mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + si * 0.04 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="px-3 py-1.5 rounded-md bg-cyan-400/8 border border-cyan-400/20 text-sm text-cyan-100 font-mono hover:bg-cyan-400/15 hover:border-cyan-400/40 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
