import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import App from "./App.jsx";
import { ConversationProvider } from "./context/ConversationContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <AuthContextProvider>
        <ConversationProvider>
          <App />
          <Toaster />
        </ConversationProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </>
);
