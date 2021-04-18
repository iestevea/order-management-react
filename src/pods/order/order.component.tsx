import React, { useContext, useMemo, useState } from "react";
import { DataGrid, GridColumns, GridRowId } from "@material-ui/data-grid";
import * as classes from "./order.styles";
import { routes } from "core/router";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { ArrowBack} from "@material-ui/icons";
import { OrderHeader } from "./components/order-header/order-header";
import { OrderSubHeader } from "./components/order-sub-header/order-sub-header";
import { STATUS_OPTIONS } from "common/constants/constants";
import { OrderDetail } from "./components/order-detail/order-detail";
import { OrderContext } from "./context/order-context";

interface OrderComponent {
  onSendOrder: (id: string) => void;
  onValidateLines: (lines: number[], valid: boolean) => void;
  onUpdatePrice: (id: GridRowId, price: string) => void;
}

export const OrderComponent: React.FC<OrderComponent> = ({
  onSendOrder,
  onValidateLines,
  onUpdatePrice,
}) => {
  const history = useHistory();

  const { order } = useContext(OrderContext);
  const [selectedLines, setSelectedLines] = useState<number[]>([]);

  console.log("se ha renderizado el order-component");

  const linesColumns: GridColumns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 170 },
      {
        field: "statusAux",
        headerName: "Estado",
        width: 230,
        valueGetter: (params) =>
          STATUS_OPTIONS[params.getValue("status") as "valid" | "invalid"],
      },
      {
        field: "priceAux",
        headerName: "Precio",
        sortable: false,
        renderCell: (params) => (
          <>
            <TextField
              variant="outlined"
              defaultValue={params.getValue("price")}
              onBlur={(e) => onUpdatePrice(params.row.id, e.target.value)}
            />{" "}
            (€)
          </>
        ),
        width: 190,
      },
    ],
    []
  );

  const handleSelectedLine = (row: any) => {
    const lineId = row.data.id;
    if (selectedLines.includes(lineId)) {
      setSelectedLines((prevLines: number[]) =>
        prevLines.filter((line) => line !== lineId)
      );
    } else {
      setSelectedLines((prevLines: number[]) => [...prevLines, lineId]);
    }
  };

  return (
    <div className={`${classes.root}`}>
      <Button
        variant="text"
        color="primary"
        onClick={() => history.push(routes.orders)}
        startIcon={<ArrowBack />}
      >
        Volver
      </Button>
      <h1>Detalle del pedido</h1>
      <div className="order-header">
        <OrderHeader />
        <OrderSubHeader onSendOrder={onSendOrder} />
      </div>
      <div className="order-detail">
        <OrderDetail
          onValidateLines={(valid: boolean) =>
            onValidateLines(selectedLines, valid)
          }
        />
      </div>
      <div className="order-table" style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={order.lines}
          columns={linesColumns}
          pageSize={5}
          checkboxSelection
          onRowSelected={handleSelectedLine}
        />
      </div>
    </div>
  );
};
