import React from "react";
import ReactDOMClient from "react-dom/client";
import { App } from "./App";
import { Amplify }  from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import awsconfig from './aws-exports';
import { signIn } from 'aws-amplify/auth'

Amplify.configure(amplifyconfig);
Amplify.configure(awsconfig);

const handleSignIn = async () => {
    console.log("here");
    try {
        await signIn({
            username: "achampagnecs@gmail.com",
            password: "VmiGzOoI",
        })
        console.log("here");
        // Now perform actions that require authentication
    } catch (error) {
        console.error('Error signing in', error);
    }
};
handleSignIn();

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
