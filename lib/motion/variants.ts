import { createFade, createSlide, createStagger } from "./factories";
import { DELAY, DURATION, EASE, STAGGER } from "./transitions";

export const heroBadge = createSlide({
  distance: 4,
  duration: DURATION.ultraSlower,
});

export const heroTitle = createSlide({
  distance: 10,
  duration: DURATION.ultraSlower,
});

export const heroDescription = createSlide({
  distance: 10,
  duration: DURATION.ultraSlower,
});

export const heroButtons = createSlide({
  distance: 10,
  duration: DURATION.ultraSlower,
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
