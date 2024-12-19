import React, { createContext, useState, useEffect } from 'react';
import { debugLog } from './helpers/DebugPrinter'

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [presignedUrl, setPresignedUrlInternal] = useState(null);
    const [fileReady, setFileReadyInternal] = useState(false);
    const [fileState, setFileStateInternal] = useState(0);
    const [selectedFile, setSelectedFileInternal] = useState(null);
    const [fileName, setFileNameInternal] = useState(null);

    // Debugging setters
    const setPresignedUrl = (value) => {
        debugLog("Updating presignedUrl:", { previous: presignedUrl, new: value })
        setPresignedUrlInternal(value);
    };

    const setFileName = (value) => {
        debugLog("Updating fileName:", { previous: fileName, new: value });
        setFileNameInternal(value);
    };

    const setFileReady = (value) => {
        debugLog("Updating fileReady:", { previous: fileReady, new: value });
        setFileReadyInternal(value);
    };

    const setFileState = (value) => {
        debugLog("Updating fileState:", { previous: fileState, new: value });
        setFileStateInternal(value);
    };

    const setSelectedFile = (value) => {
        //console.log("Updating fileState:", { previous: fileState, new: value });
        setSelectedFileInternal(value);
    };


    return (
        <Context.Provider
            value={{
                presignedUrl,
                setPresignedUrl,
                fileReady,
                setFileReady,
                fileState,
                setFileState,
                selectedFile,
                setSelectedFile,
                fileName,
                setFileName,
            }}
        >
            {children}
        </Context.Provider>
    );
};
