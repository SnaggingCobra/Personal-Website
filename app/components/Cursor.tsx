"use client";

import React from "react";

export default function Cursor() {
  const dotRef = React.useRef<HTMLDivElement | null>(null);
  const outlineRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const onMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      outline.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onDown = () => outline.classList.add("cursor-active");
    const onUp = () => outline.classList.remove("cursor-active");

    const onLinkEnter = () => {
      dot.classList.add("cursor-hover");
      outline.classList.add("cursor-hover");
    };
    const onLinkLeave = () => {
      dot.classList.remove("cursor-hover");
      outline.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.querySelectorAll("a, button, input, textarea").forEach((el) => {
      el.addEventListener("mouseenter", onLinkEnter);
      el.addEventListener("mouseleave", onLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.querySelectorAll("a, button, input, textarea").forEach((el) => {
        el.removeEventListener("mouseenter", onLinkEnter);
        el.removeEventListener("mouseleave", onLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={outlineRef} className="cursor-outline pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block" />
      <div ref={dotRef} className="cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block" />
    </>
  );
}
