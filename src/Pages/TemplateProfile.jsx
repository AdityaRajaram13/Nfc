import React, { useState, useEffect } from 'react';
import { getUserDefaultProfile } from '../Services/ProfileService'; // Import the getUserDefaultProfile function
import { useParams } from 'react-router-dom'; // Import useParams to retrieve URL parameters
import userdefault from "../assets/Images/defaultavatar.png";
import { FiPlus } from 'react-icons/fi';

const UserProfile = () => {
  const { userID } = useParams(); // Retrieve userID from the URL parameter

  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);
  const [downloaded, setDownloaded] = useState(false); // State to track if data is downloaded
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const userProfileData = await getUserDefaultProfile(userID); // Use the getUserDefaultProfile function with the retrieved userID
        setUserProfile(userProfileData);
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
    phoneNumber,
    address,
    customFields,
    profileImage,
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
TEL:${data.phoneNumber}
EMAIL:${data.email}
URL:${data.website}
ADR:${data.address}
END:VCARD
`;
  };

  return (
    <div className=" h-screen" style={{ backgroundColor: "#0D0F23" }}>
    <div className="relative  top-10">
    <div className="container mx-auto max-w-sm rounded-lg bg-gradient-to-l from-cyan-600 to-blue-700 overflow-hidden shadow-lg my-2 ">
      <div
        className="relative h-[300px] flex justify-center items-center z-10"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))' }}
      >
        {profileImage ? (
        <img src={profileImage} alt="Profile image" className="w-full" />
      ) : (
        <img src={userdefault} alt="Default profile image" className="w-full" />
      )}
        <div className="text-center absolute w-full" style={{ bottom: '4rem' }}>
          
        </div>
      </div>
      <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
        <button
         className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none"
         onClick={handleDownload}
        disabled={downloaded}
         >
          <svg viewBox="0 0 20 1" enableBackground="new 0 0 20 20" >
          </svg>
          <FiPlus className="text-white"/>
        </button>
        
      </div>

      <div className="max-w-md bg-gradient-to-l from-cyan-600 to-blue-700 mx-auto p-6  rounded-md shadow-md">
        <p className="mb-2 text-white font-Poppins">
          <span className="font-bold">Name:</span> {profileName}
        </p>
        <p className="mb-2 text-white font-Poppins">
          <span className="font-bold">Designation:</span> {designation}
        </p>
        <p className="mb-2 text-white font-Poppins">
          <span className="font-bold">Email:</span> {email}
        </p>
        <p className="mb-2 text-white font-Poppins">
          <span className="font-bold">Website:</span> {website}
        </p>
        <p className="mb-2 text-white font-Poppins">
          <span className="font-bold">Company Name:</span> {companyName}
        </p>
        <p className="mb-2 text-white font-Poppins">
          <span className="font-bold">Phone Number:</span> {phoneNumber}
        </p>
        <p className="mb-4 text-white font-Poppins">
          <span className="font-bold">Address:</span> {address}
        </p>

        {customFields.map((field, index) => (
          <div key={index} className="mb-4">
         <p className=" text-white font-Poppins">
<span className="font-bold">{field.FieldName}:</span> {field.Value}
</p>

          </div>
        ))}
      </div>
    </div>
   </div>
  </div>
);
};

export default UserProfile;
