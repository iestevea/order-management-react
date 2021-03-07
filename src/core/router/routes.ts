import { generatePath } from "react-router-dom"

interface BaseRoutes {
  root: string;
  editOrder: string;
  orders: string;
}

const baseRoutes: BaseRoutes = {
  root: "/",
  editOrder: "/orders/:id",
  orders: "/orders"
}

interface Routes extends Omit<BaseRoutes, 'editOrder'> {
  editOrder: (id?: string) => string;
}

export const routes: Routes = {
  ...baseRoutes,
  editOrder: id =>
    id ? generatePath(baseRoutes.editOrder, { id }) : baseRoutes.editOrder,
}