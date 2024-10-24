import React from "react";
import "./Eleven.css";
import Elevenleft from "./Elevenleftside/Elevenleft";
import Eightright from "../Eight/Eightright/Eightright";
import Elevenright from "./Elevenrightside/Elevenright";

function Eleven(){
    return(
        <div id="eleven">
            <Elevenleft/>
            <Elevenright/>
        </div>
    );
}

export default Eleven