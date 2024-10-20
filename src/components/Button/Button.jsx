/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { File1 } from "../../icons/File1";
import "./style.css";

export const Button = ({ className }) => {
  return (
    <div className={`button ${className}`}>
      <File1 className="file" color="#F5F5F5" />
      <button className="text-wrapper">Select File</button>
    </div>
  );
};
