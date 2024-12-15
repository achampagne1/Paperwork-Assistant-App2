import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [presignedUrl, setPresignedUrlInternal] = useState(null);
    const [filePath, setFilePathInternal] = useState(null);
    const [fileReady, setFileReadyInternal] = useState(false);
    const [fileState, setFileStateInternal] = useState(0);

    // Debugging setters
    const setPresignedUrl = (value) => {
        console.log("Updating presignedUrl:", { previous: presignedUrl, new: value });
        setPresignedUrlInternal(value);
    };

    const setFilePath = (value) => {
        console.log("Updating filePath:", { previous: filePath, new: value });
        setFilePathInternal(value);
    };

    const setFileReady = (value) => {
        console.log("Updating fileReady:", { previous: fileReady, new: value });
        setFileReadyInternal(value);
    };

    const setFileState = (value) => {
        console.log("Updating fileState:", { previous: fileState, new: value });
        setFileStateInternal(value);
    };

    return (
        <Context.Provider
            value={{
                presignedUrl,
                setPresignedUrl,
                filePath,
                setFilePath,
                fileReady,
                setFileReady,
                fileState,
                setFileState,
            }}
        >
            {children}
        </Context.Provider>
    );
};
