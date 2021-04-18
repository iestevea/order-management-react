import React, { useContext } from "react";
import * as classes from "./order-sub-header.styles";
import { LabelText } from "common/components/label-text/label-text";
import { Button, LinearProgress } from "@material-ui/core";
import { OrderContext } from "pods/order/context/order-context";

interface Props {
  onSendOrder: (id: string) => void;
}

export const OrderSubHeader: React.FC<Props> = ({ onSendOrder }) => {
  const {order} = useContext(OrderContext);
  return (
    <div className={`${classes.root}`}>
      <div className="first-container">
      <LabelText label="Importe total" text={order?.totalPrice.toString()} />
      <div className="progress-label">
        <p className="label">Estado</p>
        <LinearProgress variant="determinate" value={order?.status} />
        <p className="text">{order?.status.toFixed(2)}%</p>
      </div>
      </div>
      <Button
        variant="contained"
        color="primary"
        disabled={order?.status !== 100}
        onClick={() => onSendOrder(order?.id)}
      >
        Enviar
      </Button>
    </div>
  );
};
