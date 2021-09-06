import React from 'react'
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
    const classes = useStyles();
    return (
        <div className="sign_up">
            <div className="signup-wrap">
                <h2>Sign Up</h2>
                <div className="form-div">
                    <form className="form">
                        <TextField className={classes.formLabels} color="secondary" label="Name" />
                        <TextField className={classes.formLabels} color="secondary" label="Email" type="email" />
                        <TextField className={classes.formLabels} color="secondary" label="Password" type="password" />
                        <TextField className={classes.formLabels} color="secondary" label="Confirm password" type="password" />
                        <button className="button-pink">Sign Up</button>
                    </form>
                </div>
                <h3>OR</h3>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        console.log("pressed");
                    }}
                    className="button-pink Gbutton">
                    Sign up with Google
                </button>
            </div>
        </div>
    )
}


