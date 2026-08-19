"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariant, fadeOnlyVariant, staggerContainerVariant, EASING_IN } from "./variants";

export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const variant = (mounted && shouldReduceMotion) ? fadeOnlyVariant : fadeUpVariant;

  return (
    <motion.div
      className={className}
      variants={{
        ...variant,
        visible: {
          ...variant.visible,
          transition: {
            //@ts-ignore
            ...variant.visible.transition,
            delay
          }
        }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={staggerContainerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const variant = (mounted && shouldReduceMotion) ? fadeOnlyVariant : fadeUpVariant;

  return (
    <motion.div variants={variant} className={className}>
      {children}
    </motion.div>
  );
}
