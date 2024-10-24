import React from "react";
import "./Eight.css";
import Eightleft from "./Eightleft/Eightleft";
import Eightright from "./Eightright/Eightright";

function Eight(){
    return(
        <div id="eight">
            <Eightleft/>
            <Eightright/>
        </div>
    );
}

export default Eight