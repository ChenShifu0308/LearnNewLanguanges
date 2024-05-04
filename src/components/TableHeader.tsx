"use client";
import { useLanguageOption } from "@/hooks/useLanguageOption";
import Icon from "@mui/material/Icon";
import { useTranslations } from "next-intl";
import React from "react";

/* The header has 2 column at first: The Native language, 
and a "+" button to add more target language.
When a user select a new target language, the column increase.*/
export default function TableHeader() {
  const { learningLanguages, setLearningLanguages } = useLanguageOption();
  const t = useTranslations();

  return (
    <>
      {/* <TableHeaderItem className="left-0" >{t("native_language")}</TableHeaderItem> */}
      <th className="sticky top-0 left-0 z-20 bg-neutral-50 dark:bg-neutral-700 text-sm md:text-lg">
        {t("native_language")}
      </th>

      {learningLanguages.map((language, index) => (
        <TableHeaderItem key={index}>{t(language)}</TableHeaderItem>
      ))}

      {/* + button */}
      <TableHeaderItem>
        <Icon style={{ fontSize: 35 }}>add_circle</Icon>
      </TableHeaderItem>
    </>
  );
}

function TableHeaderItem({ children }: any) {
  return (
    <th className="sticky top-0 z-10 bg-neutral-50 dark:bg-neutral-700 text-sm md:text-lg w-36 md:w-44 lg:w-60">
      {children}
    </th>
  );
}
