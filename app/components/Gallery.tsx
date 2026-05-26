import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white">Gallery</h2>
            <p className="text-slate-400 max-w-2xl mt-2">A visual preview of the web direction and polish I’m building for your brand.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 shadow-xl shadow-indigo-950/20">
            <Image src="/images/profile.jpeg" alt="Prajwol Gyawali profile" fill className="object-cover" />
          </div>
          <div className="rounded-3xl glass-panel p-6 hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Brand direction</h3>
            <p className="text-slate-300">This space will showcase the interface designs, dashboard previews, and animation concepts for your projects.</p>
          </div>
          <div className="rounded-3xl glass-panel p-6 text-center text-slate-300 hover:-translate-y-1 transition duration-300">
            <div className="text-sm uppercase tracking-[0.3em] text-indigo-300 mb-3">Design direction</div>
            <p className="text-sm leading-7">A modern, polished, dark interface with strong typography, subtle motion, and a premium feel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
