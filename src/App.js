import "./App.scss"
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Registration from "./Pages/Registration/Registration";
import { Route, Switch, Redirect } from "react-router-dom"
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login"
import { useEffect, useState } from "react";
import { auth, handleUserProfile } from "./Firebase/utilities"
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "@firebase/firestore";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import { setCurrentUser } from "./Redux/Action/Action";
import { connect } from "react-redux";


function App(props) {
  const { setCurrentUser } = props;
  console.log(props, "props");

  useEffect(() => {
    onAuthStateChanged(auth, async provider => {
      console.log(provider, "check on");
      if (provider) {
        await handleUserProfile(provider);
        console.log(provider, "loggedin!");
        provider.getIdTokenResult().then((token) => {
          console.log(setCurrentUser, "token setCurrentUser1")
          setCurrentUser({ currentUser: token });
          console.log(setCurrentUser, "token setCurrentUser")
        })
      }
      else {
        setCurrentUser({ currentUser: null });

      }
    })

  }, []);


  const { currentUser } = props.currentUser.user;
  console.log(setCurrentUser, "App.js insider");
  return (

    <div className="app">
      <Header />
      <div className="page_view">
        <Switch>
          <Route path="/" exact ><Homepage /></Route>
          <Route path="/registration" render={() => currentUser ? <Redirect to="/" /> : <Registration />}></Route>
          <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <Login />} />
          <Route path="/forgotpassword" render={() => <ForgotPassword />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = (user) => ({
  currentUser: user,
}
);


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
