// import React from 'react';

// const CardDash = () => {
//   return (
//     // <div className="bg-gradient-to-r from-pink-500 to-blue-500 w-full h-full rounded-lg shadow-lg p-4">
//     <div className=" h-[calc(100vh-265px)]" style={{ backgroundColor: '#111536' }}>

//       <h2 className="text-lg text-center text-white font-semibold">Share your Profile</h2>
//       <p className="text-white mt-2">This is a sample container.</p>
//     </div>
//   );
// };

// export default CardDash;




  // import React from 'react';
  // import QRCode from 'react-qr-code';
  // import { RiDownloadLine, RiShareLine } from 'react-icons/ri';


  // const CardDash = () => {
  //   return (
  //     <div className="h-[calc(100vh-265px)]" style={{ backgroundColor: '#111536' }}>
  //       <h2 className="text-lg text-center text-white font-semibold">Share your Profile</h2>
        
  //       <div className="flex flex-col justify-center items-center mt-8">
  //         <QRCode value="https://example.com/profile" size={128} />
  //         <div className="flex mt-4">
  //           <button className="flex items-center justify-center  text-white rounded-lg px-4 py-2">
  //             <RiDownloadLine className="mr-2" />
              
  //           </button>
  //           <button className="flex items-center justify-center  text-white rounded-lg px-4 py-2 ml-4">
  //             <RiShareLine className="mr-2" />
              
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default CardDash;


//   import React from 'react';
// import QRCode from 'react-qr-code';
// import { RiDownloadLine, RiShareLine } from 'react-icons/ri';

// const CardDash = () => {
//   return (
//     <div className="h-[calc(100vh-265px)]" style={{ backgroundColor: '#111536' }}>
//       <h2 className="text-lg text-center text-white font-semibold">Share your Profile</h2>

//       <div className="flex flex-col justify-center items-center ml-10 mt-8">
//        <div className="flex items-center">
//           < QRCode value="https://example.com/profile" size={128} />
//           <div className="flex flex-col mb-20 ml-4">
//             <button className="flex items-center text-teal-200 rounded-lg py-2">
//               <RiDownloadLine className="mr-2" />
//             </button>
//             <button className="flex items-center justify-center text-teal-200 rounded-lg py-2">
//               <RiShareLine className="mr-2" />
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDash;




import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { RiDownloadLine, RiShareLine, RiFileCopyLine } from 'react-icons/ri';

const CardDash = () => {
  const [profileLink, setProfileLink] = useState('https://example.com/profile');
  
  const handleCopy = () => {
    navigator.clipboard.writeText(profileLink);
    // You can add a notification or other feedback here to indicate that the link has been copied
  };
  
  return (
    <div className="h-[calc(100vh-265px)]" style={{ backgroundColor: '#111536' }}>
      <h2 className="text-lg text-center text-white font-semibold">Share your Profile</h2>

      <div className="flex flex-col justify-center items-center ml-10 mt-8">
        <div className="flex items-center">
          <QRCode value={profileLink} size={128} />
          <div className="flex flex-col mb-20 ml-4">
            <button className="flex items-center text-teal-200 rounded-lg py-2">
              <RiDownloadLine className="mr-2" />
            </button>
            <button className="flex items-center justify-center text-teal-200 rounded-lg py-2">
              <RiShareLine className="mr-2" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center mt-4">
          <div className="relative mr-8">
            <input
              type="text"
              className="bg-blue-950 rounded-md py-2 px-4 text-white pr-10"
              value={profileLink}
              readOnly
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-teal-200 rounded-lg py-2"
              onClick={handleCopy}
            >
              <RiFileCopyLine />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CardDash;
