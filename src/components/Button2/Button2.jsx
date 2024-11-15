import React, { useState, useContext } from "react";
import { Play } from "../../icons/Play";
import "./Button2Style.css";
import { uploadData } from 'aws-amplify/storage';
import { uploadFile } from '../../helpers/UploadFile'

export const Button2 = ({ className }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

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
                    uploadFile(audioBlob);
                    //audio.play(); // Play back the recording (optional)

                    // Save or process audioBlob here, e.g., upload to server
                };

                recorder.start();
                setIsRecording(true);
            } catch (err) {
                console.error("Microphone access denied", err);
            }
        } else {
            // Stop recording
            mediaRecorder.stop();
            setIsRecording(false);
        }
    };

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