// LandingPage.jsx
import React from 'react';
import Top from '../Components/Home/Top';
import Deals from '../Components/Home/Deals';
import IndustrySelector from '../Components/Home/IndustrySelector';
import Footer from '../Components/Home/Footer';

const LandingPage = () => {
  return (
    <div>
      <Top />
      <Deals />
      <IndustrySelector />
      <Footer />
    </div>
  );
};

export default LandingPage;
