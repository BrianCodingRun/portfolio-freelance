import {
  createBlur,
  createFade,
  createSlide,
  createStagger,
} from "./factories";
import { BLUR, DELAY, DURATION, EASE, STAGGER } from "./transitions";

// Bloc entier (titre, paragraphe…)
export const blurIn = createBlur();

export const heroTitleBlur = createBlur({
  amount: BLUR.strong,
  axis: "y",
  distance: 4,
  duration: DURATION.slow,
});

// Mot par mot (même logique que ton wordVariant)
export const blurStagger = createStagger({ staggerChildren: STAGGER.normal });

export const wordBlurVariant = {
  hidden: {
    opacity: 0,
    filter: `blur(${BLUR.normal}px)`,
    y: 2,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.smooth,
    },
  },
};

export const heroBadge = createSlide({
  distance: 4,
  duration: DURATION.slow,
});

export const heroTitle = createSlide({
  distance: 10,
  duration: DURATION.slow,
});

export const heroDescription = createSlide({
  distance: 10,
  duration: DURATION.slow,
});

export const heroButtons = createSlide({
  distance: 10,
  duration: DURATION.slow,
});

export const heroStagger = createStagger({ staggerChildren: STAGGER.fast });

export const fade = createFade();

export const heroImage = createFade({
  duration: DURATION.slower,
});

export const heroButton = createFade();

export const heroTech = createFade();

export const slideUp = {
  closed: {
    y: 30,
    transition: {
      duration: DURATION.ultraSlower,
      ease: EASE.smooth,
    },
  },

  open: {
    y: 0,
    transition: {
      duration: DURATION.ultraSlower,
      ease: EASE.smooth,
      delay: DELAY.long,
    },
  },
};

export const slideUpSkew = {
  closed: {
    opacity: 0,
    y: 24,
    skewY: 8,
    transition: {
      ease: EASE.smooth,
      duration: DURATION.ultraSlower,
      opacity: {
        duration: DURATION.normal,
      },
    },
  },

  open: {
    opacity: 1,
    skewY: 0,
    y: 0,
    transition: {
      ease: EASE.smooth,
      duration: DURATION.ultraSlower,
      opacity: {
        duration: DURATION.normal,
      },
    },
  },
};

export const wordVariant = {
  hidden: {
    opacity: 0,
    y: 2,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
    },
  },
};

export const lineXVariant = {
  hidden: {
    scaleX: 0,
  },

  visible: {
    scaleX: 1,
    transition: {
      duration: DURATION.normal,
    },
  },
};
