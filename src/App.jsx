import React from "react";
import { Routes } from "react-router-dom";
import { RouteFile } from "./routes";

import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Routes>
          {RouteFile}
        </Routes>
      </div>
      <Footer />
    </React.StrictMode>
  );
}

export default App;