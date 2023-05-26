import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home/home.jsx';
import Rental from "./pages/Rental/rental.jsx";
import About from './pages/About/about.jsx';
import Error from './pages/Error/error.jsx';

const RoutesFile = (
    <React.Fragment>
        <Route path="/" element={<Home />} />
        <Route path="/rental/:id" element={<Rental />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
    </React.Fragment>
);

export default RoutesFile;