// types/banner.ts (dans l'app portfolio)

export type BannerColor = "primary" | "secondary" | "accent" | "destructive";

export type BannerForegroundColor =
  | "primary-foreground"
  | "secondary-foreground"
  | "accent-foreground"
  | "destructive-foreground";

export type BannerButton = {
  text: string;
  href: string;
};

export type Banner = {
  enabled: boolean;
  title: string;
  message: string;
  showCountdown: boolean;
  startDate: string | null; // ⚠️ string, pas Date — voir plus bas
  endDate: string | null;
  button: BannerButton;
  showButton: boolean;
  backgroundColor: BannerColor;
  textColor: BannerForegroundColor;
  closable: boolean;
  version: number;
};
