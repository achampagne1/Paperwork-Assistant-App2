import React, { useState } from "react";
import { Size32 } from "../../icons/Size32";
import "./style.css";

export const Button3 = ({ className }) => {
    return (
        <div className={`button3 ${className}`}>
            <div className="button3">
                <Size32 className="icon-instance-node" color="white" />
                <div className="text-wrapper3">Get Output File</div>
            </div>
        </div>
    );
};