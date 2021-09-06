import React from 'react'
import "../Registration/Registration.scss"
import SignUp from '../../Components/SignUp/SignUp'
import side1 from "../../images/Lback6.png"
import side2 from "../../images/Lback4.png"


export default function Registration() {
    return (
        <div className="registration-layout">
            <div className="registration-wrap">
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
            <div className="sign-up"><SignUp /></div>
        </div>
    )
}
