import React from "react";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
import Counter from "./components/Counter"
import UpdateValue from "./components/UpdateValue";
import UsingUseReducer from "./components/UsingUseReducer";
import "./App.css";


function App() {
  return (
    <div className="App">
      Hello
      <Counter/>
      <UpdateValue/>
      <UsingUseReducer/>
    </div> 
  );
}

export default App;
