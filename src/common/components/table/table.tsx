import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Order } from "pods/order-list/order-list.vm";
import React, { useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import * as classes from "./table.styles";

interface Props {
  columns: string[];
  data: Order[];
  onRowClick?: (id: string) => void;
}

export const TableComponent: React.FC<Props> = ({
  columns,
  data,
  onRowClick,
}) => {
  const history = useHistory();

  const body = useMemo(() => {
    return (
      <TableBody>
        {data.map((item: Order) => {
          return (
            <TableRow key={item.id} onClick={() => onRowClick(item.id)}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.client}</TableCell>
              <TableCell align="right">{item.status}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }, [data]);

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={`${classes.root} table`} aria-label="simple table">
          <TableHead>
            <TableRow>
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
