"use client";
import { useLanguageOption } from "@/hooks/useLanguageOption";
import { Language } from "@mui/icons-material";
import Icon from "@mui/material/Icon";
import { useTranslations } from "next-intl";
import React from "react";
import LanguageDialog from "./LanguageDialog";

/* The header has 2 column at first: The Native language, 
and a "+" button to add more target language.
When a user select a new target language, the column increase.*/
export default function TableHeader() {
  const { learningLanguages, setLearningLanguages } = useLanguageOption();
  const t = useTranslations();
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <>
      {/* <TableHeaderItem className="left-0">
        {t("native_language")}
      </TableHeaderItem> */}
      <th className="sticky top-0 left-0 z-20 bg-neutral-50 dark:bg-[#424242] text-sm md:text-lg">
        {t("native_language")}
      </th>

      {learningLanguages.map((language, index) => (
        <TableHeaderItem key={index}>
          <div className="flex items-center ">
            <div className="self-center grow">{t(language)}</div>
            <div
              className="hover:scale-125  flex justify-center items-center"
              onClick={() => {
                setLearningLanguages(
                  learningLanguages.filter((item) => item !== language)
                );
              }}
            >
              <Icon style={{ fontSize: 15 }}>close</Icon>
            </div>
          </div>
        </TableHeaderItem>
      ))}

      {/* + button */}
      <TableHeaderItem>
        <div
          className="hover:scale-105 flex justify-center items-center"
          onClick={() => {
            /* Show Popup Modal to select a target languges */
            setDialogOpen(true);
          }}
        >
          <Icon style={{ fontSize: 25 }}>add_circle_outlined</Icon>
        </div>
      </TableHeaderItem>

      <LanguageDialog open={dialogOpen} setOpen={setDialogOpen} />
    </>
  );
}

function TableHeaderItem({ children }: any) {
  return (
    <th className="sticky top-0 z-10 bg-neutral-50 dark:bg-[#424242] text-sm md:text-lg w-36 md:w-44 lg:w-60">
      {children}
    </th>
  );
}
