/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({
  hasIconStart = false,
  hasIconEnd = false,
  label = "Button",
  variant,
  disabled = false,
  size,
  className,
  divClassName,
}) => {
  return (
    <button className={`button disabled-${disabled} ${variant} ${className}`}>
      <div
        className={`text-wrapper disabled-0-${disabled} variant-${variant} ${size} ${divClassName}`}
      >
        {label}
      </div>
    </button>
  );
};

Button.propTypes = {
  hasIconStart: PropTypes.bool,
  hasIconEnd: PropTypes.bool,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "neutral", "subtle"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "small"]),
};
