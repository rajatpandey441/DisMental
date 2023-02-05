import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container-xl">
        <Header />
      </div>
    </div>
  );
}

export default App;
