import { Variants } from "framer-motion";

export const EASING_IN = [0.22, 1, 0.36, 1] as [number, number, number, number];
export const EASING_OUT = [0.4, 0, 1, 1] as [number, number, number, number];

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASING_IN,
    },
  },
};

export const fadeOnlyVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: EASING_IN,
    },
  },
};

export const staggerContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};
