import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import contactimage from "../../assets/Images/contact.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 relative">
      <div className="container mx-auto text-center">
        <div className="flex justify-between items-center mb-8">
          <div className="mb-6">
            <a href="/" className="flex items-center">
              <span className="text-5xl font-Poppins font-bold">Biscard</span>
            </a>
          </div>
        </div>
         <div className="grid mb-6  grid-cols-1 lg:flex md:flex md:flex-row md:justify-center lg:justify-center lg:flex-row gap-4">
            <div className="flex items-center justify-center mt-2">
              <i className="fas fa-envelope text-blue-400 mr-2"></i>
              <a href="mailto:happiness@vkardz.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-center text-xl">Support@biscard.in</a>
            </div>
            <div className="flex items-center justify-center mt-1">
              <i className="fab fa-whatsapp text-blue-400 mr-1"></i>
              <a href='https://wa.me/917011047596?text=I am looking for NFC Card' className="text-center text-xl">+917011047596</a>
            </div>
            <div className="flex items-center justify-center mt-1">
              <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
              <p className="text-center text-xl">Mumbai, Maharashtra 400614</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-gray-300">&copy; 2023. All Rights Reserved By Unipolar Technologies</p>
          <div className="mt-2 flex justify-center">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 mx-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <span className="text-gray-500 mx-2">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Refund Policy</a>
            <span className="text-gray-500 mx-2">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Disclaimer</a>
            <span className="text-gray-500 mx-2">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
