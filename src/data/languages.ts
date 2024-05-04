import { SentenceItem } from "@/types/types";
import { enSentences } from "./en";
import { zhSentences } from "./zh";
import { esSentences } from "./es";
import { frSentences } from "./fr";
import { deSentences } from "./de";
import { it } from "node:test";
import { jaSentences } from "./ja";
import { itSentences } from "./it";
import { koSentences } from "./ko";
import { ptSentences } from "./pt";
import { ruSentences } from "./ru";
import { arSentences } from "./ar";

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
  { value: Language.Chinese, label: "中文" },
  { value: Language.Spanish, label: "Español" },
  { value: Language.French, label: "Français" },
  { value: Language.German, label: "Deutsch" },
  { value: Language.Italian, label: "Italiano" },
  { value: Language.Japanese, label: "日本語" },
  { value: Language.Korean, label: "한국어" },
  { value: Language.Portuguese, label: "Português" },
  { value: Language.Russian, label: "Русский" },
  { value: Language.Arabic, label: "عربي" },
];

export function getSentences(language: string): SentenceItem[] {
  switch (language) {
    case "en":
      return enSentences;
    case "zh":
      return zhSentences;
    case "es":
      return esSentences;
    case "fr":
      return frSentences;
    case "de":
      return deSentences;
    case "it":
      return itSentences;
    case "ja":
      return jaSentences;
    case "ko":
      return koSentences;
    case "pt":
      return ptSentences;
    case "ru":
      return ruSentences;
    case "ar":
      return arSentences;
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
