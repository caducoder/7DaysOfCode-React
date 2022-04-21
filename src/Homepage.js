import './Homepage.css';
import React from 'react';
import Menu from './components/Menu';
import AssinaturaNewsletter from './components/AssinaturaNewsletter';
import ComoConseguir from './components/ComoConseguir.js';
import Ofertas from './components/Ofertas';

function Homepage() {
  return (
    <main>
      <Menu />
      <AssinaturaNewsletter />
      <ComoConseguir />
      <Ofertas />
    </main>
  );
}

export default Homepage;
