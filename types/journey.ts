export interface JourneyQuote {
  text: string;
  author: string;
}

export interface JourneyAchievement {
  title: string;
  level: string;
  equivalent: string;
  year: string;
}

export interface JourneyChapter {
  slug: string;
  number: number;
  year: string;
  title: string;
  teaser: string;

  theme: string;

  image?: string;

  quote?: JourneyQuote;

  highlights?: string[];

  achievement?: JourneyAchievement;

  body: string[];
}

export interface JourneyConclusion {
  title: string;
  body: string[];
}

export interface JourneyData {
  chapters: JourneyChapter[];
  conclusion: JourneyConclusion;
}
