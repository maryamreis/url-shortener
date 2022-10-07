import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Shortener } from "./components/Shortener";
import { URLTable } from "./components/UrlTable";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Shortener />
      <URLTable />
    </div>
  );
}

export default App;
