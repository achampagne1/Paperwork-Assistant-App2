import React, { useState, useContext } from "react";
import { Context } from "../../ContextProvider";
import { File1 } from "../../icons/File1";
import "./ButtonStyle.css";
import { uploadData } from 'aws-amplify/storage';
import { uploadFile } from '../../helpers/UploadFile'

export const Button = ({ className }) => {

    const { setFilePath, setFileState, setSelectedFile } = useContext(Context);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        if (file && file["name"].slice(-4) == ".pdf") {
            setSelectedFile(file);  
            uploadFile(file); //uncomment when testing is done
            const filePath = `input/${file.name}`;
            setFilePath(filePath);
            setFileState(1)
        }
        else {
            setFileState(2)
        }
    };

    function handleClick() {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    }

    return (
        <div className="buttonWrapper">
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
            <div className="button" onClick={() => handleClick()}>
                <File1 className="file" color="#F5F5F5" />
                <button className="text-wrapper">Select File</button>
            </div>
        </div>
    );
};