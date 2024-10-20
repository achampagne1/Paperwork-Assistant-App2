/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const File1 = ({ color = "#F5F5F5", className }) => {
  return (
    <svg
      className={`file-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 33 32"
      width="33"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M17.8333 2.66667H8.5C7.79276 2.66667 7.11448 2.94762 6.61438 3.44772C6.11429 3.94781 5.83334 4.62609 5.83334 5.33333V26.6667C5.83334 27.3739 6.11429 28.0522 6.61438 28.5523C7.11448 29.0524 7.79276 29.3333 8.5 29.3333H24.5C25.2072 29.3333 25.8855 29.0524 26.3856 28.5523C26.8857 28.0522 27.1667 27.3739 27.1667 26.6667V12M17.8333 2.66667L27.1667 12M17.8333 2.66667L17.8333 12H27.1667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};

File1.propTypes = {
  color: PropTypes.string,
};
