import React from "react";
import * as classes from "./label-text.styles";

interface Props {
  label: string;
  text: string;
}

export const LabelText: React.FC<Props> = ({ label, text }) => {
  return (
    <div className={classes.root}>
      <p className="label">{label}</p>
      <p className="text">{text}</p>
    </div>
  );
};
