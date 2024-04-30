import { CssBaseline } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "next-themes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // primary: grey,
    // divider: grey[200],
    background: {
      default: grey[800],
      paper: grey[800],
    },
    text: {
      primary: grey[50],
      secondary: grey[50],
    },
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary: grey,
    // divider: grey[700],
    background: {
      default: grey[50],
      paper: grey[50],
    },
    text: {
      primary: grey[800],
      secondary: grey[800],
    },
  },
});
/* A wrapper for MUI ThemeProvider to be compatible with next-themes */
export default function MuiThemeProvider({ children }: any) {
  const { resolvedTheme } = useTheme();
  return (
    <ThemeProvider theme={resolvedTheme == "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
