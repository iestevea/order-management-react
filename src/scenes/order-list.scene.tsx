import { Header } from "common/components/header/header";
import { OrderListContainer } from "pods/order-list";
import React from "react";

export const OrderListScene: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <OrderListContainer />
      </div>
    </>
  );
};
