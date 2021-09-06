import React from 'react'
import "../ForgotPassword/ForgotPassword.scss"
import side1 from "../../images/Lback6.png"
import side2 from "../../images/Lback4.png"
import ResetPassword from '../../Components/ResetPassword/ResetPassword';


export default function ForgotPassword() {
    return (
        <div className="FP-layout">
            <div className="FP-wrap">
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
            <div className="reset-password"><ResetPassword /></div>

        </div>
    )
}
