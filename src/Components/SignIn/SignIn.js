import React, { useState } from 'react'
import "./SignIn.scss";
import { signInWithGoogle, auth } from '../../Firebase/utilities';
import { makeStyles, TextField } from '@material-ui/core';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    formLabels: {
        '& .MuiFormLabel-root': {
            color: "#FF96AD",
            fontSize: "1.5rem",
        },
        '& .MuiInputBase-input': {
            color: "#003638",
            fontSize: "1.5rem",
            fontWeight: 500,
            padding: "8px"
        },
        padding: "2% 0",
    },

})

export default function SignIn() {
    const classes = useStyles();

    const [details, setdetails] = useState({});
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    function handleClick(e) {
        setdetails(
            {
                "email": email,
                "password": password,
            }
        );
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password);

    };


    return (
        <div className="sign_in">
            <div className="signin-wrap">
                <h2>Login</h2>
                <div className="form-div">
                    <form className="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleClick(e);
                        }}>
                        <TextField
                            className={classes.formLabels}
                            color="secondary"
                            label="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                                console.log(email)
                            }} />
                        <TextField
                            className={classes.formLabels}
                            color="secondary"
                            label="Password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }
                            } />
                        <button
                            className="button-pink"
                        >
                            Sign In
                        </button>
                    </form></div>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        console.log("pressed");
                        return signInWithGoogle();
                    }}
                    className="button-pink Gbutton">
                    Sign in with Google
                </button>
                <Link to="/forgotpassword"><h3>Forgot Password</h3></Link>

            </div>
        </div>

    )
}
