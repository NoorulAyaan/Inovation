import React from "react";
import "./Ten.css";
import Tenleft from "./Tenleft/Tenleft";
import Tenright from "./Tenright/Tenright";

function Ten(){
    return(
        <div id="ten">
            <Tenleft/>
            <Tenright/>
        </div>
    );
}

export default Ten