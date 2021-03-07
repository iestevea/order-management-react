import { createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "./theme.vm";
import merge from "lodash.merge"

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    primary: {
      main: '#01BA9E',
      dark: '#00846B',
      light: '#E9FEF8'
    },
    secondary: {
      main: '#00846B'
    },
    success: {
      main: '#43a047',
    },
    warning: {
      main: '#ef4f4f',
    },
    info: {
      main: '#E9FEF8',
    },
    table: {
      row: {
        main: '#E9FEF8',
      },
    },

  }
} as Theme);