import React from "react";
import "./Elevenleft.css";

function Elevenleft(){
    return(
        <div id="elevenleft">
            <h1 id="getintouch">Get in touch</h1>
            <p id="welcome" className="name">
                Welcome to the Innovations business website template 
                for Elementor by OceanWP. Launch your website 
                effortlessly without worrying about design or 
                inspiration.
            </p>
            <p id="youcan" className="name">You can customize everything.</p>
            <p id="wewillhelp" className="name">We’ll help you get started fast, and the rest is up to you.</p>
            <div id="eleventop">
                <h2 id="phone"><i class="fa-solid fa-phone" id="phoon"></i>Phone</h2>
                <h2 id="address"><i class="fa-solid fa-location-dot" id="adres"></i>Address</h2>
            </div>
            <div id="eleventop1">
                <p id="phonenumber">+11 234 567 89</p>
                <p id="ruska">Ruska, Wroclaw, Poland.</p>
            </div>
            <div id="elevenbottom">
                <h2 id="mobile"><i class="fa-solid fa-mobile-screen-button" id="mobil"></i>Mobile</h2>
                <h2 id="email"><i class="fa-solid fa-envelope" id="mail"></i>Email</h2>
            </div>
            <div id="elevenbottom1">
                <p id="mobilenumber">+11 234 567 89</p>
                <p id="email-address">contact@yourowpsite.com</p>
            </div>
        </div>
    );
}

export default Elevenleft