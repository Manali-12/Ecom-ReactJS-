import React, { useState } from 'react'
import "../SignUp/SignUp.scss"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



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

export default function SignUp() {

    const [details, setdetails] = useState({});
    const [displayName, setdisplayName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    function handleClick(e) {
        e.preventDefault();
        setdetails(
            {
                "displayName": displayName,
                "email": email,
                "password": password,
                "confirmPassword": confirmPassword
            }
        );
    };


    const classes = useStyles();
    return (
        <div className="sign_up">
            <div className="signup-wrap">
                <h2>Sign Up</h2>
                <div className="form-div">
                    <form className="form" onSubmit={(e) => {
                        handleClick(e);
                        console.log(details);
                    }}>
                        <TextField
                            className={classes.formLabels}
                            color="secondary"
                            label="Name"
                            name="displayName"
                            value={displayName}
                            onChange={(e) => {
                                setdisplayName(e.target.value);
                            }
                            } />
                        <TextField
                            className={classes.formLabels}
                            color="secondary"
                            label="Email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
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
                        <TextField
                            className={classes.formLabels}
                            color="secondary"
                            label="Confirm password"
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => {
                                setconfirmPassword(e.target.value);
                            }
                            } />
                        <button
                            className="button-pink"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <h3>OR</h3>
                <button

                    className="button-pink Gbutton">
                    Sign up with Google
                </button>
            </div>
        </div>
    )
}


