import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import lawimage from "../../assets/Images/law.png";
import docimage from "../../assets/Images/doct.png";
import caimage from "../../assets/Images/ca.png";
import studimage from "../../assets/Images/stud.png";
import bsimage from "../../assets/Images/bs.png";


const ProfessionDisplay = () => {
  const containerStyle = {
    minHeight: '30rem',
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,             // Adjust slide transition speed for smoother sliding
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 1100,     // Set the autoplay speed in milliseconds (e.g., 3 seconds)
    pauseOnHover: true,      // Pause autoplay on hover for a smoother user experience
    draggable: true,         // Enable dragging for smoother manual navigation
    swipeToSlide: true,      // Enable swipe gestures for smoother navigation on touch devices
    cssEase: "ease-in-out",  // Use ease-in-out for smoother transitions
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
    ],
  };
  
  return (
    <div className="p-6 md:p-8 overflow-hidden text-center bg-gray-900" style={containerStyle}>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-16 mt-4 md:mt-8 text-white">
        Explore Different Professions
      </h2>
      <Slider {...sliderSettings}>
      <div className="px-2 md:w-1/2 lg:w-1/3">
  <div className="p-6 rounded-md bg-gray-700 h-[295px] md:h-60  flex flex-col justify-between">
    <div className="mb-4 ">
      <img src={lawimage} alt="Lawyer" className="w-10 h-10 mx-auto mb-2" />
      <h3 className="text-xl font-semibold text-white">Lawyer</h3>
    </div>
    <p className="text-gray-300 text-center">Legal professional specializing in various areas of law.</p>
  </div>
</div>
        <div className="px-2 md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-md bg-gray-700 h-[295px] md:h-60 flex flex-col justify-between">
            <div className="mb-4">
              <img src={docimage} alt="Doctor" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-white">Doctor</h3>
            </div>
            <p className="text-gray-300">Medical professional dedicated to patient health.</p>
          </div>
        </div>
        <div className="px-2 md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-md bg-gray-700 h-[295px] md:h-60 flex flex-col justify-between">
            <div className="mb-4">
              <img src={caimage} alt="CA" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-white">Charted Accountant (CA)</h3>
            </div>
            <p className="text-gray-300">Financial expert specializing in accounting and auditing.</p>
          </div>
        </div>
        <div className="px-2 md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-md bg-gray-700 h-[295px] md:h-60 flex flex-col justify-between">
            <div className="mb-4">
              <img src={studimage} alt="Student" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-white">Student</h3>
            </div>
            <p className="text-gray-300">A person pursuing education in a specific field.</p>
          </div>
        </div>
        <div className="px-2 md:w-1/2 lg:w-1/3">
          <div className="p-6 rounded-md bg-gray-700 h-[295px] md:h-60 flex flex-col justify-between">
            <div className="mb-4">
              <img src={bsimage} alt="Business Professional" className="w-16 h-16 mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-white">Business Professional</h3>
            </div>
            <p className="text-gray-300">Entrepreneur or business executive managing a company.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProfessionDisplay;