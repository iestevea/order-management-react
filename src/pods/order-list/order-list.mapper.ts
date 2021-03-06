import * as apiModel from "./api/order-list.api-model";
import * as viewModel from "./order-list.vm";

const getGeneralStatus = (lines: apiModel.Line[]): 'valid' | 'invalid' => {
  const status = lines.every((line: apiModel.Line) => line.status === 'valid');
  return status ? 'valid' : 'invalid';
}

export const mapOrderListApiToVm = (orderList: apiModel.Order[]): viewModel.Order[] => {
  return orderList.map((order: apiModel.Order) => ({
    id: order.id,
    date: order.date,
    client: order.client,
    status: getGeneralStatus(order.lines),
  }))
}