import { Button3 } from "../../components/Button3";
import { Button2 } from "../../components/Button2";
import { Button } from "../../components/Button";
import { PdfContainer } from "../../components/PdfContainer";
import { TextBox } from "../../components/TextBox";
import "./IphoneProMaxStyle.css";

export const IphoneProMax = () => {

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

                    <Button />

                    <PdfContainer/>

                    <Button2/>

                    <Button3/>

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
