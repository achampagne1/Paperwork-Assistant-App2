import React, { useState } from "react";
import { File } from "../../icons/File";
import "./style.css";

export const IphoneProMax = () => {
    // State to store the selected file
    const [selectedFile, setSelectedFile] = useState(null);

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the selected file
        setSelectedFile(file); // Store the file in state
        console.log("Selected file:", file);
    };

  return (
    <div className="iphone-pro-max">
      <div className="div">
        <div className="frame">
          <div className="button-wrapper">
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div className="button"
            onClick={() => document.getElementById("fileInput").click()}
            >
                <File className="size-32" color="#F5F5F5" />
                <button className="text-wrapper">
                    Select File
                </button>
            </div>
          </div>
        </div>

        <div className="frame-2">
          <div className="text-wrapper-2">Created by Aubrey Champagne</div>

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
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>
  );
};
