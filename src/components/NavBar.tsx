"use client";
import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import { Icon } from "@mui/material";
import { useTheme } from "next-themes";
import { common } from "@mui/material/colors";
import NativeLanguageSelect from "./NativeLanguageSelect";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const { resolvedTheme } = useTheme();
  const t = useTranslations();

  return (
    <div className="flex justify-between items-center h-20 w-full mx-auto px-3">
      {/* Left */}
      <div className="flex gap-3 items-center">
        <Icon
          sx={
            resolvedTheme == "dark"
              ? { color: common.white }
              : { color: common.black }
          }
          style={{ fontSize: 40 }}
        >
          language
        </Icon>
        <div className="flex flex-col">
          <div className="text-xl">LEARN</div>
          <div className="text-xs">LANGUAGES</div>
        </div>
      </div>

      {/* Middle */}
      <div className="text-lg font-serif font-thin hidden md:block">
        {t("slogan")}
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <NativeLanguageSelect />
        <DarkModeSwitch />
      </div>
    </div>
  );
}
