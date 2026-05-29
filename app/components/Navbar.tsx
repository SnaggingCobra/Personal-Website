"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-6 pointer-events-none">
      <nav className="w-full max-w-4xl px-8 py-4 glass-panel-light backdrop-blur-3xl rounded-full border border-white/20 shadow-2xl pointer-events-auto">
        <div className="flex items-center justify-between gap-12">
          <a href="#" className="text-white font-bold text-lg tracking-wide shrink-0">
            Prajwol Gynawali
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#certificates" className="hover:text-white transition">Certificates</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="mailto:gyawali.prajwol65@gmail.com" className="rounded-full bg-indigo-500/20 border border-indigo-500/50 px-5 py-2.5 text-indigo-100 hover:bg-indigo-500 hover:text-white transition shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]">
              Email
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
