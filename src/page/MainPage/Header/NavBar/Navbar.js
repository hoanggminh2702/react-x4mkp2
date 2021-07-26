import React from 'react';
import {Link} from "react-router-dom";
import "./NavBar.css"
import logo from "../imgsource/ocean_logo.png"

const Navbar = () => {
    return (
        <div className="container">
            <div className="navbar-collapse">

                <img src={logo} style={{width: "15%", height: "15%"}}/>

                <div>
                    <ul className="navbar-items">
                        <li>
                            <Link to="/homepage">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/post">Post</Link>
                        </li>

                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;