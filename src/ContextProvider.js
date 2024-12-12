import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [presignedUrl, setPresignedUrl] = useState(null);
    const [filePath, setFilePath] = useState(null);
    const [fileReady, setFileReady] = useState(false);
    const [fileState, setFileState] = useState(0);

    return (
        <Context.Provider value={{ presignedUrl, setPresignedUrl, filePath, setFilePath, fileReady, setFileReady, fileState, setFileState }}>
            {children}
        </Context.Provider>
    );
};