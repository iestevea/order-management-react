import Axios from 'axios';
import { Order } from "./order.api-model";

const ordersApi = process.env.BASE_API_URL;

export const getOrder = async (id: string): Promise<Order> => {
  const { data } = await Axios.get(`${ordersApi}/orders/${id}`);
  return data;
}

export const setOrder = async (order: Order): Promise<Order> => {
  const { data } = await Axios.put(`${ordersApi}/orders/${order.id}`, order);
  return data;
}