import "./App.scss"
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage"


function App() {
  return (
    <div className="app">
      <Header />
      <div className="page_view">
        <Homepage />

      </div>
    </div>
  );
}

export default App;
