import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDefaultProfile } from '../Services/ProfileService';

const ProfilePage = () => {
  const { userID } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    getUserDefaultProfile(userID)
      .then(profile => {
        setProfileData(profile);
      })
      .catch(error => {
        console.error('An error occurred:', error.message);
      });
  }, [userID]);

  if (!profileData) {
    return <div>Loading...</div>; // You can add a loading indicator here
  }

  const {
    profileImage,
    profileName,
    designation,
    email,
    website,
    companyName,
    mobile,
    address,
    customFields,
  } = profileData;

  return (
    <div className="h-screen" style={{ backgroundColor: "#0D0F23" }}>
      <div className="relative right-36 top-20">
        <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
          <div className="relative z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))' }}>
            {profileImage && <img src={profileImage} alt="Profile image" className="w-full" />}
            <div className="text-center absolute w-full" style={{ bottom: '4rem' }}>
              <p className="text-white tracking-wide uppercase text-lg font-bold">
                {profileName}
              </p>
            </div>
          </div>
          <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
            <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
              {/* SVG icon */}
            </button>
          </div>

          <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <p className="mb-2">
              <span className="font-bold">Name:</span> {profileName}
            </p>
            <p className="mb-2">
              <span className="font-bold">Designation:</span> {designation}
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span> {email}
            </p>
            <p className="mb-2">
              <span className="font-bold">Website:</span> {website}
            </p>
            <p className="mb-2">
              <span className="font-bold">Company Name:</span> {companyName}
            </p>
            <p className="mb-2">
              <span className="font-bold">Phone Number:</span> {mobile}
            </p>
            <p className="mb-4">
              <span className="font-bold">Address:</span> {address}
            </p>

            {customFields.map((field, index) => (
              <div key={index} className="mb-4">
                <p>
                  <span className="font-bold">{field.fieldName}:</span> {field.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
