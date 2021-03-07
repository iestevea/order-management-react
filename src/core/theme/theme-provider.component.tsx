import ThemeProvider from "@material-ui/styles/ThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import StylesProvider from "@material-ui/styles/StylesProvider";
import React from "react";
import { theme } from "./theme";

export const ThemeProviderComponent: React.FC = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};
