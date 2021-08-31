import React from 'react';
import "./style.scss";
import Logo from "./../../images/logo.png"
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo image"></img>
                    </Link>
                </div>
                <div className="list_links">
                    <ul>
                        <li>
                            <Link to="/registration" className="register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login" className="login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
