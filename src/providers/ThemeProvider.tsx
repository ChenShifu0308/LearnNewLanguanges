"use client";

import { ThemeProvider, useTheme } from "next-themes";

import CssBaseline from "@mui/material/CssBaseline";
import MuiThemeProvider from "./MuiThemeProvider";

export default function ThemeProviders({ children }: any) {
  const { theme, setTheme, systemTheme } = useTheme();
  console.log("ThemeProvider:" + theme);
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <MuiThemeProvider>
        <CssBaseline />
        <div className=" text-red-500 dark:text-blue-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-1000">
          {children}
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}
