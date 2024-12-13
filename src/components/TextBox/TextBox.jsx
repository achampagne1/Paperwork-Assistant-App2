﻿import React, { useState, useContext } from "react";
import { Context } from "../../ContextProvider";
import "./TextBoxStyle.css";

export const TextBox = ({ className }) => {

    const { fileState } = useContext(Context);
    const { filePath } = useContext(Context);

    let displayText;

    // Determine what text to display based on fileState
    if (fileState === 0) {
        displayText = "No file selected";
    } else if (fileState === 1) {
        displayText = filePath.slice(6);
    } else if (fileState === 2) {
        displayText = "Incorrect file type";
    }

    return (
        <div className={`textBox`}>
            <div className="text">
                {displayText}
            </div>
        </div>
    );
};