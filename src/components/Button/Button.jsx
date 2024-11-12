import React, { useState } from "react";
import { File1 } from "../../icons/File1";
import "./style.css";
import "../../screens/IphoneProMax/style.css"
import { uploadData } from 'aws-amplify/storage';

export const Button = ({ className }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = async (event) => {
        filePath = ""
        const file = event.target.files[0];
        setSelectedFile(file);  // Save the selected file in state
        console.log("Selected file:", file);

        if (file) {
            try {
                filePath = "input/" + file.name;
                const result = await uploadData({
                    path: filePath,
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
        fetchURL(filePath);
    };

    function fetchURL(filePath) {
        const s3Event = {
            bucket: "paperworkassistantapd10c8a12ee344de389eeaea8689c7d33-dev",
            object: filePath
        };
        apiEndpoint = "https://1yj20j1n7c.execute-api.us-east-2.amazonaws.com/callLambda";
        fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(s3Event), 
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Assuming the Lambda function returns the pre-signed URL in the response
                console.log("Pre-signed URL:",data);
                presignedLink = data.url
                // Automatically download the file
                const link = document.createElement("a");
                link.href = presignedLink;
                link.download = "output-file.pdf"; // You can specify the filename
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch((error) => {
                console.error("Error fetching pre-signed URL:", error);
            });
    }

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