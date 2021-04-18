import { GridRowId } from "@material-ui/data-grid";
import Snackbar from "@material-ui/core/Snackbar";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "./api";
import { OrderContext } from "./context/order-context";
import { OrderComponent } from "./order.component";
import { createEmptyOrder, mapOrderApiToVm } from "./order.mapper";
import { reducer } from "./reducer/order-reducer";

export const OrderContainer: React.FC = () => {
  const { id }: any = useParams();

  const [order, dispatch] = useReducer(reducer, createEmptyOrder());
  const [showAlert, setShowAlert] = useState(false);

  const handleSendOrder = () => {
    setShowAlert(true)
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  const onLoadOrder = async () => {
    try {
      const apiOrder = await getOrder(id);
      const vMOrder = mapOrderApiToVm(apiOrder);
      dispatch({ type: "UPDATE_ORDER", payload: vMOrder });
    } catch (error) {
      console.log(error);
    }
  };

  const handleValidateLines = async (lines: number[], valid: boolean) => {
    try {
      dispatch({
        type: valid ? "VALID_LINES" : "INVALID_LINES",
        payload: lines,
      });
      await onLoadOrder();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdatePrice = async (id: GridRowId, price: string) => {
    try {
      dispatch({
        type: "UPDATE_PRICE",
        payload: { id, price: parseFloat(price) },
      });
      await onLoadOrder();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLoadOrder();
  }, []);

  return (
    <OrderContext.Provider value={{ order, dispatch }}>
      <OrderComponent
        onSendOrder={handleSendOrder}
        onValidateLines={handleValidateLines}
        onUpdatePrice={handleUpdatePrice}
      />
      <Snackbar
        open={showAlert}
        onClose={handleClose}
        message="El pedido se ha enviado correctamente"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={5000}
      />
    </OrderContext.Provider>
  );
};
