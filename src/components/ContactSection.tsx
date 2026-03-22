"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { hero } from "@/data/portfolio";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: hero.email,
    href: `mailto:${hero.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: hero.phone,
    href: `tel:${hero.phone}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hanspetercastellar",
    href: hero.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "hancel1512",
    href: hero.github,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: hero.location,
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-cyan-400 font-mono text-sm">// 05.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
            Contacto
          </h2>
          <div className="w-12 h-0.5 bg-cyan-400 mt-3" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-10 max-w-xl"
        >
          ¿Tienes un proyecto en mente o quieres conversar sobre arquitectura de software? Estoy disponible para nuevas oportunidades y colaboraciones.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
                  <Icon size={16} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-200 truncate">{item.value}</p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-xl bg-white/3 border border-white/8 hover:border-cyan-400/30 transition-all duration-200"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
