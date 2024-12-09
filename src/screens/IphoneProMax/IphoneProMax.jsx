import React from "react";
import { Button3 } from "../../components/Button3";
import { Button2 } from "../../components/Button2";
import { Button } from "../../components/Button";
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

          <Button className="button-instance" />

          <Button2 className="button2-instance" />

          <Button3 className="button3-instance" />

          <div className="rectangle" />

          <p className="instructions-click">
            Instructions: <br />
            Click “Select File” to choose the file you want filled out.
            <br />
            Click “Record”&nbsp;&nbsp;and speak into the microphone as if you{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;were telling someone how to fill
            it out.
            <br />
            Click “Stop”. The AI model will automatically <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;take your speech and
            automatically transcribe it to the
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.
            <br /> Click “Get Output File” to download the filled out file.
          </p>
        </div>
      </div>
    </div>
  );
};
