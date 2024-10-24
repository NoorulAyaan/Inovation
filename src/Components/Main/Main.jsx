import React from "react";
import "./Main.css";
import One from "./One/One";
import Two from "./Two/Two";
import Three from "./Three/Three"

function Main(){
    return(
        <div id="main">
            <One/>
            <Two/>
            <Three/>
        </div>
    );
}

export default Main