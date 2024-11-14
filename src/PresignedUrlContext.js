import React, { createContext, useState, useEffect } from 'react';

export const PresignedUrlContext = createContext();

export const PresignedUrlProvider = ({ children }) => {
    const [presignedUrl, setPresignedUrl] = useState(null);

    useEffect(() => {
        if (presignedUrl) {
            console.log("Updated presigned URL:", presignedUrl);
        }
    }, [presignedUrl]);

    return (
        <PresignedUrlContext.Provider value={{ presignedUrl, setPresignedUrl }}>
            {children}
        </PresignedUrlContext.Provider>
    );
};