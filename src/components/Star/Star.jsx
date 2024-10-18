/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Size163 } from "../../icons/Size163";
import { Size203 } from "../../icons/Size203";
import { Size243 } from "../../icons/Size243";
import { Size323 } from "../../icons/Size323";
import { Size403 } from "../../icons/Size403";
import { Size483 } from "../../icons/Size483";
import "./style.css";

export const Star = ({ size }) => {
  return (
    <>
      {size === "forty-eight" && <Size483 className="size" />}

      {size === "sixteen" && <Size163 className="size-16-3" />}

      {size === "twenty" && <Size203 className="size-20-3" />}

      {size === "twenty-four" && <Size243 className="size-24-3" />}

      {size === "thirty-two" && <Size323 className="size-32-3" />}

      {size === "forty" && <Size403 className="size-40-3" />}
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
