import React from "react";
import Camera from "./Camera";
import "./App.css";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Show an Ingredient</h1>
      <Camera />
      <button className = "random-button"> Show Recipe </button>
    </div>
  );
}

export default App;
