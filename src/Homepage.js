import './Homepage.css';
import React from 'react';
import Menu from './components/Menu';
import AssinaturaNewsletter from './components/AssinaturaNewsletter';
import ComoConseguir from './components/ComoConseguir.js';

function Homepage() {
  return (
    <main>
      <Menu />
      <AssinaturaNewsletter />
      <ComoConseguir />
    </main>
  );
}

export default Homepage;
