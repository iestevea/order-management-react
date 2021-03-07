import { createMuiTheme } from "@material-ui/core/styles";
import { Theme } from "./theme.vm";
import merge from "lodash.merge"

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    primary: {
      main: '#01BA9E'
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
      main: '#5E299A',
    },
    table: {
      row: {
        main: '#E9FEF8',
      },
    },

  }
} as Theme);