import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-white">About</h2>
        <p className="text-slate-300 mb-8 leading-relaxed text-lg">
          I am a 17-year-old BSc CSIT undergraduate student originally from Bardiya, Nepal. 
          Beyond coding, I am an artist at heart with a strong passion for <span className="text-indigo-300">Photography</span>, 
          <span className="text-indigo-300"> Music</span>, and <span className="text-indigo-300">Travelling</span>. 
          I love blending my creative side with technical skills to build intelligent, beautiful web experiences.
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] glass-panel p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li>
                <span className="block text-xs uppercase tracking-widest text-indigo-400 mb-1">Undergraduate</span>
                BSc CSIT (Current)
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-indigo-400 mb-1">High School (+2)</span>
                Adarsh Madhyamik Vidhyalaya, Nepalgunj
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-indigo-400 mb-1">School</span>
                Shree Bhagawati Sanskrit Tatha Sadharan Ma.Bi., Bardiya
              </li>
            </ul>
          </div>
          
          <div className="rounded-[2rem] glass-panel p-8 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Background</h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li>
                <span className="block text-xs uppercase tracking-widest text-indigo-400 mb-1">Home Town</span>
                Bardiya, Nepal
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-indigo-400 mb-1">Languages</span>
                Nepali, English, Hindi
              </li>
              <li>
                <span className="block text-xs uppercase tracking-widest text-indigo-400 mb-1">Interests</span>
                Photography, Listening to music, Learning, Travelling
              </li>
            </ul>
          </div>
          
          <div className="rounded-[2rem] glass-panel p-8 flex flex-col justify-center items-center text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,102,241,0.15)] hover:border-indigo-500/30 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-slate-200 font-medium italic relative z-10 leading-relaxed">
              "No matter how many fish 🐟 in the sea 🌊... <br/><br/>
              <span className="text-indigo-300">It would be empty 😔 without me 💫.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
