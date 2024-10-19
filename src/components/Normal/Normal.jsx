/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import { ButtonWrapper } from "../ButtonWrapper";
import { DivWrapper } from "../DivWrapper";
import "./style.css";

export const Normal = ({
  className,
  overlapGroupClassName,
  buttonButtonClassName,
  buttonWrapperButtonClassName,
  divWrapperButtonClassName,
}) => {
  return (
    <div className={`normal ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <Button className={buttonButtonClassName} />
        <ButtonWrapper className={buttonWrapperButtonClassName} />
        <DivWrapper className={divWrapperButtonClassName} />
      </div>
    </div>
  );
};
