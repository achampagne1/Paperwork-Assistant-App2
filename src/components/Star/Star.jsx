/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Size161 } from "../../icons/Size161";
import { Size201 } from "../../icons/Size201";
import { Size241 } from "../../icons/Size241";
import { Size321 } from "../../icons/Size321";
import { Size401 } from "../../icons/Size401";
import { Size481 } from "../../icons/Size481";
import "./style.css";

export const Star = ({ size }) => {
  return (
    <>
      {size === "forty-eight" && <Size481 className="size" />}

      {size === "sixteen" && <Size161 className="size-16-1" />}

      {size === "twenty" && <Size201 className="size-20-1" />}

      {size === "twenty-four" && <Size241 className="size-24-1" />}

      {size === "thirty-two" && <Size321 className="size-32-1" />}

      {size === "forty" && <Size401 className="size-40-1" />}
    </>
  );
};

Star.propTypes = {
  size: PropTypes.oneOf([
    "sixteen",
    "twenty-four",
    "forty-eight",
    "twenty",
    "thirty-two",
    "forty",
  ]),
};
