/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({
  label = "Button",
  hasIconEnd = false,
  hasIconStart = false,
  variant,
  disabled = false,
  size,
  className,
}) => {
  return (
    <button className={`button disabled-${disabled} ${variant} ${className}`}>
      <div
        className={`text-wrapper disabled-0-${disabled} variant-${variant} ${size}`}
      >
        {label}
      </div>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  hasIconEnd: PropTypes.bool,
  hasIconStart: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "neutral", "subtle"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "small"]),
};
