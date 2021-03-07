import React from "react";
import { RouterComponent } from "./core/router";
import { ThemeProviderComponent } from "./core/theme";

export const App = () => {
  return (
    <ThemeProviderComponent>
      <RouterComponent />
    </ThemeProviderComponent>
  );
};
