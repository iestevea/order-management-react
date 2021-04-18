import Axios from 'axios';
import { Order } from "./order-list.api-model";

const ordersApi = process.env.MOCK_API;

export const getOrderList = async (): Promise<Order[]> => {
  const { data } = await Axios.get(`${ordersApi}/orders`)
  return data;
}