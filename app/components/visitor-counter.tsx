"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function ordinal(n: number): string {
  const j = n % 10;
  const k = n % 100;
  if (j === 1 && k !== 11) return `${n}st`;
  if (j === 2 && k !== 12) return `${n}nd`;
  if (j === 3 && k !== 13) return `${n}rd`;
  return `${n}th`;
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor")
      .then(async (res) => {
        const data = await res.json();
        if (typeof data.count === "number" && data.count > 0) {
          setCount(data.count);
        }
      })
      .catch((err) => console.error("Failed to fetch visitor count:", err));
  }, []);

  return (
    <AnimatePresence mode="wait">
      {count !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100/50 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>

          <p className="text-xs font-semibold tracking-tight text-neutral-600">
            You&apos;re the{" "}
            <span className="text-neutral-900">{ordinal(count)}</span> visitor
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
