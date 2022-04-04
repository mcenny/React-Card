import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

// THIS WORKS FOR BUSINESS CARD SOLO PROJECT

import App from "./components/Business card/App";
import "./components/Business card/BusinessCardStyle.css";

ReactDOM.render(
    <div className="container">
        <App/>
    </div>,
    document.getElementById('root')
)

