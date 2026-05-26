import React from "react";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TiltCard className="glass-panel rounded-3xl p-6">
            <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/5 flex items-center justify-center">
              <span className="text-indigo-300/50 font-medium tracking-widest uppercase text-sm">Smart Expense Tracker</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold text-indigo-200 mb-4">
              Live project
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Smart Expense Tracker</h3>
            <p className="text-slate-300 mb-4">
              Developed a student-focused expense tracker that organizes spending,
              auto-categorizes costs, and delivers fast monthly budgeting insights.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <p><span className="font-semibold text-slate-200">Tech:</span> Next.js, React, TypeScript, Tailwind CSS</p>
              <p><span className="font-semibold text-slate-200">Impact:</span> Increased performance by 50% and made expense management intuitive for student users.</p>
            </div>
          </TiltCard>

          <TiltCard className="glass-panel rounded-3xl p-6 text-slate-300">
            <div className="mb-4 text-indigo-300 font-semibold uppercase text-xs tracking-[0.2em]">Coming soon</div>
            <h3 className="text-2xl font-semibold text-white mb-3">Project Two</h3>
            <p className="text-slate-400">I will add more project details here soon once the next case study is ready.</p>
          </TiltCard>

          <TiltCard className="glass-panel rounded-3xl p-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold text-indigo-200 mb-4">
              Coming soon
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">Project Three</h3>
            <p className="text-slate-400">More work is on the way — I’ll showcase another student-focused digital solution here soon.</p>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
