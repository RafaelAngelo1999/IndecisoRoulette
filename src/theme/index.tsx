import React, { ReactNode } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
// constantes
import palette from "./palette";

// ----------------------------------------------------------------------

interface IThemeProvider {
  children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = ({ children }) => {
  const theme = createTheme(palette);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
