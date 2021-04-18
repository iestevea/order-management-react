import { setOrder } from "../api";
import { mapOrderVmToApi, mapOrderApiToVm, createEmptyOrder } from "../order.mapper";
import { Line, Order } from "../order.vm";

const handleOrderChange = async (order: Order) => {
  try {
    const apiOrder = mapOrderVmToApi(order);
    await setOrder(apiOrder);
  } catch (error) {
    console.log(error);
  }
};

export const reducer = (order, action) => {
  let newOrder = createEmptyOrder();
  switch (action.type) {
    case "UPDATE_ORDER":
      return {
        ...action.payload,
      };
    case "VALID_LINES":
      newOrder = {
        ...order,
        lines: order.lines.map((line: Line) =>
          action.payload.includes(line.id)
            ? { ...line, status: "valid" }
            : line
        ),
      }
      handleOrderChange(newOrder);
      return newOrder;
    case "INVALID_LINES":
      newOrder = {
        ...order,
        lines: order.lines.map((line: Line) =>
          action.payload.includes(line.id)
            ? { ...line, status: "invalid" }
            : line
        ),
      }
      handleOrderChange(newOrder);
      return newOrder;
    case "UPDATE_PRICE":
      newOrder = {
        ...order,
        lines: order.lines.map((line: Line) =>
          line.id === action.payload.id
            ? { ...line, price: action.payload.price }
            : line
        ),
      }
      handleOrderChange(newOrder);
      return newOrder;
    default:
      throw new Error();
  }
};