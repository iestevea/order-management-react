import React, { useContext } from "react";
import * as classes from "./order-header.styles";
import { LabelText } from "common/components/label-text/label-text";
import { OrderContext } from "pods/order/context/order-context";

export const OrderHeader: React.FC = React.memo(() => {
  console.log("se ha renderizado el order-header");
  const {order} = useContext(OrderContext);
  return (
    <div className={`${classes.root}`}>
      <LabelText label="Número" text={order?.id} />
      <LabelText label="Proveedor" text={order?.client} />
      <LabelText label="Fecha" text={order?.date} />
    </div>
  );
});
