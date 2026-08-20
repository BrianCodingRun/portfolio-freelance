import { STAGGER } from "./transitions";

export const mobileMenu = {
  closed: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: STAGGER.normal,
      staggerDirection: -1,
    },
  },

  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: STAGGER.normal,
      staggerDirection: 1,
    },
  },
};
