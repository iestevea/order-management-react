import React from "react";

import { Order } from "./order-list.vm";
import * as classes from "./order-list.styles";
import { TableComponent } from "common/components/table/table";

interface OrderListComponent {
  orderList: Order[];
  onRowClick: (id: string) => void;
}

export const OrderListComponent: React.FC<OrderListComponent> = ({
  orderList,
  onRowClick
}) => {
  console.log("se ha renderizado el order-list-component");

  const orderColumns: Array<keyof Order> = ["id", "date", "client", "status"];

  return (
    <div className={`${classes.root}`}>
      <h1>Lista de pedidos</h1>
      <TableComponent data={orderList} columns={orderColumns} onRowClick={onRowClick}/>
    </div>
  );
};
