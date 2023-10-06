import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { updateUser, getUserData } from '../../Services/userService'; // Make sure to import the correct paths
import { updatePassword } from '../../Services/userService'; // Import the password service

const GeneralProfileForm = ({ onClose , setUserName }) => {
  const [activeTab, setActiveTab] = useState('generalProfile');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [oldpassword, setOldpassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [enternewpasswordagain, setEnternewpasswordagain] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Add this line
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showEnterNewPassword, setShowEnterNewPassword] = useState(false);

  useEffect(() => {
    // Fetch user data and pre-fill form fields
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = await getUserData(); // Fetch user data using the service
      setUsername(userData.Username);
      setFullname(userData.Name);
      setPhoneNumber(userData.Phone);
      setEmail(userData.Email);
    } catch (error) {
      console.error('Error fetching user data:', error);
      // Handle error if needed
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (activeTab === 'PasswordChange') {
      if (newPassword !== enternewpasswordagain) {
        console.error("New passwords don't match");
        return;
      }
  
      const shouldUpdatePassword = window.confirm("Apply changes to your password?");
      if (shouldUpdatePassword) {
        const passwordData = {
          oldPassword: oldpassword,
          newPassword,
        };
  
        try {
          const response = await updatePassword(passwordData);
          console.log('Password updated successfully:', response.message);
          // Optionally, you can show a success message to the user
        } catch (error) {
          console.error('Error updating password:', error);
          // Optionally, you can show an error message to the user
        }
      }
    } else {
      // Handle general profile update...
      const shouldUpdateProfile = window.confirm("Apply changes to your user information?");
      if (shouldUpdateProfile) {
        const updatedUserData = {
          username,
          fullname,
          phoneNumber,
          email,
        };
  
        try {
          const response = await updateUser(updatedUserData);
          console.log('User information updated:', response.message);
          // Optionally, you can show a success message to the user
          localStorage.setItem('fullname',updatedUserData.fullname);
          setUserName(updatedUserData.fullname);
          onClose();
        } catch (error) {
          console.error('Error updating user information:', error);
          // Optionally, you can show an error message to the user
        }
      }
    }
  };

  
  


  return (
    // <div className="w-700 rounded-xl relative top-8 mx-auto " style={{ backgroundColor: "#111536" }}>
    <div className="max-w-700 rounded-xl relative top-8  pb-4 " style={{ backgroundColor: "#111536" }}>

      <div className="w-full max-w-2xl mx-auto">
        {/* <h2 className="text-lg px-4 bg-111536 text-white text-center font-semibold">General Profile</h2> */}
        <div className="w-full px-4 ">
          
        <div className="flex mb-4">
          
  <button
    className={`p-4 border-b-2 border-transparent font-Poppins rounded-t-lg text-white hover:text-gray-600 hover:border-blue-500 dark:hover:text-gray-300 ${activeTab === 'generalProfile' ? 'text-white border-white' : ''}`}
    onClick={() => handleTabChange('generalProfile')}
  >
    General Profile
  </button>
  <button
    className={`p-4 border-b-2 border-transparent font-Poppins rounded-t-lg text-white hover:text-white hover:border-blue-500 dark:hover:text-white ${activeTab === 'PasswordChange' ? 'text-white border-white' : ''}`}
    onClick={() => handleTabChange('PasswordChange')}
  >
    Change Password
  </button>
  {/* Add more tab buttons for additional sections */}
  <button
          className="text-white flex relative md:left-72 items-center"
          onClick={onClose}
        >
          {/* Use the AiOutlineCloseCircle icon and apply red color */}
          <AiOutlineCloseCircle size={24} className="text-red-500 hover:text-red-600 mr-1" />
        </button>
</div>


          <form onSubmit={handleSubmit}>
            {activeTab === 'generalProfile' && (
              <div className="border rounded-xl border border-2 border-blue-950 p-4">
                <h1 className="text-white text-2xl font-Poppins font-bold">Personal Info</h1>
                <hr className="my-4 border-blue-600" />
                {/* Add your personal info form elements */}
                <div className="border rounded-xl border border-2 border-blue-950 p-4">
          {/* <h1 class="text-white text-2xl font-bold">Personal Info</h1>
          <hr className="my-4  border-blue-600" /> */}
            <div className="flex flex-wrap -mx-2 ">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="username" className="text-white">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="fullname" className="text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
              </div>

              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="phoneNumber" className="text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
              </div>
              
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="email" className="text-white">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
              </div>
             
            </div>
            </div>

            <div className="flex justify-center py-4">
              <button
                type="submit"
                className="text-blue-600 font-Poppins hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
              >
                Save Changes
              </button>
              
            </div>

              </div>
            )}
            {activeTab === 'PasswordChange' && (
              <div className="border rounded-xl border border-2 border-blue-950 p-4">
                <h1 className="text-white text-2xl font-Poppins font-bold">Change Password</h1>
                <hr className="my-4 border-blue-600" />
                {/* Add your Change Password form elements */}
                <div className="flex flex-wrap -mx-2 mb-4">
                  
                  <div className="w-full px-2 mb-4 relative">
                  <label htmlFor="oldPassword" className="text-white">
                    Old Password
                  </label>
                  <input
                    type={showOldPassword ? 'text' : 'password'}
                    id="oldPassword"
                    value={oldpassword}
                    onChange={(e) => setOldpassword(e.target.value)}
                    className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-4 "
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  >
                    {showOldPassword ? (
                      <AiOutlineEyeInvisible size={20} className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <AiOutlineEye size={20} className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                  <div className="w-full px-2 mb-4 relative">
                      <label htmlFor="newPassword" className="text-white">
                        New Password
                      </label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setnewPassword(e.target.value)}
                        className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                      />
                      <button
                type="button" // Add this line to prevent form submission
                className="absolute top-1/2 right-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} className="text-gray-400 hover:text-gray-600" />
                ) : (
                  <AiOutlineEye size={20} className="text-gray-400 hover:text-gray-600" />
                )}
              </button>

                    </div>
                  <div className="w-full px-2 mb-4 relative">
                    <label htmlFor="enterNewPasswordAgain" className="text-white">
                      Enter New Password Again
                    </label>
                    <input
                      type={showEnterNewPassword ? 'text' : 'password'}
                      id="enterNewPasswordAgain"
                      value={enternewpasswordagain}
                      onChange={(e) => setEnternewpasswordagain(e.target.value)}
                      className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-4"
                      onClick={() => setShowEnterNewPassword(!showEnterNewPassword)}
                    >
                      {showEnterNewPassword ? (
                        <AiOutlineEyeInvisible size={20} className="text-gray-400 hover:text-gray-600" />
                      ) : (
                        <AiOutlineEye size={20} className="text-gray-400 hover:text-gray-600" />
                      )}
                    </button>
                  </div>
                  
                  {/* Add more Change Password form fields */}
                </div>
                <div className="flex justify-center py-10">
              <button
                type="submit"
                className="text-blue-600 font-Poppins hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
              >
                Save Changes
              </button>
              
            </div>
              </div>
            )}
            {/* Add more form sections based on the active tab */}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralProfileForm;