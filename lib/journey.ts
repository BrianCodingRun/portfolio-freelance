import journeyData from "@/app/data/journey.json";
import type { JourneyChapter, JourneyData } from "@/types/journey";

const data = journeyData as JourneyData;

export function getAllChapters(): JourneyChapter[] {
  return data.chapters;
}

export function getConclusion() {
  return data.conclusion;
}

export function getChapterBySlug(slug: string): JourneyChapter | undefined {
  return data.chapters.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(slug: string): {
  previous: JourneyChapter | null;
  next: JourneyChapter | null;
} {
  const index = data.chapters.findIndex((chapter) => chapter.slug === slug);

  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? data.chapters[index - 1] : null,
    next: index < data.chapters.length - 1 ? data.chapters[index + 1] : null,
  };
}

export function getAllChapterSlugs(): string[] {
  return data.chapters.map((chapter) => chapter.slug);
}
