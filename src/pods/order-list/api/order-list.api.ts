import Axios from 'axios';
import { Order } from "./order-list.api-model";

const ordersApi = process.env.BASE_API_URL;

export const getOrderList = async (): Promise<Order[]> => {
  const { data } = await Axios.get(`${ordersApi}/orders`)
  return data;
}