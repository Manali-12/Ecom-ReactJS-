import React from 'react';
import "./style.scss";
import Logo from "./../../images/logo.png"
import { Link } from 'react-router-dom';
import { auth } from "../../Firebase/utilities"
import { connect } from "react-redux";
import { setCurrentUser } from '../../Redux/Action/Action';


function Header(props) {
    // const { setCurrentUser } = props;
    let { currentUser } = props;
    console.log(props, "Header");
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
                                    currentUser = null;
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
const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});
export default connect(mapStateToProps, null)(Header);