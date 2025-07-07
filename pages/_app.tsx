import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import light from "../scss/MaterialTheme";
import { useState } from "react";
import "../scss/app.scss";
import "../scss/pc/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(createTheme(light));

  // Soket.io, Redux, MUI ....
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />{" "}
    </ThemeProvider>
  );
}
