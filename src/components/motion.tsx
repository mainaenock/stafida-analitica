"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("awaiting-reveal");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12 });

    const elements = document.querySelectorAll("[data-reveal]");
    for (const element of elements) {
      if (element.getBoundingClientRect().top <= window.innerHeight) continue;
      element.classList.add("awaiting-reveal");
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      for (const element of elements) element.classList.remove("awaiting-reveal");
    };
  }, [pathname]);

  return null;
}
