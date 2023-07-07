// import React from 'react';

// const Header = () => {
//   return (
//     <div className=" mt-20 rounded-3xl bg-gradient-to-t from-cyan-950 to-indigo-950 p-4">
//       {/* <h1 className="text-3xl font-bold text-white">My Website</h1> */}
//       <p className="text-3xl font-bold text-white mt-2">
//       Check out our premier plan to <br></br> avail exclusive card templates.
//       </p>
//       <button className="explore-button bg-gradient-to-t from-blue-600 to-violet-500 text-white mt-4 py-2 px-4 rounded-full shadow">
//   Explore
// </button>

//     </div>
//   );
// };

// export default Header;



import React from 'react';
import MySvg from '../assets/Images/Header.svg';

const Header = () => {
  return (
    
    <div className="mt-32 rounded-3xl bg-gradient-to-t from-cyan-950 to-indigo-950 p-4 relative overflow-hidden">
      <p className="text-2xl font-bold text-white mt-2">
        Check out our premier plan to  avail <br /> exclusive card templates.
      </p>
      <button className="explore-button bg-gradient-to-t from-blue-600 to-violet-500 text-white mt-4 py-2 px-4 rounded-full shadow">
        Explore
      </button>
      <img
    src={MySvg}
    alt="SVG"
    className="absolute bottom-0 left-0 right-0 mx-auto"
    style={{ width: "250px", zIndex: "1" }}
  />
    </div>
  );
};

export default Header;


// absolute top-44 right-56 