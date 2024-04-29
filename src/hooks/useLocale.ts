import { create } from "zustand";

type CurrentLocale = {
  locale: string;
  setLocale: (locale: string) => void;
};

export const useLocale = create<CurrentLocale>((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale }),
}));
