import { create } from "zustand";

export type LanguageOption = {
  nativeLanguage: string | null;
  setNativeLanguage: (nativeLanguage: string) => void;
  learningLanguages: string[];
  setLearningLanguages: (learningLanguages: string[]) => void;
};

export const useLanguageOption = create<LanguageOption>((set) => ({
  nativeLanguage: null,
  setNativeLanguage: (nativeLanguage) => set({ nativeLanguage }),
  learningLanguages: [],
  setLearningLanguages: (learningLanguages) => set({ learningLanguages }),
}));
