import React, { useState } from 'react';
import DefaultImage from '../../src/assets/Images/Userdefault.png';
import QRCode from 'react-qr-code';
import { RiFileCopyLine } from 'react-icons/ri';
import { MdEdit } from 'react-icons/md';
import Pbackgroungimage from '../assets/Images/ProfileBG.png';
import GeneralProfileForm from '../Components/Forms/GeneralProfile';
import { useEffect } from 'react';
import { getUserImageURL } from '../Services/getuserimage';
import copy from 'copy-to-clipboard';
import {fetchTotalVisitCount} from '../Services/visitcount';


const UserProfile = ({ profile, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState(); // State to hold the profile picture
  const [userID, setUserID] = useState('');
  // const [qrCodeLink, setQRCodeLink] = useState(`${import.meta.env.VITE_FRONTEND_URL}/${userID}`);
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const [totalViews, setTotalViews] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // State to control component visibility
  const[userName, setUserName]= useState();


  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };


  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
  };

  const storedUserID = localStorage.getItem('userID');
  const qrCodeLink = storedUserID ? `https://www.biscard.in/${storedUserID}` : '';

  const handleUploadPicture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
  
        // Send the image to the server
        const formData = new FormData();
        formData.append('userimage', file);
  
        const userID = localStorage.getItem('userID');
        fetch(`https://webapi.biscard.in/api/update/${userID}`, {
          method: 'PUT',
          credentials: 'include',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.message);
          })
          .catch((error) => {
            console.error('Error updating user image:', error);
          });
      };
      reader.readAsDataURL(file);
    }
    setIsDropdownOpen(false); // Close the dropdown after selecting the image
  };
  

  const handleDeletePicture = () => {
    setProfilePicture(DefaultImage);
  
    // Delete the image on the server
    const userID = localStorage.getItem('userID');

    fetch(`https://webapi.biscard.in/api/update/${userID}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ deleteImage: true }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error('Error deleting user image:', error);
      });
  
    setIsDropdownOpen(false); // Close the dropdown after deleting the image
  };
  

  useEffect(() => {
    // Retrieve userID from local storage
    const storedUserID = localStorage.getItem('userID');
    console.log('Stored userID from local storage:', storedUserID);
  
    setUserID(storedUserID);
  
    if (storedUserID) {
      getUserImageURL(storedUserID)
        .then((imageUrl) => {
          setProfilePicture(imageUrl);
        })
        .catch((error) => {
          console.error('Error fetching user image:', error);
        });
  
      // Fetch the total visit count using the API function
      fetchTotalVisitCount(storedUserID)
        .then(count => {
          setTotalViews(count);
        })
        .catch(error => {
          console.error('Error fetching visit count:', error);
        });

        const storedName = localStorage.getItem('fullname');
        if(storedName){
          setUserName(storedName);
        }
    }
  }, [userID]);
  // Add userID as a dependency
  
  

  const handleCopy = () => {
    copy(qrCodeLink);
    setShowCopiedMessage(true);
  
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 1000); // Set the time for how long the message should be displayed (in milliseconds)
  };
  

  console.log('UserProfile component is being rendered.');
  return (
    <div>
      {isVisible && (
        <div className="w-96 fixed right-0 h-screen" style={{ backgroundColor: '#111536' }}>
          <div className="flex mt-4 justify-center items-center">
            <button
              className="relative  border-2 border-blue-950 inline-flex items-center justify-center px-6 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-blue-950 rounded-full group"
              onClick={handleEditClick}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-b from-blue-600 to-violet-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
              <span className="flex justify-center items-center font-Inter relative">
                <MdEdit className="mr-1 " />
                My Profile
              </span>
            </button>
          </div>

          <div
            className="bg-cover p-6 relative"
            style={{ backgroundImage: `url(${Pbackgroungimage})`, backgroundColor: '#111536', width: '100%', height: '270px' }}
          >
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={profilePicture || DefaultImage}
                  alt="Profile"
                  className="rounded-full w-32 h-32 border-2 border-blue-500 cursor-pointer"
                  style={{ padding: '3px' }}
                  onClick={toggleDropdown}
                />

                {isDropdownOpen && (
                  <div className="absolute top-12 right-0 mt-20 p-2 bg-blue-950 rounded-lg shadow-md" style={{ zIndex: 1 }}>
                    <input type="file" id="upload-picture" accept="image/*" onChange={handleUploadPicture} style={{ display: 'none' }} />
                    <label htmlFor="upload-picture" className="block p-1 cursor-pointer text-center text-white rounded-lg font-Quicksand hover:bg-violet-900">
                      Choose a Picture
                    </label>
                    <button onClick={handleDeletePicture} className="block w-full p-1 text-left rounded-lg text-white font-Quicksand hover:bg-violet-900">
                      Delete Picture
                    </button>
                  </div>
                )}
              </div>
                    <h2 className="text-xl text-white font-bold">Name: {userName || ''}</h2>

              <div className="flex justify-between space-x-6 mt-2">
                <div className="flex flex-col items-center">
                  <div className="border border-blue-500 rounded-lg w-16 h-10 flex items-center justify-center">
                    <p className="text-white">{totalViews !== undefined ? totalViews: '0'}</p>
                  </div>
                  <p className="text-gray-400 text-sm font-bold mt-2">Total Visits</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ml-10 mt-8">
              <div className="flex items-center">
                <QRCode value={qrCodeLink} size={128} />
                <div className="flex flex-col mb-20 ml-4">{/* Removed picture-related buttons */}</div>
              </div>

              <div className="flex items-center mt-4">
                <div className="relative mr-8">
                  <input type="text" className="bg-blue-950 rounded-md py-2 px-4 text-white pr-10" value={qrCodeLink} readOnly />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-teal-200 rounded-lg py-2" onClick={handleCopy}>
                    <RiFileCopyLine />
                  </button>
                </div>
              </div>
              {showCopiedMessage && <div className="text-cyan-600 mt-2">Link copied to clipboard</div>}
            </div>
          </div>

          {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
            <div className="z-10">
            <GeneralProfileForm onClose={handleModalClose} userName={userName} setUserName={setUserName} />            </div>
          </div>
        )}
      </div>
    )}

    {!isModalOpen && ( // Render the buttons only when the modal is not open
      <button className="fixed md:hidden top-20 right-0 px-4 py-2 text-white rounded-full z-20" style={{ backgroundColor: '#111536' }} onClick={toggleVisibility}>
        {isVisible ? 'Hide Profile' : 'Show Profile'}
      </button>
    )}
    </div>
  );
};

export default UserProfile;