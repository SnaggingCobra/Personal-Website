import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 lg:px-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-slate-400 text-sm">
        <div>© {new Date().getFullYear()} Prajwol Gynawali</div>
        <div className="flex flex-wrap gap-4 items-center">
          <a href="mailto:contact@prajwolgynawali.com.np" className="hover:text-white transition">contact@prajwolgynawali.com.np</a>
          <a href="#contact" className="underline text-indigo-300 hover:text-indigo-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}
