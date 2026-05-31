"use client";

import dynamic from "next/dynamic";

const ThreeDSection = dynamic(() => import("./ThreeDSection"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-indigo-400/40 border-t-indigo-400 rounded-full animate-spin" />
    </div>
  ),
});

export default function ThreeDSectionClient() {
  return <ThreeDSection />;
}
