import { css } from "@emotion/css";
import { theme } from "core/theme";

export const root = css`
  .first-container {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .progress-label {
      flex-grow: 1;
      margin: 0 2rem;
      .label {
        font-weight: bold;
        margin: 0;
      }
    }
  }
`;