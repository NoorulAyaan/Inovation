import React from "react";
import "./Nine.css";
import Nineleft from "./Nineleft/Nineleft";
import Nineright from "./Nineright/Nineright";

function Nine(){
    return(
        <div id="nine">
            <h1 id="client">Client result</h1>
            <div id="nine1">
                <Nineleft/>
                <Nineright/>
            </div>
        </div>
    );
}

export default Nine