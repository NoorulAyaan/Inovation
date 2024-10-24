import React from "react";
import "./Seven.css";
import Sevenone from "./Sevenone/Sevenone";
import Seventwo from "./Seventwo/Seventwo";
import Seventhree from "./Seventhree/Seventhree";

function Seven(){
    return(
        <div id="seven">
            <h1 id="work">How it works</h1>
            <div id="seven1">
                <Sevenone/>
                <Seventwo/>
                <Seventhree/>
            </div>
        </div>
    );
}

export default Seven