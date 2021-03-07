import { css } from "@emotion/css";
import { theme } from "core/theme";

export const root = css`
  background-color: ${theme.palette.primary.main};
  height: 60px;
  color: white;
  display: flex;
  justify-items: center;
  align-items: center;
  padding-left: 1rem;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
`;