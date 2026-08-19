"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";

export function TrilhaPerfume() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isReduced = mounted && shouldReduceMotion;

  return (
    <div className={`hidden md:block fixed left-4 lg:left-12 top-0 bottom-0 w-[2px] z-50 pointer-events-none ${isReduced ? 'opacity-0' : ''}`}>
      <svg className="w-full h-full" preserveAspectRatio="none">
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke="#C89A54"
          strokeWidth="2"
          style={{ pathLength: isReduced ? 1 : scrollYProgress }}
        />
      </svg>
    </div>
  );
}
