import React from 'react';
import Login from './Login';
import imageSrc from '../../assets/Images/admin.png';

const Home = () => {
  return (  
    <div className="flex flex-col  md:flex-row items-center min-h-screen" style={{ backgroundColor: "#0D0F23" }}>
      {/* Left side with image */}
      
      <div className="flex-4 p-4 flex items-center justify-center md:justify-end">
        <img className="max-w-full h-auto md:max-w-none" src={imageSrc} alt="Image" />
      </div>
      
      {/* Right side with login */}
      <div className="flex-[0.5] p-4 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl text-center font-bold text-white mb-4 md:mb-8">Welcome to aVkardz Admin Panel..</h1>
        <Login />
        </div>
    </div>
  );
};

export default Home;
