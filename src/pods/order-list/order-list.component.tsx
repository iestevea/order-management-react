import React, { useMemo } from "react";
import { Order } from "./order-list.vm";
import * as classes from "./order-list.styles";
import { STATUS_OPTIONS } from "common/constants/constants";
import { GridColumns, DataGrid } from "@material-ui/data-grid";

interface OrderListComponent {
  orderList: Order[];
  onRowClick: (id: string) => void;
}

export const OrderListComponent: React.FC<OrderListComponent> = ({
  orderList,
  onRowClick,
}) => {
  console.log("se ha renderizado el order-list-component");

  const linesColumns: GridColumns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 170 },
      {
        field: "date",
        headerName: "Fecha",
        width: 170,
      },
      {
        field: "client",
        headerName: "Cliente",
        width: 170,
      },
      {
        field: "statusAux",
        headerName: "Estado",
        width: 230,
        valueGetter: (params) =>
          STATUS_OPTIONS[params.getValue("status") as "valid" | "invalid"],
      },
    ],
    []
  );

  return (
    <div className={`${classes.root}`}>
      <h1>Lista de pedidos</h1>
      <div className="order-table">
        <DataGrid
          rows={orderList}
          columns={linesColumns}
          autoHeight
          onRowClick={(param) => onRowClick((param.row.id).toString())}
          pageSize={5}
        />
      </div>
    </div>
  );
};
