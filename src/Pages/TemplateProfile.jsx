// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams to retrieve URL parameters
// import userdefault from "../assets/Images/defaultavatar.png";
// import { FiPlus } from 'react-icons/fi';
// import Cookies from 'js-cookie';

// const UserProfile = () => {
//   const { userID } = useParams(); // Retrieve userID from the URL parameter

//   const [loading, setLoading] = useState(true);
//   const [userProfile, setUserProfile] = useState(null);
//   const [downloaded, setDownloaded] = useState(false); // State to track if data is downloaded
//   const [profileImageURL, setProfileImageURL] = useState(null); 

//   const BASE_URL = import.meta.env.VITE_BACKEND_URL;

//   useEffect(() => {
//     const fetchImageURL = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/public/user/${userID}`);
//         if (response.ok) {
//           const data = await response.json();
//           console.log('Response dataaaaa:', data);

//           setProfileImageURL(data.imageURL);
//         } else {
//           console.error('Error fetching user image:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error fetching user image:', error);
//       }
//     };

//     fetchImageURL();
//   }, [userID]);


//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const userToken = Cookies.get('userToken');

//       // Make the fetch request to get user profile with the Authorization header
//       const response = await fetch(`${BASE_URL}/${userID}`, {
//         headers: {
//           Authorization: `Bearer ${userToken}` // Include the token in the Authorization header
//         },
//         credentials: 'include'
//       });

//       if (response.ok) {
//         const userProfileData = await response.json();
//         setUserProfile(userProfileData);
//       } else {
//         // Handle error response
//         console.error('Error fetching user profile:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, [userID]);

//   if (loading) {
//     return null;
//   }

//   if (!userProfile) {
//     return null;
//   }

//   const {
//     profileName,
//     designation,
//     email,
//     website,
//     companyName,
//     phoneNumber,
//     address,
//     customFields,
//   } = userProfile;

//   const handleDownload = () => {
//     const vcfData = createVCF(userProfile);
//     const dataBlob = new Blob([vcfData], { type: 'text/vcard' });
//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(dataBlob);
//     downloadLink.download = 'profile.vcf';
//     downloadLink.click();
//     setDownloaded(true);
//   };

//   const createVCF = (data) => {
//     // Construct the VCF data format
//     return `
// BEGIN:VCARD
// VERSION:3.0
// FN:${data.profileName}
// ORG:${data.companyName}
// TEL:${data.phoneNumber}
// EMAIL:${data.email}
// URL:${data.website}
// ADR:${data.address}
// END:VCARD
// `;
//   };

//   return (
//     <div className=" h-screen overflow-hidden" style={{ backgroundColor: "#0D0F23" }}>
//     <div className="relative  top-10">
//     <div className="container mx-auto max-w-sm rounded-lg bg-gradient-to-l from-cyan-600 to-blue-700 overflow-hidden shadow-lg my-2 ">
//       <div
//         className="relative h-[300px] flex justify-center items-center z-10"
//         style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))' }}
//       >
//         {profileImageURL ? (
//         <img src={profileImageURL} alt="Profile image" className="w-full" />
//       ) : (
//         <img src={userdefault} alt="Default profile image" className="w-full" />
//       )}
//         <div className="text-center absolute w-full" style={{ bottom: '4rem' }}>
          
//         </div>
//       </div>
//       <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
//         <button
//          className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none"
//          onClick={handleDownload}
//         disabled={downloaded}
//          >
//           <svg viewBox="0 0 20 1" enableBackground="new 0 0 20 20" >
//           </svg>
//           <FiPlus className="text-white"/>
//         </button>
        
//       </div>

//       <div className="max-w-md bg-gradient-to-l from-cyan-600 to-blue-700 mx-auto p-6  rounded-md shadow-md">
//         <p className="mb-2 text-white font-Poppins">
//           <span className="font-bold">Name:</span> {profileName}
//         </p>
//         <p className="mb-2 text-white font-Poppins">
//           <span className="font-bold">Designation:</span> {designation}
//         </p>
//         <p className="mb-2 text-white font-Poppins">
//           <span className="font-bold">Email:</span> {email}
//         </p>
//         <p className="mb-2 text-white font-Poppins">
//           <span className="font-bold">Website:</span> {website}
//         </p>
//         <p className="mb-2 text-white font-Poppins">
//           <span className="font-bold">Company Name:</span> {companyName}
//         </p>
//         <p className="mb-2 text-white font-Poppins">
//           <span className="font-bold">Phone Number:</span> {phoneNumber}
//         </p>
//         <p className="mb-4 text-white font-Poppins">
//           <span className="font-bold">Address:</span> {address}
//         </p>

//         {customFields.map((field, index) => (
//           <div key={index} className="mb-4">
//          <p className=" text-white font-Poppins">
// <span className="font-bold">{field.fieldName}:</span> {field.value}
// </p>

