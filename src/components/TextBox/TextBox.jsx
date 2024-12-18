import React, { useState, useContext } from "react";
import { Context } from "../../ContextProvider";
import "./TextBoxStyle.css";

export const TextBox = ({ className }) => {

    const { fileState, selectedFile } = useContext(Context);

    let displayText;

    // Determine what text to display based on fileState
    if (fileState === 0) {
        displayText = "No file selected";
    } else if (fileState === 4) {
        displayText = selectedFile.name.slice(6); //use  selected file name, because you dont want the extra stuff
    } else if (fileState === 1) {
        displayText = "Invalid file type";
    } else if (fileState === 2) {
        displayText = "Invalid MIME type";
    } else if (fileState === 3) {
        displayText = "File too big";
    } else if (fileState === 5) {
        displayText = "Unknown upload error";
    } else if (fileState === 6) {
        displayText = "Backend disconnected";
    }

    return (
        <div className="textBox">
            <div className="text">
                {displayText}
            </div>
        </div>
    );
};