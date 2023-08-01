import React from "react";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Counter from "./components/Counter"
import UpdateValue from "./components/UpdateValue";
import "./App.css";


function App() {
  return (
    <div className="App">
      Hello
      <Counter/>
      <UpdateValue/>
    </div> 
  );
}

export default App;
