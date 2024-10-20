/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Size32 } from "../../icons/Size32";
import "./style.css";

export const Button = ({ className }) => {
  return (
    <div className={`button ${className}`}>
      <Size32 className="file" color="#F5F5F5" />
      <button className="text-wrapper">Select File</button>
    </div>
  );
};
