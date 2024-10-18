import React from "react";
import { Button } from "../../components/Button";
import { Star } from "../../components/Star";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <button className="button-danger">
        <div className="div">Button</div>
      </button>

      <Button
        className="button-2"
        label="Button"
        size="medium"
        variant="primary"
      />
      <div className="icon-button">
        <Star size="twenty" />
      </div>
    </div>
  );
};
