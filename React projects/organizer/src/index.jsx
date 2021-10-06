import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import NavigationRouter from "./Components/NavigationRouter/NavigationRouter";
import Contacts from "./Components/Contacts/Contacts";


var destination = document.querySelector("#container");

var appWrapper = {
    display: "flex",
    width: "100%",
};

ReactDOM.render(
    <div style={appWrapper}>
        <div className="wrapper mainWrapper" style={appWrapper}>
            <Contacts/>
            <NavigationRouter/>
        </div>
    </div>,
    destination
);