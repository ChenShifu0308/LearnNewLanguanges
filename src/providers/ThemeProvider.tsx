import { ThemeProvider, useTheme } from "next-themes";

import CssBaseline from "@mui/material/CssBaseline";
import MuiThemeProvider from "./MuiThemeProvider";

export default function ThemeProviders({ children }: any) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <MuiThemeProvider>
        <CssBaseline />
        <div className=" text-red-500 dark:text-blue-200 dark:bg-[#424242] min-h-screen select-none transition-colors duration-1000">
          {children}
        </div>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}
