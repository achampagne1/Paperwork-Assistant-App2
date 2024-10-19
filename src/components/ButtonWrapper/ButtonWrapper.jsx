/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { File4 } from "../../icons/File4";
import "./style.css";

export const ButtonWrapper = ({ className }) => {
  return (
    <div className={`button-wrapper ${className}`}>
      <File4 className="file-4" color="#F5F5F5" />
      <button className="div">Select File</button>
    </div>
  );
};
