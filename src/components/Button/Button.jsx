import React, { useState, useContext } from "react";
import { Context } from "../../ContextProvider";
import { File1 } from "../../icons/File1";
import "./ButtonStyle.css";
import { uploadData } from 'aws-amplify/storage';
import { uploadFile } from '../../helpers/UploadFile'

export const Button = ({ className }) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const { setFilePath } = useContext(Context);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);  
        console.log("Selected file:", file);

        if (file) {
            uploadFile(file);
            const filePath = `input/${file.name}`;
            setFilePath(filePath);
        }

        // Change the opacity of the button
        const button = document.querySelector('.button-3');
        if (button) {
            button.style.opacity = '1.0';
        }
    };

    function handleClick() {
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