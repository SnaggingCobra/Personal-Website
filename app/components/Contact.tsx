"use client";

import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thanks — message simulated. I'll wire a backend next.");
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] glass-panel p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Let’s build it.</h2>
          <p className="text-slate-400 mb-6">Reach out to discuss your next student-focused web experience or internship collaboration.</p>
          <div className="space-y-4 text-slate-300 text-sm">
            <p><span className="font-semibold text-white">Email:</span> gyawali.prajwol65@gmail.com</p>
            <p><span className="font-semibold text-white">Location:</span> Nepal</p>
            <p><span className="font-semibold text-white">Availability:</span> Internship / freelance / collaboration</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 rounded-[2rem] glass-panel p-8">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="p-4 rounded-3xl bg-slate-950/50 text-slate-100 border border-white/10 focus:border-indigo-500 outline-none" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="p-4 rounded-3xl bg-slate-950/50 text-slate-100 border border-white/10 focus:border-indigo-500 outline-none" />
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What would you like to build?" rows={6} className="p-4 rounded-3xl bg-slate-950/50 text-slate-100 border border-white/10 focus:border-indigo-500 outline-none" />
          <button type="submit" className="w-full rounded-3xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">Send message</button>
        </form>
      </div>
    </section>
  );
}
