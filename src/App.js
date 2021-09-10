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
  useEffect(() => {
    onAuthStateChanged(auth, async provider => {
      if (provider !== null) {
        await handleUserProfile(provider)
        console.log("loggedin!");
        provider.getIdTokenResult().then((token) => {
          setCurrentUser({ currentUser: token });
        })
      }
    })

  }, []);

  const { currentUser } = props;
  return (

    <div className="app">
      <Header />
      <div className="page_view">
        <Switch>
          <Route path="/" exact ><Homepage /></Route>
          <Route path="/registration" ><Registration /></Route>
          <Route path="/login" render={() => currentUser ? <Redirect to="/" /> : <Login />} />
          <Route path="/forgotpassword" render={() => <ForgotPassword />} />

        </Switch>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => setCurrentUser(user)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
