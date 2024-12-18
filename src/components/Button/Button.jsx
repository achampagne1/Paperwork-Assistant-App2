import React, { useState, useContext } from "react";
import { Context } from "../../ContextProvider";
import { File1 } from "../../icons/File1";
import "./ButtonStyle.css";
import { uploadData } from 'aws-amplify/storage';
import { uploadFile } from '../../helpers/UploadFile'

export const Button = ({ className }) => {

    const {setFileState, setSelectedFile, setFileName } = useContext(Context);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        let randomDecimal = Math.random();
        fileName = "input/" + file.name.slice(0, -4) + randomDecimal + file.name.slice(-4);
        const result = await uploadFile(file);
        console.log(result);
        setFileState(result);
        if (result == 4 || result == 6) {
            setFileName(fileName);
            setSelectedFile(file); 
        }
    };

    function handleClick() {
        const fileInput = document.getElementById('fileInput');
        fileInput.click();
    }

    return (
        <div className="buttonWrapper" onClick={() => handleClick()}>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={handleFileChange} />
            <div className="button">
                <File1 className="file" color="#F5F5F5" />
                <button className="text-wrapper">Select File</button>
            </div>
        </div>
    );
};