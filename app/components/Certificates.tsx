"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Award } from "lucide-react";

// Mock data - replace with actual certificates
const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "2023",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    issuer: "Coursera",
    date: "2022",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: 4,
    title: "UI/UX Design Specialization",
    issuer: "Google",
    date: "2022",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export default function Certificates() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 inline-flex items-center gap-4">
              <Award className="w-10 h-10 text-indigo-400" />
              Certifications
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Professional credentials and ongoing education that keep my skills sharp and up-to-date with industry standards.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group rounded-3xl overflow-hidden glass-panel border border-slate-700/50 aspect-[16/9] cursor-none"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${cert.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div
                  initial={false}
                  animate={{ y: hoveredId === cert.id ? -10 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-indigo-200/80 font-medium">{cert.issuer}</p>
                    </div>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm text-slate-300 border border-white/10">
                      {cert.date}
                    </span>
                  </div>

                  {/* Reveal Link Button on Hover */}
                  <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-300 ease-in-out mt-4">
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-colors cursor-none"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Credential <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
