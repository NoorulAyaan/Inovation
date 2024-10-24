import React from "react";
import "./Hero.css"
import Lefthero from "./Left-hero/Lefthero";
import Righthero from "./Right-hero/Righthero";

function Hero(){
    return(
        <div id="hero">
            <Lefthero/>
            <Righthero/>
        </div>
    );
}

export default Hero