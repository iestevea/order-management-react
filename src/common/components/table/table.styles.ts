import { css } from "@emotion/css";
import { theme } from "core/theme";

export const root = css`
  .table {
    background-color: ${theme.palette.table.row.main};

    thead {
      background-color: ${theme.palette.secondary.main};
      th {
        color: whitesmoke;
        font-size: 15px;
        font-weight: 600;
      }
    }
    tbody {
      tr {
        cursor: pointer;
      }
    }
  }
`;