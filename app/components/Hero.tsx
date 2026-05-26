"use client";

import Image from "next/image";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-lg bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-indigo-400/40 border-t-indigo-400 rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
	const ref = React.useRef<HTMLElement | null>(null);
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		if (!ref.current) return;
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) setVisible(true);
				});
			},
			{ threshold: 0.2 }
		);
		obs.observe(ref.current);
		return () => obs.disconnect();
	}, []);

	return (
		<section
			ref={ref}
			className={`relative overflow-hidden w-full text-white py-24 px-6 md:px-12 lg:px-24`}
		>
			<div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.22),_transparent_36%)]" />
			<div className="pointer-events-none absolute right-0 top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
			<div
				className={`max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center transition-all duration-700 ease-out transform ${
					visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
				}`}
			>
				<div>
					<p className="text-sm text-indigo-300 mb-2">Hello — I’m</p>
				<h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
					Prajwol Gynawali
				</h1>
				<p className="mt-4 text-lg text-indigo-200 max-w-xl">
					I am a 17-year-old undergraduate CS student majoring in BSc CSIT. I
					build intelligent web tools for students with clean design, fast
					performance, and user-friendly interfaces.
				</p>
				<div className="mt-5 grid gap-3 sm:grid-cols-3">
					<div className="rounded-3xl glass-panel-light p-4 text-sm text-slate-300">
						<span className="block text-xs uppercase tracking-[0.3em] text-indigo-300">Age</span>
						17 years old
					</div>
					<div className="rounded-3xl glass-panel-light p-4 text-sm text-slate-300">
						<span className="block text-xs uppercase tracking-[0.3em] text-indigo-300">Degree</span>
						BSc CSIT
					</div>
					<div className="rounded-3xl glass-panel-light p-4 text-sm text-slate-300">
						<span className="block text-xs uppercase tracking-[0.3em] text-indigo-300">Focus</span>
						Student-centric web products
					</div>
				</div>

				<div className="mt-8 flex flex-wrap gap-4 items-center">
					<a href="#contact" className="relative group inline-flex items-center justify-center rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.8)] hover:bg-indigo-400">
						Work with me
						<div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
					</a>
					<a href="mailto:gyawali.prajwol65@gmail.com" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm text-slate-100 transition hover:border-indigo-400 hover:text-white">
						Email me
					</a>
				</div>
				<div className="mt-6 flex flex-wrap gap-3 items-center">
						<a
							href="https://www.facebook.com/prajwol.gyawali"
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
							className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
								<path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.4c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H20l-1 3.9h-2.5v7A10 10 0 0022 12z" />
							</svg>
							Facebook
						</a>

						<a
							href="https://np.linkedin.com/in/prajwol-gynawali-6595093a0"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700/20 hover:bg-blue-700/30 rounded-md transition"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v8h-4v-7c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7V21H9z"/>
							</svg>
							LinkedIn
						</a>

						<a
							href="https://instagram.com/prajwol.gyawali"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
							className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition"
						>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
								<path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.3A4.7 4.7 0 106.3 13 4.7 4.7 0 0012 8.3zm6.5-3.6a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1zM12 10.5A1.5 1.5 0 1110.5 12 1.5 1.5 0 0112 10.5z"/>
							</svg>
							Instagram
						</a>
					</div>
				</div>

				<div className="order-first md:order-last flex justify-center md:justify-end">
					<div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2rem] glass-panel ring-1 ring-white/10 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
						<div className="absolute inset-0 opacity-95">
							<ThreeScene />
						</div>
						<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-6">
							<div className="relative mx-auto w-44 h-44 rounded-full border border-white/10 overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.6)]">
								<Image src="/images/profile.jpeg" alt="Prajwol Gynawali profile" fill className="object-cover scale-125 origin-top" />
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

