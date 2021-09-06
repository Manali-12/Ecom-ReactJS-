import React, { useState } from 'react'
import "./ResetPassword.scss";
import { makeStyles, TextField } from '@material-ui/core';
import { auth } from '../../Firebase/utilities';
import { sendPasswordResetEmail } from '@firebase/auth';
import { useHistory } from 'react-router';


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


export default function ResetPassword() {

    const classes = useStyles();
    const [email, setemail] = useState("");
    const [Error, setError] = useState(false)
    const history = useHistory();

    function handleClick(e) {
        e.preventDefault();
        const config = {
            url: "http://localhost:3000/login"
        }
        sendPasswordResetEmail(auth, email, config)
            .then(() => {
                history.push("/login");
                console.log("yep")
            })
            .catch(() => {
                setError(true);
                console.log("nope");
            });
        console.log("email, password")

    };

    return (
        <div className="Rpassword">
            <div className="Rpassword-wrap">
                <h3>Enter you email</h3>

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
                        {Error ? <h3 style={{ color: "#FF96AD" }}>Email not Found</h3> : null}
                        <button
                            className="button-pink"
                        >
                            Reset Password
                        </button>
                    </form>
                </div>



            </div>
        </div>
    )
}
