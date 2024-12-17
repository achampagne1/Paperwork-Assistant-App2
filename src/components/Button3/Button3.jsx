import React, { useState, useContext } from "react";
import { Context } from "../../ContextProvider";
import { Size32 } from "../../icons/Size32";
import "./Button3Style.css";

export const Button3 = ({ className }) => {
    const { presignedUrl, fileReady } = useContext(Context);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = presignedUrl;
        link.download = "output-file.pdf"; // I actually dont know how it gets the correct output name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="button3" onClick={handleDownload}>
            <Size32 className="icon-instance-node" color="white" />
            <div className="text-wrapper3">
                {fileReady ? "Get File" : "File Not Ready"}
            </div>
        </div>
    );
};