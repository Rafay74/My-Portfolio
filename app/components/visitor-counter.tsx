"use client";

import { useEffect, useRef, useState } from "react";

export default function VisitorCounter() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scrollRoot = document.getElementById("page-scroll");

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { root: scrollRoot, threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`text-sm text-neutral-500 transition-opacity duration-300 dark:text-neutral-400 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      You&apos;re the 10th visitor
    </p>
  );
}
