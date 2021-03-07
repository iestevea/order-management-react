import { Order } from "../../order.vm";
import React from "react";
import * as classes from "./order-header.styles";
import { LabelText } from "common/components/label-text/label-text";

interface Props {
  order: Order;
}

export const OrderHeader: React.FC<Props> = ({ order }) => {
  return (
    <div className="order-header__main">
      <LabelText label="Número" text={order?.id} />
      <LabelText label="Proveedor" text={order?.client} />
      <LabelText label="Fecha" text={order?.date} />
    </div>
  );
};
