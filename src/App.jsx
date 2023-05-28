//importation du module react
import React from "react";

//importation du composant depuis react-router
import { Routes } from "react-router-dom";

//importation du fichier de configuration des routes
import RoutesFile from "./routes";

//importation des composants réutilisés
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

//importation du CSS
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Header />
        <Routes>
          {RoutesFile}
        </Routes>
      </div>
      <Footer />
    </React.StrictMode>
  );
}

export default App;