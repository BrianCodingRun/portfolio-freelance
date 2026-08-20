export type FormulaPricing = "pack" | "maintenance" | "app" | "tjm" | "refonte";
export type FeaturePricing = {
  id: string;
  name: string;
};

export type Pricing = {
  _id: string;
  title: string;
  price: number;
  onQuote?: boolean;
  delay?: string;
  pages?: string;
  description: string;
  features: FeaturePricing[];
  seo: boolean;
  advancedSeo: boolean;
  trainingIncluded: boolean;
  supportIncluded: boolean;
  categorie: FormulaPricing;
  cta: string;
  icon: "Rocket" | "Star" | "Crown" | "Zap" | "Shield" | "Diamond";
  popular: boolean;
  active: boolean;
  order: number;
  discount?: number | null;
  promoLabel?: string | null; // label ex: "-20%" ou "Offre de lancement"
  promoEndDate?: string | null; // date de fin ISO optionnelle
  createdAt: string;
  updatedAt: string;
};