//           </div>
//         ))}
//       </div>
//     </div>
//    </div>
//   </div>
// );
// };

// export default UserProfile;











import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to retrieve URL parameters
import userdefault from "../assets/Images/defaultavatar.png";
import { FiPlus } from 'react-icons/fi';
import Cookies from 'js-cookie';
import { FaDownload } from 'react-icons/fa';

const UserProfile = () => {
  const { userID } = useParams(); // Retrieve userID from the URL parameter

  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [downloaded, setDownloaded] = useState(false); // State to track if data is downloaded
  const [profileImageURL, setProfileImageURL] = useState(null); 


  useEffect(() => {
    const fetchImageURL = async () => {
      try {
        const response = await fetch(`https://webapi.biscard.in/public/user/${userID}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Response dataaaaa:', data);

          setProfileImageURL(data.imageURL);
        } else {
          console.error('Error fetching user image:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user image:', error);
      }
    };

    fetchImageURL();
  }, [userID]);


  useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const userToken = Cookies.get('userToken');

      // Make the fetch request to get user profile with the Authorization header
      const response = await fetch(`https://webapi.biscard.in/${userID}`, {
        headers: {
          Authorization: `Bearer ${userToken}` // Include the token in the Authorization header
        },
        credentials: 'include'
      });

      if (response.ok) {
        const userProfileData = await response.json();
        setUserProfile(userProfileData);
      } else {
        // Handle error response
        console.error('Error fetching user profile:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [userID]);

  if (loading) {
    return null;
  }

  if (!userProfile) {
    return null;
  }

  const {
    profileName,
    designation,
    email,
    website,
    companyName,
    mobile,
    address,
    customFields,
  } = userProfile;

  const handleDownload = () => {
    const vcfData = createVCF(userProfile);
    const dataBlob = new Blob([vcfData], { type: 'text/vcard' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(dataBlob);
    downloadLink.download = 'profile.vcf';
    downloadLink.click();
    setDownloaded(true);
  };

  const createVCF = (data) => {
    // Construct the VCF data format
    return `
BEGIN:VCARD
VERSION:3.0
FN:${data.profileName}
ORG:${data.companyName}
TEL:${data.mobile}
EMAIL:${data.email}
URL:${data.website}
ADR:${data.address}
END:VCARD
`;
  };

  return (
    <div className="h-screen overflow-auto" style={{ backgroundColor: "#0D0F23" }}>
    <div className="relative max-w-[400px] mx-auto  mt-6  break-words bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800  mb-6 shadow-lg rounded-xl ">
      <div className="px-4 ">
        <div className="flex flex-col items-center">
          <div className="">
          <div className="relative h-[250px] flex justify-center items-center z-10">
            {profileImageURL ? (
              <img
                src={profileImageURL}
                alt="Profile image"
                className="w-40 h-40 rounded-full object-cover"
              />
            ) : (
              <img
                src={userdefault}
                alt="Default profile image"
                className="w-40 h-40 rounded-full object-cover"
              />
            )}
            </div>
          </div>
          <h3 className="text-2xl text-white font-Poppins font-bold leading-normal mb-1">
            {profileName}
          </h3>
        </div>

        <div className="text-center mt-4 py-4 border-t border-white">
          <div className="flex flex-col items-center">
            <div className="w-full px-4 font-Poppins">
              <div className="mb-1">
                <p className="text-md text-white">Designation</p>
                <p className="text-xl text-slate-300">{designation}</p>
              </div>

              <div className="mb-1">
                <p className="text-md text-white">Email</p>
                <p className="text-md text-slate-300">{email}</p>
              </div>

              <div className="mb-1">
                <p className="text-md text-white">Website</p>
                <p className="text-md text-slate-300">{website}</p>
              </div>

              <div className="mb-1">
                <p className="text-md text-white">Company</p>
                <p className="text-md text-slate-300">{companyName}</p>
              </div>

              <div className="mb-1">
                <p className="text-md text-white">Mobile Number</p>
                <p className="text-md text-slate-300">{mobile}</p>
              </div>

              <div className="mb-1">
                <p className="text-md text-white">Address</p>
                <p className="text-md text-slate-400">{address}</p>
              </div>

              {/* Custom Fields */}
              {customFields.map((field, index) => (
                <div key={index} className="mb-1">
                  <p className="text-md text-white">{field.fieldName}</p>
                  <p className="text-md text-slate-400">{field.value}</p>
                </div>
              ))}

              {/* Download Icon Button */}
              <div className="mt-4">
                <a
                  onClick={handleDownload}
                  className="flex items-center text-white font-semibold hover:text-slate-400"
                >
                  <FaDownload className="mr-2" /> Download VCF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default UserProfile;