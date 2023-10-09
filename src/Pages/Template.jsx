import React, { useState, useEffect } from 'react';
import userdefault from "../assets/Images/defaultavatar.png";
import { getUserImageURL } from '../Services/getuserimage'; // Import the getUserImageURL function
import { FaDownload } from 'react-icons/fa';


const Template = () => {
  const userID = localStorage.getItem('userID');
 // Retrieve userID from the URL parameter

  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [downloaded, setDownloaded] = useState(false); // State to track if data is downloaded
  const [profilePictureURL, setProfilePictureURL] = useState('');
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;


  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const imageURL = await getUserImageURL(userID); // Fetch the user's image URL
        setProfilePictureURL(imageURL);
      } catch (error) {
        console.error('Error fetching user image URL:', error);
      }
    };
  
    fetchProfilePicture();
  }, [userID]);


  useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(`http://localhost:3000/${userID}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userProfileData = await response.json();
        setUserProfile(userProfileData);
      } else {
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
    const vcfData = createVCF({
      ...userProfile,
      profilePictureURL, // Pass the profile picture URL
    });
    const dataBlob = new Blob([vcfData], { type: 'text/vcard' });
  
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(dataBlob); // Use window.URL.createObjectURL
    downloadLink.download = 'profile.vcf';
    downloadLink.click();
  
    // Clean up the created Blob URL
    window.URL.revokeObjectURL(downloadLink.href);
  
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
PHOTO;VALUE=URL:${data.profileImage}   // Include the image URL
END:VCARD
`;
};

return (
  <div className="h-screen overflow-auto" style={{ backgroundColor: "#0D0F23" }}>
     <style>
          {`
            .overflow-auto::-webkit-scrollbar {
            display: none;
            }
          `}
        </style>
    <div className="relative top-32 md:top-20 md:right-40 rounded-lg max-w-[350px] mx-auto md:max-w-[25%]  break-words bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800  mb-6 shadow-lg rounded-xl\">
      <div className="px-4 ">
        <div className="flex flex-col items-center">
          <div className="">
          <div className="relative h-[250px] flex justify-center items-center z-10">
            {profilePictureURL ? (
              <img
                src={profilePictureURL}
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
                <button
                  onClick={handleDownload}
                  className="flex items-center text-white font-semibold hover:text-slate-400"
                >
                  <FaDownload className="mr-2" /> Download VCF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Template;