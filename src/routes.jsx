//importation du module react
import React from 'react';

//importation du composant route depuis react-router
import { Route } from 'react-router-dom';

//importation des composants réutilisés
import Home from './pages/Home/home.jsx';
import Rental from "./pages/Rental/rental.jsx";
import About from './pages/About/about.jsx';
import Error from './pages/Error/error.jsx';

//définition des "route"
const RoutesFile = (
    <React.Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/rental/:id" element={<Rental />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
    </React.Fragment>
);

export default RoutesFile;