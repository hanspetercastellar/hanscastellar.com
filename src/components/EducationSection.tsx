"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm">// 04.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
            Educación & Cursos
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-3" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono text-cyan-400/70 uppercase tracking-widest mb-5">
              <GraduationCap size={15} />
              Formación Académica
            </h3>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl bg-white/3 border border-white/8 hover:border-cyan-400/25 transition-all"
                >
                  <p className="text-white font-medium text-sm mb-1">
                    {edu.degree}
                  </p>
                  {edu.institution && (
                    <p className="text-cyan-400/70 text-xs mb-1">
                      {edu.institution}
                    </p>
                  )}
                  <p className="text-gray-500 text-xs font-mono">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-mono text-cyan-400/70 uppercase tracking-widest mb-5">
              <Award size={15} />
              Certificaciones
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-xl bg-white/3 border border-white/8 hover:border-cyan-400/25 transition-all group"
                >
                  <p className="text-white font-medium text-sm mb-1 group-hover:text-cyan-100 transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-cyan-400/70 text-xs">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
