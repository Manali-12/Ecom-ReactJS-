import React from 'react'
import "./SignIn.scss";
import { signInWithGoogle } from '../../Firebase/utilities';

export default function SignIn() {

    return (
        <div className="sign_in">
            <div className="sign-wrap">
                <h2>Login</h2>
                <button
                    onClick={(e) => {
                        // e.preventDefault();
                        console.log("pressed");
                        return signInWithGoogle();
                    }}
                    className="button-pink">
                    Sign in with Google
                </button>
            </div>
        </div>

    )
}
