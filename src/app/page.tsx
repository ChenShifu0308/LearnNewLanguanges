"use client";
import { useRouter } from "next/router";
import DarkModeSwitch from "../components/DarkModeSwitch";
import { useLocale } from "@/hooks/useLocale";
import { useEffect } from "react";

export default function Home() {
  const { locale } = useLocale();

  useEffect(() => {
    const browserLang = navigator.language;
    console.log("Browser Language:" + browserLang);
  }, [locale]);

  return <div></div>;
}
