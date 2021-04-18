import { routes } from "core/router";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { getOrderList } from "./api";
import { OrderListComponent } from "./order-list.component";
import { mapOrderListApiToVm } from "./order-list.mapper";
import { Order } from "./order-list.vm";

export const OrderListContainer: React.FC = () => {
  const history = useHistory();

  const [orders, setOrders] = useState<Order[]>([]);

  const onLoadOrderList = async () => {
    try {
      const apiOrderList = await getOrderList();
      const vMOrderList = mapOrderListApiToVm(apiOrderList);
      setOrders(vMOrderList);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    onLoadOrderList();
  }, []);

  const handleRowClick = (id: string) => {
    history.push(routes.editOrder(id));
  };

  return (
    <OrderListComponent
      orderList={orders}
      onRowClick={handleRowClick}
    />
  );
};
