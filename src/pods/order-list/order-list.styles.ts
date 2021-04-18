import { css } from "@emotion/css";
import { theme } from "core/theme";

export const root = css`
  padding: 1rem;
  .order-table {
    margin-top: 1rem;
    width: "100%";
    .MuiDataGrid-columnsContainer {
      background-color: ${theme.palette.secondary.main};
      * > * {
      color: white;
      font-weight: 600;
      }
    }
    .MuiDataGrid-row {
      background-color: whitesmoke;
      font-size: 15px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;