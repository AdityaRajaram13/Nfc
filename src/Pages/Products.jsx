// src/ProductPage.js
import React from 'react';
import metalcard from "../assets/Images/Goldcard.jpg";
import metalcard1 from "../assets/Images/Multicolor.jpg";


const ProductCard = ({ title, description, imageUrl }) => {
    return (
      <div className="max-w-xs mx-auto p-2 border-2 border-blue-950 rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105" style={{ backgroundColor: "#111536" }}>
        <div className="relative overflow-hidden h-48"> {/* Increased image height */}
          <img src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-t-lg" />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-Poppins font-semibold mb-2">{title}</h2>
          <p className="text-white font-Poppins mb-2">{description}</p>
          <div className="flex font-Poppins justify-end">
            <button className="px-3 py-1 bg-gradient-to-t from-blue-600 to-violet-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  };

const ProductPage = () => {
  const products = [
    {
      title: 'NFC Business Card - Metal Edition',
      description: 'Introducing our premium NFC business card crafted from durable metal material. Make a lasting impression with modern technology.',
      imageUrl: '/path/to/metal-card-image.jpg'
    },
    {
      title: 'NFC Business Card - Plastic Edition',
      description: 'Our plastic NFC business card offers affordability without compromising functionality. Perfect for startups and small businesses.',
      imageUrl: '/path/to/plastic-card-image.jpg'
    },
    {
        title: 'NFC Business Card - Metal Edition',
        description: 'Introducing our premium NFC business card crafted from durable metal material. Make a lasting impression with modern technology.',
        imageUrl: '/path/to/metal-card-image.jpg'
      },
      {
        title: 'NFC Business Card - Plastic Edition',
        description: 'Our plastic NFC business card offers affordability without compromising functionality. Perfect for startups and small businesses.',
        imageUrl: '/path/to/plastic-card-image.jpg'
      },
    // Add more products as needed
  ];

  return (
<div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 text-white py-10">
      <h1 className="text-5xl text-white mt-12 font-Poppins font-bold mb-6">Our Products</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
          key={index}
          title={product.title}
          description={product.description}
          imageUrl={index % 2 === 0 ? metalcard : metalcard1} // Alternating images
        />
        
        ))}
      </div>
    </div>
  );
};

export default ProductPage;