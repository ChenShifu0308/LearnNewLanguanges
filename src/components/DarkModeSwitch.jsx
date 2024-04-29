"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log("currentTheme:" + currentTheme);
  useEffect(() => setMounted(true), []);

  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {mounted &&
        (currentTheme === "dark" ? (
          <LightModeIcon
            onClick={() => setTheme("light")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <DarkModeIcon
            onClick={() => setTheme("dark")}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
}
