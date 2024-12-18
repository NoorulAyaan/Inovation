import React from "react";
import "./Elevenright.css";

function Elevenright(){
    return(
        <div id="elevenright">
            <form action="" id="form">
                <p id="naam">Name</p>
                <input type="text" id="firstname"/>
                <input type="text" id="lastname"/>
                <div id="parts">
                    <p id="first">First</p>
                    <p id="last">Last</p>
                </div>
                <p id="male">Email</p>
                <input type="text" id="yourmail"/>
                <p id="yourmessage">Message</p>
                <textarea name="" id="yourtextarea"></textarea><br/>
                <button id="submit-form">SUBMIT</button>
            </form>
        </div>
    );
}

export default Elevenright