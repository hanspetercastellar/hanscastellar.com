"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm">// 01.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
            Sobre mí
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-3" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-16"
        >
          {about.summary}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {about.achievements.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative p-5 rounded-xl bg-white/3 border border-white/8 hover:border-cyan-400/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-3xl font-bold text-cyan-400 mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-gray-300">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
