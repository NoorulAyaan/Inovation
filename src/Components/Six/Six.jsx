import React from "react";
import "./Six.css";
import Sixone from "./Sixone/Sixone";
import Sixtwo from "./Sixtwo/Sixtwo";
import Sixthree from "./Sixthree/Sixthree";

function Six(){
    return(
        <div id="six">
            <p id="prace">Package pricing</p>
            <div id="six1">
            <Sixone/>
            <Sixtwo/>
            <Sixthree/>
            </div>
        </div>
    );
}

export default Six