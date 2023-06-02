import logo from "./logo.svg";
import "./App.css";
import Calc from "./components/Calc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Calc />
    </div>
  );
}

export default App;
