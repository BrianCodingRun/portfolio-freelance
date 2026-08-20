export type FrameworkCategory =
  | "frontend"
  | "backend"
  | "infra"
  | "cms"
  | "animation";

export type Framework = {
  _id: string;
  name: string;
  icon: string;
  urlDoc: string;
  category: FrameworkCategory;
};
