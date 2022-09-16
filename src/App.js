import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Shortener } from "./components/Shortener";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Shortener />
    </div>
  );
}

export default App;
