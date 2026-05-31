"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Award, ChevronDown, ChevronUp, ZoomIn, X } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "CS50: Introduction to Programming",
    issuer: "Harvard University",
    date: "2025",
    image: "/images/certificate/CS50.png",
    tag: "Computer Science",
  },
  {
    id: 2,
    title: "Python for Data Science",
    issuer: "Analytics Vidhya",
    date: "2024",
    image: "/images/certificate/Python Analytical Vidhya.jpg",
    tag: "Python",
  },
  {
    id: 3,
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image: "/images/certificate/Python Essential Cisco.jpg",
    tag: "Python",
  },
  {
    id: 4,
    title: "Python Essential Training",
    issuer: "Professional Certification",
    date: "2024",
    image: "/images/certificate/Python Essential .jpg",
    tag: "Python",
  },
  {
    id: 5,
    title: "Data Science Fundamentals",
    issuer: "Data Science Institute",
    date: "2024",
    image: "/images/certificate/data science.jpg",
    tag: "Data Science",
  },
  {
    id: 6,
    title: "Machine Learning",
    issuer: "ML Academy",
    date: "2024",
    image: "/images/certificate/machine learning.jpg",
    tag: "AI / ML",
  },
  {
    id: 7,
    title: "Oracle Cloud Badge",
    issuer: "Oracle",
    date: "2024",
    image: "/images/certificate/oracal badge.jpg",
    tag: "Cloud",
  },
  {
    id: 8,
    title: "Oracle Cloud Certificate",
    issuer: "Oracle Corporation",
    date: "2024",
    image: "/images/certificate/oracle certificate.jpg",
    tag: "Cloud",
  },
  {
    id: 9,
    title: "CS50P: Python Programming",
    issuer: "Harvard University",
    date: "2025",
    image: "/images/certificate/CS50.jpg",
    tag: "Computer Science",
  },
];

const INITIAL_SHOW = 3;

const tagColors: Record<string, string> = {
  "Computer Science": "from-indigo-500 to-blue-500",
  "Python": "from-yellow-500 to-orange-500",
  "Data Science": "from-teal-500 to-cyan-500",
  "AI / ML": "from-purple-500 to-pink-500",
  "Cloud": "from-red-500 to-orange-500",
};

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const visible = showAll ? certificates : certificates.slice(0, INITIAL_SHOW);

  const openLightbox = (img: string, title: string) => {
    setLightbox(img);
    setLightboxTitle(title);
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-pink-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-blue-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Award className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 text-sm font-medium tracking-wider uppercase">Certifications</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-400 leading-tight">
            My Credentials
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Professional credentials and ongoing education that keep my skills sharp and up-to-date with industry standards.
            Each certificate represents hours of dedication and learning.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <AnimatePresence>
            {visible.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden glass-panel border border-slate-700/40 cursor-pointer"
                onClick={() => openLightbox(cert.image, cert.title)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>

                  {/* Tag Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${tagColors[cert.tag] ?? "from-slate-500 to-slate-600"} shadow-lg`}>
                      {cert.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors duration-200 leading-snug truncate">
                        {cert.title}
                      </h3>
                      <p className="text-indigo-200/70 text-sm mt-1 font-medium">{cert.issuer}</p>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 bg-white/5 backdrop-blur-md rounded-full text-xs text-slate-400 border border-white/10">
                      {cert.date}
                    </span>
                  </div>

                  {/* Bottom shine bar */}
                  <div className={`mt-4 h-[2px] w-0 group-hover:w-full rounded-full bg-gradient-to-r ${tagColors[cert.tag] ?? "from-indigo-500 to-purple-500"} transition-all duration-500`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Less Button */}
        {certificates.length > INITIAL_SHOW && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-white font-semibold text-sm hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-400/60 transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] cursor-none"
            >
              <span className="relative z-10">
                {showAll
                  ? `Show Less`
                  : `Show All ${certificates.length} Certificates`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 transition-transform duration-300" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              )}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </motion.div>
        )}

        {/* Count indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-4"
        >
          Showing {visible.length} of {certificates.length} certificates
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={lightbox}
                  alt={lightboxTitle}
                  className="w-full h-auto max-h-[80vh] object-contain bg-slate-950"
                />
              </div>
              <p className="text-center text-white/80 mt-4 font-medium text-lg">{lightboxTitle}</p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition cursor-none"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
