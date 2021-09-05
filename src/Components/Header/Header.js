import React from 'react';
import "./style.scss";
import Logo from "./../../images/logo.png"
import { Link } from 'react-router-dom';
import { auth } from "../../Firebase/utilities"

export default function Header(props) {
    const { user, setuser } = props;
    let currentUser = user.currentUser;
    console.log(user)
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="logo image"></img>
                    </Link>
                </div>
                <div className="list_links">
                    {currentUser ? (
                        <ul>
                            <li>
                                <span onClick={() => {
                                    auth.signOut();
                                    setuser({ currentUser: null })

                                }}
                                    className="logout">
                                    Logout</span>
                            </li>
                            <li>
                                <Link to="/login" className="login">My Account</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            <li>
                                <Link to="/registration" className="register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login" className="login">Login</Link>
                            </li>
                        </ul>
                    )}

                </div>
            </div>
        </div>
    )
}
