import "./App.scss"
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import Registration from "./Pages/Registration/Registration";
import { Route, Switch } from "react-router-dom"
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login"



function App() {
  return (
    <div className="app">
      <Header />
      <div className="page_view">
        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
