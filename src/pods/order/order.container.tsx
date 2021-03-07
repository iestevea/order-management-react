import { routes } from "core/router";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getOrder } from "./api";
import { OrderComponent } from "./order.component";
import { createEmptyOrder, mapOrderApiToVm } from "./order.mapper";
import { Order } from "./order.vm";

export const OrderContainer: React.FC = () => {
  const history = useHistory();
  const { id }: any = useParams();

  console.log(id);

  const [order, setOrder] = useState<Order>(createEmptyOrder());

  const handleSendOrder = (id: string) => {
    console.log(id);
  };

  const onLoadOrder = async () => {
    try {
      const apiOrder = await getOrder(id);
      const vMOrder = mapOrderApiToVm(apiOrder);
      setOrder(vMOrder);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLoadOrder();
  }, []);

  console.log("se ha renderizado el order-container");

  return <OrderComponent order={order} onSendOrder={handleSendOrder} />;
};
