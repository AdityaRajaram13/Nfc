import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import contactimage from "../../assets/Images/contact.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 relative">
      <div className="container mx-auto text-center">
        <div className="flex justify-between items-center mb-8">
          <div className="mb-6">
            <a href="/" className="flex items-center">
              <span className="text-5xl font-Poppins font-bold">Biscard</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-6">
            <p className="font-semibold font-Poppins text-2xl">Company</p>
            <div className="flex items-center justify-center mt-2">
              <i className="fas fa-envelope text-blue-400 mr-2"></i>
              <a href="mailto:happiness@vkardz.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-center text-xl">Support@avkardz.com</a>
            </div>
            <div className="flex items-center justify-center mt-2">
              <i className="fas fa-phone text-blue-400 mr-2"></i>
              <p className="text-center text-xl">+91-77384 12722</p>
            </div>
            <div className="flex items-center justify-center mt-2">
              <i className="fas fa-map-marker-alt text-blue-400 mr-2"></i>
              <p className="text-center text-xl">Mumbai, Maharashtra 400-705</p>
            </div>
          </div>
          <div className="mb-6">
            <p className="font-semibold font-Poppins text-2xl">Quick Links</p>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 block mt-2 text-xl">Blogs</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 block mt-2 text-xl">Devices</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 block mt-2 text-xl">Contact</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors duration-300 block mt-2 text-xl">Quick Support</a>
          </div>
          <div className="mb-6 md:col-span-1 flex justify-center items-center">
            <img src={contactimage} alt="Contact" className="w-40 h-40" />
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
