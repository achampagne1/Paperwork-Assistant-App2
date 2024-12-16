import React, { useEffect, useContext } from "react";
import './PdfContainerStyle.css';
import * as pdfjsLib from "pdfjs-dist";
import { GlobalWorkerOptions } from "pdfjs-dist";
import { Context } from "../../ContextProvider";
import { TextBox } from "../../components/TextBox";

export const PdfContainer = ({ className }) => {
    const { fileState, selectedFile } = useContext(Context); // Get selectedFile from context

    useEffect(() => {
        if (fileState !== 1) {
            return;
        }

        GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.9.155/pdf.worker.min.mjs';

        const renderPDF = () => {
            const containerWidth = Math.min(window.innerWidth, 629);

            const fileReader = new FileReader();
            fileReader.onload = (event) => {
                const typedArray = new Uint8Array(event.target.result);

                // Load the PDF document from the file's content
                const loadingTask = pdfjsLib.getDocument({ data: typedArray });
                loadingTask.promise
                    .then((pdf) => {
                        pdf.getPage(1).then((page) => {
                            const viewport = page.getViewport({ scale: 1 });
                            const scale = containerWidth / viewport.width;
                            const scaledViewport = page.getViewport({ scale });

                            const canvas = document.getElementById("pdfCanvas");
                            const context = canvas.getContext("2d");

                            canvas.height = scaledViewport.height;
                            canvas.width = scaledViewport.width;

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

            fileReader.readAsArrayBuffer(selectedFile); // Read file content as ArrayBuffer
        };

        renderPDF();

        const handleResize = () => {
            renderPDF();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [selectedFile, fileState]);


    return (
        <div
            className={`pdfContainer2 ${fileState === 1 ? "expanded" : "collapsed"}`}
        >
            {fileState === 1 ? (
                <canvas id="pdfCanvas"></canvas>
            ) : (
                <TextBox />
            )}
        </div>
    );
};
