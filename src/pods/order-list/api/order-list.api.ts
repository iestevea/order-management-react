import { Order } from "./order-list.api-model";
import { mockOrderList } from "./order-list.mock-data";

let orderList = [...mockOrderList];

export const getOrderList = async (): Promise<Order[]> => {
  return orderList;
}