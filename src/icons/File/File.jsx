/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const File = ({ color = "#F5F5F5", className }) => {
  return (
    <svg
      className={`file ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.3333 2.66675H8.00001C7.29277 2.66675 6.61449 2.9477 6.11439 3.4478C5.61429 3.94789 5.33334 4.62617 5.33334 5.33341V26.6667C5.33334 27.374 5.61429 28.0523 6.11439 28.5524C6.61449 29.0525 7.29277 29.3334 8.00001 29.3334H24C24.7073 29.3334 25.3855 29.0525 25.8856 28.5524C26.3857 28.0523 26.6667 27.374 26.6667 26.6667V12.0001M17.3333 2.66675L26.6667 12.0001M17.3333 2.66675L17.3333 12.0001H26.6667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};

File.propTypes = {
  color: PropTypes.string,
};
