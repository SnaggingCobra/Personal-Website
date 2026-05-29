"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Database, Palette, Terminal, Globe, Cpu, Layers, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6 mb-2 text-indigo-400" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 mb-2 text-emerald-400" />,
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"]
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-6 h-6 mb-2 text-cyan-400" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "AWS", "Vercel"]
  },
  {
    title: "Tools & Others",
    icon: <Terminal className="w-6 h-6 mb-2 text-fuchsia-400" />,
    skills: ["Git", "Docker", "Figma", "Linux", "Agile"]
  }
];

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 inline-block">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the tools, languages, and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="glass-panel p-6 rounded-2xl relative group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]"
            >
              {/* Animated background gradient on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <div className="p-3 bg-slate-800/50 rounded-xl inline-block mb-4 border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-200 mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-800/80 text-slate-300 border border-slate-700/50 rounded-full group-hover:border-indigo-500/30 group-hover:text-indigo-200 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
