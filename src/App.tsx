import React from "react";
import { BaseLayoutComponent } from "shared/layout/base-layout-component";
import { Index } from "./modules/home";
import { theme } from "shared/styles/theme";
import { ThemeProvider } from "@mui/material";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayoutComponent>
        <Index />
      </BaseLayoutComponent>
    </ThemeProvider>
  );
};
