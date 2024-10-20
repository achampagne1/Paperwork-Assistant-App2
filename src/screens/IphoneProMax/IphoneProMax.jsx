import React from "react";
import { Button } from "../../components/Button";
import { Play } from "../../icons/Play";
import { Size32 } from "../../icons/Size32";
import "./style.css";

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
          <div className="button-3">
            <Play className="icon-instance-node" color="white" />
            <div className="text-wrapper-4">Record</div>
          </div>

          <div className="button-4">
            <Size32 className="icon-instance-node" color="white" />
            <div className="text-wrapper-4">Get Output File</div>
          </div>

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
            Click “Stop Recording”. The AI model will automatically <br />
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
