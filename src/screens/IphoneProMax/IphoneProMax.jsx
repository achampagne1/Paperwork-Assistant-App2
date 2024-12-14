import React, { useEffect } from "react";
import { Button3 } from "../../components/Button3";
import { Button2 } from "../../components/Button2";
import { Button } from "../../components/Button";
import { TextBox } from "../../components/TextBox";
import "./IphoneProMaxStyle.css";
import * as pdfjsLib from "pdfjs-dist";
import { GlobalWorkerOptions } from "pdfjs-dist";

export const IphoneProMax = () => {
    useEffect(() => {
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
    }, []);


    return (
        <div className="iphone-pro-max">
            <div className="div">
                <div className="frame">
                    <div className="text-wrapper-2">Created by Aubrey Champagne</div>

                    <button className="button-wrapper">
                        <button className="button-2">Contact</button>
                    </button>
                </div>

                <div className="frame-2">
                    <div className="text-wrapper-3">AI Paperwork Assistant</div>

                    <div className="pdf-container">
                        <canvas id="pdfCanvas"></canvas>
                    </div>

                    <Button/>

                    <Button2/>

                    <Button3/>

                    <TextBox/>

                    <p className="instructions-click">
                        Instructions: <br />
                        Click “Select File” to choose the file you want filled out.
                        <br />
                        Click “Record" and speak into the microphone as if you
                        <br />
                        were telling someone how to fill it out.
                        <br />
                        Click “Stop”. The AI model will take your speech and automatically
                        <br />
                        transcribe it to the document.
                        <br />
                        Click “File Ready” when it appears to download the filled out file.
                    </p>
                </div>
            </div>
        </div>
    );
};
