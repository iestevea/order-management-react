import { Order } from "../../order.vm";
import React from "react";
import * as classes from "./order-sub-header.styles";
import { LabelText } from "common/components/label-text/label-text";
import { Button, LinearProgress } from "@material-ui/core";

interface Props {
  order: Order;
  onSendOrder: (id: string) => void;
}

export const OrderSubHeader: React.FC<Props> = ({ order, onSendOrder }) => {
  return (
    <div className="order-header__secondary">
      <LabelText label="Importe total" text={order?.totalPrice.toString()} />
      <div className="text-label">
        <p className="label">Estado</p>
        <LinearProgress variant="determinate" value={order?.status} />
        <p className="text">{order?.status.toFixed(2)}%</p>
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
