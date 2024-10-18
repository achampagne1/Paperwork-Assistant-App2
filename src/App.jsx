import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
  return <RouterProvider router={router} />;
};
