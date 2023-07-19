import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { RiDownloadLine, RiShareLine, RiFileCopyLine } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import Pbackgroungimage from '../../assets/Images/ProfileBG.png';
import VFCForm from '../Forms/VFCForm';

const UserProfile = ({ profile, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);
  const [profileLink, setProfileLink] = useState('https://example.com/profile');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
  };

  const handleSaveClick = () => {
    onEdit(editedProfile);
    setIsEditing(false);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditedProfile({ ...editedProfile, picture: URL.createObjectURL(file) });
    }
  };

  const handleCameraClick = () => {
    const cameraOptions = {
      video: true,
    };

    navigator.mediaDevices
      .getUserMedia(cameraOptions)
      .then((stream) => {
        const mediaStreamTrack = stream.getVideoTracks()[0];
        const imageCapture = new ImageCapture(mediaStreamTrack);
        imageCapture
          .takePhoto()
          .then((blob) => {
            setEditedProfile({ ...editedProfile, picture: URL.createObjectURL(blob) });
          })
          .catch((error) => {
            console.log('Error taking photo:', error);
          });
      })
      .catch((error) => {
        console.log('Error accessing camera:', error);
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(profileLink);
    // You can add a notification or other feedback here to indicate that the link has been copied
  };

  // Sample numbers for total views and total shares
  const totalViews = 500;
  const totalShares = 200;

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-96 fixed right-0 h-screen" style={{ backgroundColor: '#111536' }}>
      <div className="flex justify-center items-center">
        <h2 className="text-lg font-Inter text-white text-center font-semibold" style={{ backgroundColor: '#111536' }}>
          My Profile
        </h2>
        <button className="bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded ml-4" onClick={handleEditClick} style={{ backgroundColor: '#111536' }} >
          <FaEdit className="" />
        </button>
      </div>

      <div className="bg-cover p-6" style={{ backgroundImage: `url(${Pbackgroungimage})`, backgroundColor: '#111536', width: '100%', height: '270px' }}>
        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-4">
            {/* Profile picture */}
            <img
              src={profile?.picture || 'placeholder-image-url'}
              alt="Profile"
              className="rounded-full w-28 h-28 border-2 border-blue-500"
              style={{ padding: '3px' }}
            />
          </div>
          <h2 className="text-xl text-white font-bold">Name: {profile?.name || ''}</h2>

          <div className="flex justify-between space-x-6 mt-4">
            <div className="flex flex-col items-center">
              <div className="border border-blue-500 rounded-lg w-16 h-10 flex items-center justify-center">
                <p className="text-white">{totalViews}</p>
              </div>
              <p className="text-gray-400 text-sm font-bold mt-2">Total Visits</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="border border-blue-500 rounded-lg w-16 h-10 flex items-center justify-center">
                <p className="text-white">{totalShares}</p>
              </div>
              <p className="text-gray-400 text-sm font-bold mt-2">Total Shares</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ml-10 mt-8">
          <div className="flex items-center">
            <QRCode value="example-qrcode-value" size={128} />
            <div className="flex flex-col mb-20 ml-4">
              {/* Removed picture-related buttons */}
            </div>
          </div>

          <div className="flex items-center mt-4">
            <div className="relative mr-8">
              <input
                type="text"
                className="bg-blue-950 rounded-md py-2 px-4 text-white pr-10"
                value="example-profile-link"
                readOnly
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-teal-200 rounded-lg py-2" onClick={handleCopy}>
                <RiFileCopyLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        // Render the VFCForm component as a modal
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="">
            <VFCForm onClose={handleModalClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;