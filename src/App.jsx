import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ContextProvider } from './ContextProvider';
import { Desktop } from "./screens/Desktop";
import { IphoneProMax } from "./screens/IphoneProMax";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <IphoneProMax />,
  },
  {
    path: "/iphone-16-pro-max-1",
    element: <IphoneProMax />,
  },
  {
    path: "/desktop-1",
    element: <Desktop />,
  },
]);

export const App = () => {
    return (
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    );
};
