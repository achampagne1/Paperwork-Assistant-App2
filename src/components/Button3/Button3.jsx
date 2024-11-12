import React from "react";
import { Size32 } from "../../icons/Size32";
import "./style.css";

export const Button3 = ({ className }) => {
    return (
        <div className={`button3 ${className}`}>
            <Size32 className="icon-instance-node" color="white" />
            <div className="text-wrapper">Get Output File</div>
        </div>
    );
};