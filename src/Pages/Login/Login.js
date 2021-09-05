import React from 'react';
import "../Login/Login.scss"
import SignIn from '../../Components/SignIn/SignIn';
import side1 from "../../images/Lback6.png"
import side2 from "../../images/Lback4.png"


export default function Login(props) {
    console.log({ ...props.user })
    return (
        <div className="login-layout">
            <div className="login-wrap">
                <div className="side-1"
                    style={{
                        backgroundImage: `url(${side1})`
                    }}>
                </div>
                <div className="side-1"
                    style={{
                        backgroundImage: `url(${side2})`
                    }}>
                </div>
            </div>
            <div className="sign-in"><SignIn /></div>

        </div>
    )
}
