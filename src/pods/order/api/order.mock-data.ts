import { Order } from "./order.api-model";



export const mockOrderList: Order[] = [
  {
    id: "1", client: "Client 1", date: "22/03/2019",
    lines: [
      { id: "1", price: 240, status: "valid" },
      { id: "2", price: 20, status: "valid" },
      { id: "3", price: 350, status: "invalid" },
    ]
  },
  {
    id: "2", client: "Client 2", date: "12/07/2009",
    lines: [
      { id: "1", price: 260, status: "invalid" },
      { id: "2", price: 250, status: "invalid" },
      { id: "3", price: 100, status: "valid" },
      { id: "4", price: 20, status: "valid" },
    ]
  },
  {
    id: "3", client: "Client 3", date: "02/05/2017",
    lines: [
      { id: "1", price: 290, status: "valid" },
      { id: "2", price: 10, status: "valid" },
    ]
  },
  {
    id: "4", client: "Client 4", date: "19/08/2011",
    lines: [
      { id: "1", price: 200, status: "invalid" }
    ]
  },
];