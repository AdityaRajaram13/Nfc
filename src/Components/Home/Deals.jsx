import React from 'react';
import dealimage from "../../assets/Images/card.png";

const HotDealsComponent = () => {
  return (
    <div className="bg-indigo-950 p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex-shrink-0 mr-0 md:mr-6 mb-4 md:mb-0">
          <img
            src={dealimage}
            alt="Hot Deals Image"
            className="h-62 md:h-62 w-62 md:w-62 object-contain animate-tada"
          />
        </div>
        <div className="flex-grow flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-6xl font-Poppins font-bold text-white text-center mb-6 md:mb-20">
            Hot Deals
          </h2>
          <p className="text-gray-300 text-lg md:text-2xl text-center mb-4">
            Who doesn’t love a sale? We’ve got you covered with limited-time offers on our NFC <br /> business cards.
            Get your digital business card at a discounted price for a limited period.
          </p>
          <button className="relative font-Poppins bg-pink-700 hover:bg-pink-800 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full overflow-hidden group">
            Shop Now
            <span className="absolute inset-0 bg-pink-900 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
            <i className="absolute right-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotDealsComponent;
