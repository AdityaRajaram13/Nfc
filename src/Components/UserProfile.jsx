// import React, { useState } from 'react';
// import { FaEdit } from 'react-icons/fa';
// import Pbackgroungimage from '../assets/Images/ProfileBG.png';

// const UserProfile = ({ profile, onEdit }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedProfile, setEditedProfile] = useState(profile);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleInputChange = (e) => {
//     setEditedProfile({ ...editedProfile, [e.target.name]: e.target.value });
//   };

//   const handleSaveClick = () => {
//     onEdit(editedProfile);
//     setIsEditing(false);
//   };

//   const handlePictureChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setEditedProfile({ ...editedProfile, picture: URL.createObjectURL(file) });
//     }
//   };

//   const handleCameraClick = () => {
//     const cameraOptions = {
//       video: true,
//     };

//     navigator.mediaDevices.getUserMedia(cameraOptions)
//       .then((stream) => {
//         const mediaStreamTrack = stream.getVideoTracks()[0];
//         const imageCapture = new ImageCapture(mediaStreamTrack);
//         imageCapture.takePhoto()
//           .then((blob) => {
//             setEditedProfile({ ...editedProfile, picture: URL.createObjectURL(blob) });
//           })
//           .catch((error) => {
//             console.log('Error taking photo:', error);
//           });
//       })
//       .catch((error) => {
//         console.log('Error accessing camera:', error);
//       });
//   };

//   return (
//     // <div className="bg-white rounded-lg shadow p-4">
//     <div className="bg-white bg-cover p-6"  style={{ backgroundImage: `url(${Pbackgroungimage})`, backgroundColor: '#111536' }}>

//         {!isEditing ? (
//           <div className="flex flex-col items-center">
//             <div className="flex justify-center mb-4">
//               {/* Profile picture */}
//               <img
//                 src={profile.picture}
//                 alt="Profile"
//                 className="rounded-full w-24 h-24 border-2 border-blue-500"
//                 style={{ padding: '3px' ,  }}
//               />
//             </div>
//             <h2 className="text-xl text-white font-bold">Name:{profile.name}</h2>
       
//             <button
//              className="bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mt-4 flex items-center justify-center"
//              onClick={handleEditClick}
//                >
//              <FaEdit className="" />
//             </button> 

//           </div>
//           ) : ( 
//             <div className='space-x-4'>
//               {/* Profile picture input */}
//               <div className="flex  justify-center mb-4">
//                 <input
//                   type="file"
//                   name="picture"
//                   onChange={handlePictureChange}
//                   className="hidden"
//                   accept="image/*"
//                   id="profile-picture-input"
//                 />
//                 <label
//                   htmlFor="profile-picture-input"
//                   className="cursor-pointer rounded-full w-24 h-24 border  border-gray-300 flex items-center justify-center"
//                 >
//                   {editedProfile.picture ? (
//                     <img
//                       src={editedProfile.picture}
//                       alt="Profile"
//                       className="rounded-full w-24 h-24"
//                     />
//                   ) : (
//                     <span className="text-gray-400 text-2xl">+</span>
//                   )}
//                 </label>
//                 <button
//                   className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//                   onClick={handleCameraClick}
//                 >
//                   Camera
//                 </button>
//               </div>
//           <input
//             type="text"
//             name="name"
//             value={editedProfile.name}
//             onChange={handleInputChange}
//             className="border border-gray-300 rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="jobTitle"
//             value={editedProfile.jobTitle}
//             onChange={handleInputChange}
//             className="border border-gray-300 rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="company"
//             value={editedProfile.company}
//             onChange={handleInputChange}
//             className="border border-gray-300 rounded p-2 mb-2"
//           />
//           <input
//             type="text"
//             name="contactDetails"
//             value={editedProfile.contactDetails}
//             onChange={handleInputChange}
//             className="border border-gray-300 rounded p-2 mb-2"
//           />
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
//             onClick={handleSaveClick}
//           >
//             Save
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;



















import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Pbackgroungimage from '../assets/Images/ProfileBG.png';

const UserProfile = ({ profile, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEditClick = () => {
    setIsEditing(true);
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

  // Sample numbers for total views and total shares
  const totalViews = 500;
  const totalShares = 200;

  return (
    <div className="" style={{ backgroundColor: "#111536" }}>
     <div className="flex justify-center items-center">
  <h2 className="text-lg bg-111536 text-white text-center font-semibold" style={{ backgroundColor: "#111536" }}>My Profile</h2>
  <button className="bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded ml-4" onClick={handleEditClick}>
    <FaEdit className="" />
  </button>
</div>

    <div className=" bg-cover p-6" style={{ backgroundImage: `url(${Pbackgroungimage})`, backgroundColor: '#111536' }}>
      {!isEditing ? (
        <div className="flex flex-col items-center">
          <div className="flex justify-center mb-4">
            {/* Profile picture */}
            <img
              src={profile.picture}
              alt="Profile"
              className="rounded-full w-24 h-24 border-2 border-blue-500"
              style={{ padding: '3px' }}
            />
          </div>
          <h2 className="text-xl text-white font-bold">Name: {profile.name}</h2>

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
        
      ) : (
        <div className="space-x-4">
          {/* Profile picture input */}
          <div className="flex justify-center mb-4">
            <input type="file" name="picture" onChange={handlePictureChange} className="hidden" accept="image/*" id="profile-picture-input" />
            <label htmlFor="profile-picture-input" className="cursor-pointer rounded-full w-24 h-24 border border-gray-300 flex items-center justify-center">
              {editedProfile.picture ? (
                <img src={editedProfile.picture} alt="Profile" className="rounded-full w-24 h-24" />
              ) : (
                <span className="text-gray-400 text-2xl">+</span>
              )}
            </label>
            <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={handleCameraClick}>
              Camera
            </button>
          </div>
          <input type="text" name="name" value={editedProfile.name} onChange={handleInputChange} className="border border-gray-300 rounded p-2 mb-2" />
          <input type="text" name="jobTitle" value={editedProfile.jobTitle} onChange={handleInputChange} className="border border-gray-300 rounded p-2 mb-2" />
          <input type="text" name="company" value={editedProfile.company} onChange={handleInputChange} className="border border-gray-300 rounded p-2 mb-2" />
          <input type="text" name="contactDetails" value={editedProfile.contactDetails} onChange={handleInputChange} className="border border-gray-300 rounded p-2 mb-2" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default UserProfile;
