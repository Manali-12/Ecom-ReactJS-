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


function App() {

  const initialState = {
    currentUser: null,
  };
  const [user, setuser] = useState({ ...initialState });
  useEffect(() => {
    onAuthStateChanged(auth, async provider => {
      if (provider !== null) {
        await handleUserProfile(provider)
        console.log("loggedin!");
        provider.getIdTokenResult().then((token) => {
          setuser({ currentUser: token });
        })
      }
    })

  }, []);
  console.log(user);


  return (
    <div className="app">
      <Header user={user} setuser={setuser} />
      <div className="page_view">
        <Switch>
          <Route path="/" exact ><Homepage user={user} /></Route>
          <Route path="/registration" ><Registration user={user} /></Route>
          <Route path="/login" render={() => user.currentUser ? <Redirect to="/" /> : <Login user={user} />} />
          <Route path="/forgotpassword" render={() => <ForgotPassword />} />

        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
