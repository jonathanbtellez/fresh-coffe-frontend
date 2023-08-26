import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CoffeProvider } from "./context/CoffeProvider";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoffeProvider>
      <RouterProvider router={router} />
    </CoffeProvider>
  </React.StrictMode>
);
