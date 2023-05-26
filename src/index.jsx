//importation des modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

//création de la racine de notre app associé à un élément HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   //composant permettant la gestion de la navigation côté client, fournissant un contexte de routage
   <BrowserRouter>
      <App />
   </BrowserRouter>
);

