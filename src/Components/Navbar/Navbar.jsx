import React from "react";
import "./Navbar.css"
import Rightside from "./Rightside/Rightside";
import Leftside from "./Leftside/Leftside"

function Navbar() {
    return(
        <div id="navbar">
            <Leftside/>
            <Rightside/>
        </div>
    );
}

export default Navbar