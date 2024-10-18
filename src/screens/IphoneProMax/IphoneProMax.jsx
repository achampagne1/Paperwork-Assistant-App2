import React from "react";
import { Button } from "../../components/Button";
import "./style.css";

export const IphoneProMax = () => {
  return (
    <div className="iphone-pro-max">
      <div className="div">
        <div className="frame">
          <Button
            className="button-instance"
            divClassName="design-component-instance-node"
            label="Select File"
            size="medium"
            variant="primary"
          />
        </div>

        <div className="button-wrapper">
          <button className="button-2">
            <div className="group">
              <div className="overlap-group">
                <img
                  className="polygon"
                  alt="Polygon"
                  src="/img/polygon-1.svg"
                />
              </div>
            </div>

            <button className="button-3">Contact</button>
          </button>
        </div>
      </div>
    </div>
  );
};
