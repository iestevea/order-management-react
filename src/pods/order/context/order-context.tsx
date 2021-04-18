import { createContext } from "react";
import { createEmptyOrder } from "../order.mapper";

export const OrderContext = createContext({
  order: createEmptyOrder(),
  dispatch: ({type, payload}): any => ({}),
});
