// import React from 'react';


// const Navbar = () => {
//   return (
// <div class="flex flex-wrap ">
//   <section class="relative mx-auto">
//       {/* <!-- navbar --> */}
//     <nav class="flex justify-between bg-gray-900 text-white w-screen">
//       <div class="px-5 xl:px-12 py-6 flex w-full items-center">
//         <a class="text-3xl font-bold font-heading" href="#">
//           {/* <!-- <img class="h-9" src="logo.png" alt="logo"> --> */}
//           Logo Here.
//         </a>
//         {/* <!-- Nav Links --> */}
//         <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
//           <li><a class="hover:text-gray-200" href="#">Home</a></li>
//           <li><a class="hover:text-gray-200" href="#">Catagory</a></li>
//           <li><a class="hover:text-gray-200" href="#">Collections</a></li>
//           <li><a class="hover:text-gray-200" href="#">Contact Us</a></li>
//         </ul>
//         {/* <!-- Header Icons --> */}
//         <div class="hidden xl:flex items-center space-x-5 items-center">
//           <a class="hover:text-gray-200" href="#">
//             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//           </a>
//           <a class="flex items-center hover:text-gray-200" href="#">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//               </svg>
//             <span class="flex absolute -mt-5 ml-4">
//               <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
//                 <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
//                 </span>
//               </span>
//           </a>
//           {/* <!-- Sign In / Register      --> */}
//           <a class="flex items-center hover:text-gray-200" href="#">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//           </a>
          
//         </div>
//       </div>
//       {/* <!-- Responsive navbar --> */}
//       <a class="xl:hidden flex mr-6 items-center" href="#">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//         <span class="flex absolute -mt-5 ml-4">
//           <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
//           <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
//           </span>
//         </span>
//       </a>
//       <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
//           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//       </a>
//     </nav>
    
//   </section>
// </div>
// );
// };

// export default Navbar;




// import React from 'react';

// const Navbar = () => {
//   return (
//     <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
//       {/* Informação */}
//       <div className="flex flex-shrink-0 items-center space-x-4 text-white">
//         {/* Texto */}
//         <div className="flex flex-col items-end">
//           {/* Nome */}
//           <div className="text-md font-medium">Unknown Unknown</div>
//           {/* Título */}
//           <div className="text-sm font-regular">Student</div>
//         </div>

//         {/* Foto */}
//         <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



// import React, { useState } from 'react';

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
//       <div className="flex flex-shrink-0 items-center space-x-4 text-white">
//         <div className="flex flex-col items-end">
//           <div className="text-md font-medium">ACARDZZZZ</div>
//           <div className="text-sm font-regular">FOUNDER</div>
//         </div>
//         <div
//           className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"
//           onClick={toggleDropdown}
//         >
//           {showDropdown && (
//             <div className="absolute top-full right-0 w-40 bg-white shadow rounded-md mt-2">
//               {/* Dropdown items */}
//               <ul className="py-2 px-4 space-y-2">
//                 <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md">
//                   Log In
//                 </li>
//                 <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md">
//                   Create Profile
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleCurrencyDropdown = () => {
    setShowCurrencyDropdown(!showCurrencyDropdown);
  };

  const toggleProductDropdown = () => {
    setShowProductDropdown(!showProductDropdown);
  };

  return (
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        <div className="flex flex-col items-end">
          <div className="text-md font-medium">ACARDZZZZ</div>
          <div className="text-sm font-regular">FOUNDER</div>
        </div>
        <div className="relative">
          <button
            className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"
            onClick={toggleDropdown}
          >
            {showDropdown && (
              <div className="absolute top-full right-0 w-40 bg-white shadow rounded-md mt-2">
                {/* Dropdown items */}
                <ul className="py-2 px-4 space-y-2">
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md">
                    <Link to="/signin">Log In</Link>
                    {/* Log */}
                  </li>
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md">
                  <Link to="/signup">Create Profile</Link>
                  {/* Create */}
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
       
      </div>
      <ul className="flex space-x-4 text-white">
        <li className="font-medium">Home</li>
        <li className="relative">
          <button
            className="font-medium"
            onClick={toggleProductDropdown}
          >
            Products
            {showProductDropdown && (
              <div className="absolute top-full left-0 w-40 bg-white shadow rounded-md mt-2">
                {/* Products Dropdown items */}
                <ul className="py-2 px-4 space-y-2">
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md">
                    Product 1
                  </li>
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md">
                    Product 2
                  </li>
                </ul>
              </div>
            )}
          </button>
        </li>
        <li className="relative">
          <button
            className="font-medium"
            onClick={toggleCurrencyDropdown}
          >
            Currency
            {showCurrencyDropdown && (
              <div className="absolute top-full left-0 w-40 bg-white shadow rounded-md mt-2">
                {/* Currency Dropdown items */}
                <ul className="py-2 px-4 space-y-2">
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md">
                    India
                  </li>
                  <li className="text-black font-Inter cursor-pointer hover:bg-gray-200 py-1 px-2 rounded-md">
                    USD
                  </li>
                </ul>
              </div>
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
