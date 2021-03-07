import React from "react";
import { TableComponent } from "common/components/table/table";
import { Line, Order } from "./order.vm";
import * as classes from "./order.styles";
import { routes } from "core/router";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { OrderHeader } from "./components/order-header/order-header";
import { OrderSubHeader } from "./components/order-sub-header/order-sub-header";

interface OrderComponent {
  order: Order;
  onSendOrder: (id: string) => void;
}

export const OrderComponent: React.FC<OrderComponent> = ({
  order,
  onSendOrder,
}) => {
  const history = useHistory();
  const linesColumns: Array<keyof Line> = ["id", "status", "price"];

  console.log("se ha renderizado el order-component");

  return (
    <div className={`${classes.root}`}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push(routes.orders)}
        startIcon={<ArrowBack />}
      >
        Volver
      </Button>
      <h1>Detalle del pedido</h1>
      <div className="order-header">
        <OrderHeader order={order} />
        <OrderSubHeader order={order} onSendOrder={onSendOrder} />
      </div>
      <TableComponent data={order.lines} columns={linesColumns} />
    </div>
  );
};
