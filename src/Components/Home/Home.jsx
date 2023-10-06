// LandingPage.jsx
import React from 'react';
import Top from './Top';
import Deals from './Deals';
import IndustrySelector from './IndustrySelector';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div classname="overflow-hidden">
      <Top />
      <Deals />
      <IndustrySelector />
      <Footer />
    </div>
  );
};

export default LandingPage;
