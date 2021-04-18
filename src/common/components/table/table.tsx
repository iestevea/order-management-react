import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Order, Line } from "pods/order/order.vm";
import React, { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import * as classes from "./table.styles";

interface Props<Type> {
  columns: string[];
  data: Type[];
  onRowClick?: (id: string) => void;
}

export const TableComponent: React.FC<Props<any>> = ({
  columns,
  data,
  onRowClick,
}) => {
  const history = useHistory();

  const body = useMemo(() => {
    return (
      <TableBody>
        {data.map((item: any, index: number) => {
          return (
            <TableRow
              key={`table-row-${item.id} -${index}`}
              onClick={() => onRowClick(item.id)}
            >
              {columns.map((column: string, index: number) =>
                index === 0 ? (
                  <TableCell
                    key={`table-cell-${item.id}-${index}`}
                    component="th"
                    scope="row"
                  >
                    {item[column]}
                  </TableCell>
                ) : (
                  <TableCell
                    key={`table-cell-${item.id}-${index}`}
                    align="right"
                  >
                    {item[column]}
                  </TableCell>
                )
              )}
            </TableRow>
          );
        })}
      </TableBody>
    );
  }, [data, columns]);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={`${classes.root} table`} aria-label="simple table">
          <TableHead>
            <TableRow selected>
              {columns.map((column: string, index: number) =>
                index === 0 ? (
                  <TableCell key={`cell-${index}`}>{column}</TableCell>
                ) : (
                  <TableCell key={`cell-${index}`} align="right">
                    {column}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          {body}
        </Table>
      </TableContainer>
    </div>
  );
};
