export type DurationType = (typeof DURATION)[keyof typeof DURATION];
export type DelayType = (typeof DELAY)[keyof typeof DELAY];
export type EaseType = (typeof EASE)[keyof typeof EASE];
export type StaggerType = (typeof STAGGER)[keyof typeof STAGGER];
export type BlurType = (typeof BLUR)[keyof typeof BLUR];

export const BLUR = {
  none: 0,
  light: 4,
  normal: 8,
  strong: 16,
} as const;

export type TransitionOptions = {
  duration?: DurationType;
  delay?: DelayType;
  ease?: EaseType;
  staggerChildren?: StaggerType;
  delayChildren?: number;
};

export type StateOptions = {
  from?: string;
  to?: string;
};

export type TransformOptions = StateOptions & {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  transition?: TransitionOptions;
};

export const EASE = {
  in: "easeIn",
  out: "easeOut",
  inOut: "easeInOut",
  linear: "linear",

  smooth: [0.22, 1, 0.36, 1],
  entrance: [0.43, -0.14, 0.69, 0.92],
} as const;

export const DURATION = {
  fast: 0.1,
  normal: 0.2,
  slow: 0.4,
  slower: 0.6,
  ultraSlower: 1.2,
} as const;

export const STAGGER = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
} as const;

export const DELAY = {
  none: 0,
  short: 0.2,
  medium: 0.4,
  long: 0.6,
} as const;
