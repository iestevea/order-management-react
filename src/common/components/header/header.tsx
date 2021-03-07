import { Button } from "@material-ui/core";
import { routes } from "core/router";
import React from "react";
import { useHistory } from "react-router-dom";
import * as classes from "./header.styles";

interface Props {}

export const Header: React.FC<Props> = () => {
  const history = useHistory();
  return <div className={classes.root} onClick={() => history.push(routes.root)}>Order's APP</div>;
};
