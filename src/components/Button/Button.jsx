import React, { useState } from "react";
import { File1 } from "../../icons/File1";
import "./style.css";
import "../../screens/IphoneProMax/style.css"
import { uploadData } from 'aws-amplify/storage';

export const Button = ({ className }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);  // Save the selected file in state
        console.log("Selected file:", file);
    };

    const handleUpload = async () => {

        try {
            const result = await uploadData({
                path: 'test.txt',
                // Alternatively, path: ({identityId}) => `protected/${identityId}/album/2024/1.jpg`
                data: selectedFile,
                options: {
                    level: 'public'
                //    onProgress // Optional progress callback.
                }
            }).result;
            console.log('Succeeded: ', result);
        } catch (error) {
            console.log('Error : ', error);
        }
    };

    function handleClick() {
        // Change the opacity of the button
        const button = document.querySelector('.button-3');
        if (button) {
            button.style.opacity = '1.0';
        }

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
            {selectedFile && (
                <div>
                    <p className="file-name">Selected File: {selectedFile.name}</p>
                    <button onClick={() => handleUpload()}>Upload File</button>
                </div>
            )}
        </div>
    );
};