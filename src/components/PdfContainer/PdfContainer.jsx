import React, { useEffect, useContext } from "react";
import './PdfContainerStyle.css';
import * as pdfjsLib from "pdfjs-dist";
import { GlobalWorkerOptions } from "pdfjs-dist";
import { Context } from "../../ContextProvider";

export const PdfContainer = ({ className }) => {
    const { fileState } = useContext(Context);
    const { filePath } = useContext(Context);

    useEffect(() => {
        console.log("here")
        if (fileState !== 1) {
            return; 
        }
        // Set the workerSrc for PDF.js
        GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.9.155/pdf.worker.min.mjs';

        const renderPDF = () => {
            const url = "testForm1.pdf"; // Adjust the path as needed
            const containerWidth = Math.min(window.innerWidth, 629); // Ensure it fits within the container

            // Load the PDF document
            const loadingTask = pdfjsLib.getDocument(url);
            loadingTask.promise
                .then((pdf) => {
                    // Fetch the first page of the PDF
                    pdf.getPage(1).then((page) => {
                        // Calculate scale based on container width
                        const viewport = page.getViewport({ scale: 1 }); // Get default dimensions
                        const scale = containerWidth / viewport.width; // Fit to container width

                        // Create scaled viewport
                        const scaledViewport = page.getViewport({ scale });

                        // Prepare the canvas element
                        const canvas = document.getElementById("pdfCanvas");
                        const context = canvas.getContext("2d");

                        // Set the canvas size to the scaled viewport dimensions
                        canvas.height = scaledViewport.height;
                        canvas.width = scaledViewport.width;

                        // Render the PDF page into the canvas
                        const renderContext = {
                            canvasContext: context,
                            viewport: scaledViewport,
                        };
                        page.render(renderContext);
                    });
                })
                .catch((error) => {
                    console.error("Error loading PDF:", error);
                });
        };

        // Initial render
        renderPDF();

        // Re-render on window resize
        const handleResize = () => {
            renderPDF();
        };
        window.addEventListener("resize", handleResize);

        // Cleanup event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [fileState]);

    return (
        <div className="pdfContainer2">
            {fileState === 1 ? (
                <canvas id="pdfCanvas"></canvas>
            ) : (
                <div className="blankBox">
                    {/* Add styles for the blank box in PdfContainerStyle.css */}
                </div>
            )}
        </div>
    );
};
