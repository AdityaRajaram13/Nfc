import React from 'react';
import Rightimage from '../../assets/Images/2.png';
import goldimage from "../../assets/Images/Goldcard.jpg";
import multiimage from "../../assets/Images/Multicolor.jpg";
import Woodimage from "../../assets/Images/Wood.jpg";

function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row mx-auto py-8" style={{ backgroundColor: '#111536' }}>
        {/* Content on the left */}
        <div className="md:w-3/5 flex justify-center items-center">
          <div className="text-center p-10 text-white">
            <h1 className="text-4xl md:text-7xl font-bold mb-2 font-Inter text-white">Create A FREE Profile For You Or Your Business</h1>
            <p className="text-lg md:text-2xl mb-4 font-Poppins text-white">We made it possible for you to create your amazing profile for you or your business. Share it like you never did before.</p>
            <button className="px-6 py-3 font-Poppins md:px-9 md:py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full animate-pulse">
              Create Profile
            </button>
          </div>
        </div>

        {/* Image on the right */}
        <div className="md:w-2/5">
          <img
            src={Rightimage}
            alt="Slide 1"
            className="w-full mt-8 md:mt-20 animate-fade-in animate-bounce"
            style={{
              animation: 'bounce 2s 2',
            }}
          />
        </div>
      </div>

      {/* why to choose */}
      <div style={{ backgroundColor: "#0D0F23" }}>
        <div className="relative top-16">
          <p className="text-center font-Inter text-white text-4xl md:text-6xl font-bold mb-16">
            Why choose US ?
          </p>
          <p className="mt-4 text-white text-lg md:text-2xl text-center italic">
            Elevate your networking game with our innovative digital business cards.<br />
            Crafted for modern professionals and businesses, our electronic cards <br />
            allow instant sharing of crucial contact details, social media profiles, website links, and more.<br />
            Stand out from the crowd and make lasting connections effortlessly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row min-h-screen items-center justify-center" style={{ backgroundColor: "#0D0F23" }}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="relative overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3 group bg-white rounded-md shadow-lg">
              <div className="h-72 md:h-96 w-full md:w-80">
                <img className="h-full w-full object-cover" src={goldimage} alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-dmserif text-3xl font-bold text-white">Business</h1>
                <p className="text-lg italic text-white">Empower your business with effective digital networking.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3 group bg-white rounded-md shadow-lg">
              <div className="h-72 md:h-96 w-full md:w-80">
                <img className="h-full w-full object-cover" src={multiimage} alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-dmserif text-3xl font-bold text-white">Networking</h1>
                <p className="text-lg italic text-white">Expand your network with impactful digital interactions.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative overflow-hidden transform transition-transform hover:scale-105 hover:rotate-3 group bg-white rounded-md shadow-lg">
              <div className="h-72 md:h-96 w-full md:w-80">
                <img className="h-full w-full object-cover" src={Woodimage} alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black group-hover:from-black/70"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-dmserif text-3xl font-bold text-white">Efficiency</h1>
                <p className="text-lg italic text-white">Streamline your information sharing for seamless communication.</p>
              </div>
            </div>
          </div>
          <div class="fixed bottom-16">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;