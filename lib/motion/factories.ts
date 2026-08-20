import type { TargetAndTransition } from "framer-motion";
import type { TransitionOptions } from "./transitions";
import { DELAY, DURATION, EASE } from "./transitions";

type SlideOptions = TransitionOptions & {
  axis?: "x" | "y";
  distance?: number;
};

type VariantOptions = {
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
  transition?: ReturnType<typeof createTransition>;
};

type StaggerOptions = TransitionOptions & {
  delayChildren?: number;
};

type FadeOptions = TransitionOptions;

export const createStagger = ({
  duration = DURATION.normal,
  delay = DELAY.none,
  ease = EASE.smooth,
  staggerChildren,
  delayChildren = 0,
}: StaggerOptions = {}) =>
  createVariant({
    hidden: {},

    visible: {},

    transition: createTransition({
      duration,
      delay,
      ease,
      staggerChildren,
      delayChildren,
    }),
  });

export const createVariant = ({
  hidden,
  visible,
  transition,
}: VariantOptions) => ({
  hidden,
  visible: {
    ...visible,
    transition,
  },
});

export const createSlide = ({
  axis = "y",
  distance = 30,
  duration = DURATION.normal,
  delay = DELAY.none,
  ease = EASE.smooth,
}: SlideOptions = {}) =>
  createVariant({
    hidden: {
      opacity: 0,
      [axis]: distance,
    },

    visible: {
      opacity: 1,
      [axis]: 0,
    },

    transition: createTransition({
      duration,
      delay,
      ease,
    }),
  });

export const createTransition = ({
  duration = DURATION.normal,
  delay = DELAY.none,
  ease = EASE.smooth,
  staggerChildren,
  delayChildren,
}: TransitionOptions = {}) => ({
  duration,
  delay,
  ease,
  ...(staggerChildren !== undefined && { staggerChildren }),
  ...(delayChildren !== undefined && { delayChildren }),
});

export const createFade = ({
  duration = DURATION.normal,
  delay = DELAY.none,
  ease = EASE.smooth,
}: FadeOptions = {}) =>
  createVariant({
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },

    transition: createTransition({
      duration,
      delay,
      ease,
    }),
  });
