import { Order } from "./order-list.api-model";

export const mockOrderList: Order[] = [
  { id: "1", client: "Client 1", date: "22/03/2019", lines: [], status: 'invalid', totalPrice: 290.30 },
  { id: "2", client: "Client 2", date: "12/07/2009", lines: [], status: 'invalid', totalPrice: 90.60 },
  { id: "3", client: "Client 3", date: "02/05/2017", lines: [], status: 'invalid', totalPrice: 20 },
  { id: "4", client: "Client 4", date: "19/08/2011", lines: [], status: 'invalid', totalPrice: 34 },
];