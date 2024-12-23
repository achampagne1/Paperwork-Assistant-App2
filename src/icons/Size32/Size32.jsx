/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Size32 = ({ color = "#1E1E1E", className }) => {
  return (
    <svg
      className={`size-32 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 33 32"
      width="33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M28.5 20V25.3333C28.5 26.0406 28.219 26.7189 27.719 27.219C27.2189 27.719 26.5406 28 25.8333 28H7.16667C6.45942 28 5.78115 27.719 5.28105 27.219C4.78095 26.7189 4.5 26.0406 4.5 25.3333V20M9.83333 13.3333L16.5 20M16.5 20L23.1667 13.3333M16.5 20V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};

Size32.propTypes = {
  color: PropTypes.string,
};
