// React
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// React Router Dom
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
