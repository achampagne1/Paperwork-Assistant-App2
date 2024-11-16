import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [presignedUrl, setPresignedUrl] = useState(null);
    const [filePath, setFilePath] = useState(null);

    return (
        <Context.Provider value={{ presignedUrl, setPresignedUrl, filePath, setFilePath }}>
            {children}
        </Context.Provider>
    );
};