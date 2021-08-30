import React from 'react';
import "./style.scss";
import Logo from "./../../images/logo.png"

export default function Header(props) {
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="logo image"></img>
                </div>
            </div>
        </div>
    )
}
