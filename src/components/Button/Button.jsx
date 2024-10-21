import React, { useState } from "react";
import { File1 } from "../../icons/File1";
import "./style.css";

export const Button = ({ className }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);  // Save the selected file in state
        console.log("Selected file:", file);
    };

  return (
    <div className={`button ${className}`}>
          <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
          />
          <div
              className="button"
              onClick={() => document.getElementById("fileInput").click()}  // Trigger file input
          >
      <File1 className="file" color="#F5F5F5" />
              <button className="text-wrapper">Select File</button>
          </div>
          {selectedFile && <p className="file-name">Selected File: {selectedFile.name}</p>}
    </div>
  );
};
