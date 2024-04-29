"use client";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { useEffect } from "react";

export default function Home() {
  const t = useTranslations();
  return <div>{t("Index.title")}</div>;
}
