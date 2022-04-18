import './Homepage.css';
import React from 'react';
import Menu from './components/Menu';
import AssinaturaNewsletter from './components/AssinaturaNewsletter';

function Homepage() {
  return (
    <main>
      <Menu />
      <AssinaturaNewsletter />
    </main>
  );
}

export default Homepage;
