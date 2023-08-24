import React from 'react';
import { useSelector } from 'react-redux';
import userdefault from "../assets/Images/defaultavatar.png";
import { FiPlus } from 'react-icons/fi';

const Template = () => {
  const profileData = useSelector((state) => state.profileData);

  // Check if profileData is available
  if (!profileData) {
    return null; // Render a loading message while the data is being fetched
  }

  // If profileData is available, proceed to render the template
  const { profileID, profileName, designation, companyName, profileImage, customFields,email,website,phoneNumber,
    address
    /* other properties */ } = profileData;

  return (
    <div className=" h-screen" style={{ backgroundColor: "#0D0F23" }}>
      <div className="relative right-36 top-20">
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
          <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
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


// Connect the component to the Redux store with 'connect' and 'mapStateToProps'
export default Template