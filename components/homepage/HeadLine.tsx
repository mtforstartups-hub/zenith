"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const HERO_WORDS = [
  "Build",
  "Curate",
  "Connect with",
  "Invest in",
  "Work with",
  "Follow",
];

// Identify Client Side codes Like this one and create a Separate component if possible

export default function HeadLine() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setWordIndex((i) => (i + 1) % HERO_WORDS.length),
      2200,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <h1 className="text-4xl md:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-tight text-foreground">
      {/* Animated word — line 1 */}
      <span className="block relative h-[1.15em] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.32, 0, 0.67, 0] }}
            className="block text-primary"
          >
            {HERO_WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
      {/* Static second line */}
      <span className="block">Top Startups</span>
    </h1>
  );
}
