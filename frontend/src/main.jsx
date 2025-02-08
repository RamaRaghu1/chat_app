import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <>
<RouterProvider router={router}/>
<Toaster />
</>
);
