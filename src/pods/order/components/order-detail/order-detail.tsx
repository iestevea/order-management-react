import React from "react";
import * as classes from "./order-detail.styles";
import { Button } from "@material-ui/core";

interface Props {
  onValidateLines: (valid: boolean) => void;
}

export const OrderDetail: React.FC<Props> = ({ onValidateLines }) => {
  return (
    <div className={`${classes.root}`}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onValidateLines(true)}
      >
        Validar
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => onValidateLines(false)}
      >
        Invalidar
      </Button>
    </div>
  );
};
