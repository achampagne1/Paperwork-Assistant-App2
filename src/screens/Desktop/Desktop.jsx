import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <button className="button-danger">
        <div className="text-wrapper-2">Button</div>
      </button>

      <button className="button-4">
        <div className="text-wrapper-3">Button</div>
      </button>

      <div className="icon-button">
        <img className="star" alt="Star" src="/img/star-37.svg" />
      </div>
    </div>
  );
};
