import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="button-wrapper">
        <Button
          className="button-instance"
          label="Button"
          size="medium"
          variant="primary"
        />
      </div>
    </div>
  );
};
