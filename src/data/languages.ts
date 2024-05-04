import { SentenceItem } from "@/types/types";
import { enSentences } from "./en";
import { zhSentences } from "./zh";

export enum Language {
  English = "en",
  Chinese = "zh",
  Spanish = "es",
  French = "fr",
  German = "de",
  Italian = "it",
  Japanese = "ja",
  Korean = "ko",
  Portuguese = "pt",
  Russian = "ru",
  Arabic = "ar",
}

export const selectOptions = [
  { value: Language.English, label: "English" },
  { value: Language.Chinese, label: "Chinese" },
  { value: Language.Spanish, label: "Spanish" },
  { value: Language.French, label: "French" },
  { value: Language.German, label: "German" },
  { value: Language.Italian, label: "Italian" },
  { value: Language.Japanese, label: "Japanese" },
  { value: Language.Korean, label: "Korean" },
  { value: Language.Portuguese, label: "Portuguese" },
  { value: Language.Russian, label: "Russian" },
  { value: Language.Arabic, label: "Arabic" },
];

export function getSentences(language: string): SentenceItem[] {
  switch (language) {
    case "en":
      return enSentences;
    case "zh":
      return zhSentences;
    default:
      return [];
  }
}

/* TODO: move all configuration to one class/interface */
export function getFlag(language: string): string {
  switch (language) {
    case "en":
      return "🇺🇸";
    case "zh":
      return "🇨🇳";
    case "es":
      return "🇪🇸";
    case "fr":
      return "🇫🇷";
    case "de":
      return "🇩🇪";
    case "it":
      return "🇮🇹";
    case "ja":
      return "🇯🇵";
    case "ko":
      return "🇰🇷";
    case "pt":
      return "🇵🇹";
    case "ru":
      return "🇷🇺";
    case "ar":
      return "🇸🇦";
    default:
      return "🌍";
  }
}
