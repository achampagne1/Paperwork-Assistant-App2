import React from "react";
import ReactDOMClient from "react-dom/client";
import { App } from "./App";
import { Amplify }  from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import awsconfig from './aws-exports';

Amplify.configure(amplifyconfig);
Amplify.configure(awsconfig);

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
