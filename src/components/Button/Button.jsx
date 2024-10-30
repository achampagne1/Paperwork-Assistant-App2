import React, { useState } from "react";
import { File1 } from "../../icons/File1";
import "./style.css";
import "../../screens/IphoneProMax/style.css"
import { uploadData } from 'aws-amplify/storage';

export const Button = ({ className }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);  // Save the selected file in state
        console.log("Selected file:", file);

        if (file) {
            try {
                const result = await uploadData({
                    path: file.name,
                    data: file,
                    options: {
                        level: 'public'
                    }
                }).result;
                console.log('Upload succeeded:', result);
            } catch (error) {
                console.log('Upload error:', error);
            }
        }

        // Change the opacity of the button
        const button = document.querySelector('.button-3');
        if (button) {
            button.style.opacity = '1.0';
        }
    };

    function handleClick() {

        // Open the file system dialog
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    }

    return (
        <div className={`button ${className}`}>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
            <div className="button" onClick={() => handleClick()}>
                <File1 className="file" color="#F5F5F5" />
                <button className="text-wrapper">Select File</button>
            </div>
        </div>
    );
};