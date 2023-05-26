import React from "react";
import { Routes } from "react-router-dom";
import RoutesFile from "./routes";

import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Routes>
          {RoutesFile}
        </Routes>
        <Footer />
      </div>
    </React.StrictMode>
  );
}

export default App;