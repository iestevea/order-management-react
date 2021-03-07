import * as apiModel from "./api/order.api-model";
import * as viewModel from "./order.vm";

const getStatusPercentage = (lines: apiModel.Line[]): number => {
  const linesAux = lines.reduce((acc: number, line: apiModel.Line) => {
    line.status === 'valid' ? acc++ : acc;
    return acc;
  }, 0);
  return linesAux ? ((linesAux / lines.length) * 100) : 0;
}

const getTotalPrice = (lines: apiModel.Line[]) => {
  return lines.reduce((acc: number, line: apiModel.Line) => {
    return acc + line.price
  }, 0);
}

export const mapOrderApiToVm = (order: apiModel.Order): viewModel.Order =>
({
  ...order,
  status: getStatusPercentage(order.lines),
  totalPrice: getTotalPrice(order.lines)
})

export const createEmptyOrder = () => ({
  id: '',
  date: '',
  client: '',
  lines: [],
  status: 0,
  totalPrice: 0
})