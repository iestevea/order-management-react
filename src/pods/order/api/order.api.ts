import { Order } from "./order.api-model";
import { mockOrderList } from "./order.mock-data";

export const getOrder = async (id: string): Promise<Order> => {
  return mockOrderList.find((order: Order) => order.id === id)
}