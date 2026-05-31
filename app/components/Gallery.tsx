"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Camera, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/gallary/IMG-20251005-WA0037-01.jpeg", alt: "Prajwol - Memory 1", caption: "A captured moment" },
  { id: 2, src: "/images/gallary/IMG-20260302-WA0015-01.jpeg", alt: "Prajwol - Memory 2", caption: "Through the lens" },
  { id: 3, src: "/images/gallary/IMG-20260302-WA0020-02.jpeg", alt: "Prajwol - Memory 3", caption: "Life in frames" },
  { id: 4, src: "/images/gallary/IMG-20260302-WA0021-01.jpeg", alt: "Prajwol - Memory 4", caption: "Stories untold" },
  { id: 5, src: "/images/gallary/IMG_20240720_161515.jpg", alt: "Prajwol - Adventure 1", caption: "Exploring horizons" },
  { id: 6, src: "/images/gallary/IMG_20240720_161621.jpg", alt: "Prajwol - Adventure 2", caption: "Golden hour" },
  { id: 7, src: "/images/gallary/IMG_20240720_193334.jpg", alt: "Prajwol - Adventure 3", caption: "Nature's palette" },
  { id: 8, src: "/images/gallary/IMG_20240721_175520.jpg", alt: "Prajwol - Adventure 4", caption: "Moments that last" },
  { id: 9, src: "/images/gallary/IMG_20251022_105645.jpg", alt: "Prajwol - 2025 1", caption: "New beginnings" },
  { id: 10, src: "/images/gallary/IMG_20251107_080921.jpg", alt: "Prajwol - 2025 2", caption: "Early morning light" },
  { id: 11, src: "/images/gallary/IMG_20251127_070559-01.jpeg", alt: "Prajwol - 2025 3", caption: "Serenity" },
  { id: 12, src: "/images/gallary/IMG_20260302_110230.jpg", alt: "Prajwol - 2026 1", caption: "The journey continues" },
  { id: 13, src: "/images/gallary/IMG_20260303_111429.jpg", alt: "Prajwol - 2026 2", caption: "New chapter" },
  { id: 14, src: "/images/gallary/IMG_20260510_064331.jpg", alt: "Prajwol - 2026 3", caption: "Dawn perspective" },
  { id: 15, src: "/images/gallary/Screenshot_2026-03-02-18-50-39-286_com.adobe.lrmobile.jpg", alt: "Lightroom Edit 1", caption: "Edited in Lightroom" },
  { id: 16, src: "/images/gallary/Screenshot_2026-03-02-19-14-09-063_com.adobe.lrmobile.jpg", alt: "Lightroom Edit 2", caption: "Colour graded" },
  { id: 17, src: "/images/gallary/Screenshot_2026-03-03-10-54-28-046_com.miui.gallery.jpg", alt: "Gallery 17", caption: "Perfect frame" },
];

const INITIAL_SHOW = 3;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = showAll ? galleryImages : galleryImages.slice(0, INITIAL_SHOW);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  const currentImg = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <Camera className="w-4 h-4 text-violet-400" />
            <span className="text-violet-300 text-sm font-medium tracking-wider uppercase">Gallery</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-purple-300 to-pink-400 leading-tight">
            Life Through My Lens
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Photography is my way of freezing beautiful moments in time. 
            From serene landscapes to candid adventures — every shot tells a story.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <AnimatePresence>
            {visible.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-xl"
                onClick={() => openLightbox(img.id - 1)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                  <motion.div
                    initial={false}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400"
                  >
                    <p className="text-white font-semibold text-sm">{img.caption}</p>
                    <p className="text-white/50 text-xs mt-1 flex items-center gap-1">
                      <Camera className="w-3 h-3" /> Click to view
                    </p>
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Camera className="w-3.5 h-3.5 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Less */}
        {galleryImages.length > INITIAL_SHOW && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mt-12 gap-4"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 border border-violet-500/30 text-white font-semibold text-sm hover:from-violet-500/30 hover:to-pink-500/30 hover:border-violet-400/60 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] cursor-none"
            >
              <span>{showAll ? "Show Less" : `Show All ${galleryImages.length} Photos`}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
            <p className="text-slate-500 text-sm">
              Showing {visible.length} of {galleryImages.length} photos
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition z-10 cursor-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10 cursor-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={currentImg.id}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              className="relative max-w-5xl w-full mx-16 md:mx-24"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={currentImg.src}
                  alt={currentImg.alt}
                  className="w-full h-auto max-h-[80vh] object-contain bg-slate-950"
                />
              </div>
              <div className="mt-5 text-center">
                <p className="text-white font-semibold text-lg">{currentImg.caption}</p>
                <p className="text-white/40 text-sm mt-1">
                  {(lightboxIndex ?? 0) + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Nav Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10 cursor-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
