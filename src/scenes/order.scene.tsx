import { Header } from "common/components/header/header";
import { OrderContainer } from "pods/order";
import React from "react";

export const OrderScene: React.FC = () => {
  return (
    <>
      <Header />
      <div className="content">
        <OrderContainer />
      </div>
    </>
  );
};
