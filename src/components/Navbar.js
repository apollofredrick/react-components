import React from "react";
import download from './download.png';

const Navbar = () => {
    return(
        <nav className="nav">
            <img src={download} alt="react logo" className="nav--icon"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;