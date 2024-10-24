import React from "react";
import "./Five.css";
import Fiveone from "./Fiveone/Fiveone";
import Fivetwo from "./Fivetwo/Fivetwo";
import Fivethree from "./Fivethree/Fivethree"

function Five(){
    return(
        <div id="five">
            <Fiveone/>
            <Fivetwo/>
            <Fivethree/>
        </div>
    );
}

export default Five;