import React, { useState, useContext } from "react";
import { Context } from "../../ContextProvider";
import { Play } from "../../icons/Play";
import "./Button2Style.css";
import { uploadData } from 'aws-amplify/storage';
import { uploadFile } from '../../helpers/UploadFile'

export const Button2 = ({ className }) => {

    const { setPresignedUrl } = useContext(Context);
    const { filePath } = useContext(Context);
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);

    const handleToggleRecording = async () => {
        if (!isRecording) {
            // Request microphone access
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);

                const audioChunks = [];
                recorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                };

                recorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    audioFileName = filePath.slice(6, -4) + "_recording.wav";
                    const audioFile = new File([audioBlob], audioFileName, { type: 'audio/wav' });
                    uploadFile(audioFile);
                    audioFileName = "input/"+audioFileName;
                    fetchURL(audioFileName);
                };

                recorder.start();
                setIsRecording(true);
            } catch (err) {
                console.error("Microphone access denied", err);
            }
        } else {
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

    function fetchURL(audioFileName) {
        //api payload
        const s3Event = {
            bucket: "paperworkassistantapd10c8a12ee344de389eeaea8689c7d33-main",
            file: filePath,
            audio: audioFileName
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
                console.log("Pre-signed URL:", data);
                setPresignedUrl(data.url);
            })
            .catch((error) => {
                console.error("Error fetching pre-signed URL:", error);
            });
    }

    return (
        <div className={`button2 ${className}`}>
            <div className="button2" onClick={handleToggleRecording}>
                <Play className="icon-instance-node" color="white" />
                <div className="text-wrapper3">
                    {isRecording ? "Stop" : "Record"}
                </div>
            </div>
        </div>
    );
};