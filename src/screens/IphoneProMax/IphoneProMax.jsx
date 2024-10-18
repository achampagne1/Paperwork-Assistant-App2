import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const IphoneProMax = () => {
  return (
    <div className="iphone-pro-max">
      <div className="button-wrapper">
        <Button
          className="button-instance"
          divClassName="design-component-instance-node"
          label="Select File"
          size="medium"
          variant="primary"
        />
      </div>
    </div>
  );
};
