import * as apiModel from "./api/order-list.api-model";
import * as viewModel from "./order-list.vm";

export const mapOrderListApiToVm = (orderList: apiModel.Order[]): viewModel.Order[] => {
  return orderList.map((order: apiModel.Order) => ({
    id: order.id,
    date: order.date,
    client: order.client,
    status: order.status
  }))
}