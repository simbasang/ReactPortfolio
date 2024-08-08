import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/App.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Toaster />
    </div>
    <App />
  </React.StrictMode>
);
