"use client";

import { useEffect, useRef } from "react";

export function ArticleProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          distance > 0 ? Math.min(1, window.scrollY / distance) : 0;
        if (bar.current) {
          bar.current.style.width = `${progress * 100}%`;
          bar.current.classList.toggle("has-progress", progress > 0.01);
        }
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="article-progress-track" aria-hidden="true">
      <div ref={bar} className="article-progress" />
    </div>
  );
}
