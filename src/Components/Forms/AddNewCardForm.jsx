import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import {createProfile} from '../../Services/ProfileService' 
import { useNavigate } from 'react-router-dom';



const AddNewCardForm = () => {
  const [displayName, setDisplayName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [customFields, setCustomFields] = useState([]);
  const [showSuccessMessage, setSuccessMessage] = useState(''); // Rename showSuccessMessage to successMessage
  const navigate = useNavigate();


  const handleAddNew = () => {
    console.log('Before adding new field:', customFields);
    setCustomFields([...customFields, { status: false, type: 'mobile', text: '' }]);
    console.log('After adding new field:', customFields);

  };

  const handleDelete = (index) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields.splice(index, 1);
    setCustomFields(updatedCustomFields);
  };

  const handleStatusChange = (index) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index].status = !updatedCustomFields[index].status;
    setCustomFields(updatedCustomFields);
  };

  const handleTypeChange = (index, e) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index].type = e.target.value;
    setCustomFields(updatedCustomFields);
  };

  const handleTextChange = (index, e) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index].text = e.target.value;
    setCustomFields(updatedCustomFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const customFieldsData = customFields.map((field) => {
      const { type, text } = field;
      return {
        fieldName: type, // Use 'type' as the 'fieldName' for now
        value: text,
      };
    });

    const profileData = {
      profileName: displayName,
      designation,
      email,
      website,
      companyName,
      mobile: phoneNumber,
      address,
      customFields: customFieldsData,
    };

    try {
      // Assuming you have a createProfile function to send data to the backend
      console.log('Profile Data:', profileData);
      const response = await createProfile(profileData);
      console.log('Profile created successfully:', response.profileID);

      // Show success message and hide it after 3 seconds
      setSuccessMessage('Profile Card Created Successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);

      // Optionally, you can perform some actions after successful profile creation
      
      // For example, you can navigate to another page or show a success message.
      navigate('/dashboard');

    } catch (error) {
      console.error('Error creating profile:', error);

      // Handle the error, for example, show an error message to the user.
    }
  };

  return (
    // <div className="w-800" style={{ backgroundColor: "#111536" }}>
    // <div className="mt-10 w-screen h-screen flex justify-center items-center" style={{ backgroundColor: "#0D0F23" }}>
    <div className=" h-screen relative right-40 top-8 flex justify-center items-center" style={{ backgroundColor: "#0D0F23" }}>
     <div className=" w-full rounded-xl border border-2 border-blue-950 p-4 max-w-2xl mx-auto overflow-y-auto max-h-[calc(100vh-105px)] " style={{ backgroundColor: "#111536" }} >
      <style>
         {`
          .overflow-y-auto::-webkit-scrollbar {
          display: none;
          }
        `}
      </style>
      <h2 className="text-lg pt-4 bg-111536 text-white  font-semibold ">Add New Card</h2>
        <hr className="my-4  border-blue-600" />
        <div className="flex flex-wrap -mx-2" >
        
          <div className="w-full  px-2 mb-4"  >
            <label htmlFor="displayName" className="text-white">Display Name</label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="designation" className="text-white">Designation</label>
            <input
              type="text"
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="email" className="text-white" >Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="website" className="text-white">Website</label>
            <input
              type="text"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
         
          <div className="w-full md:w-1/2 px-2 mb-4">
            <label htmlFor="phoneNumber" className="text-white">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="w-full  px-2 mb-4">
          <label htmlFor="companyName" className="text-white">Company Name</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label htmlFor="address" className="text-white">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            ></textarea>
          </div>
        </div>
        <hr className="my-4  border-blue-600" />
      
        <div className="flex mt-4 justify-between mb-4">
          <h1 className="text-lg text-white font-bold">Custom Details</h1>
          <button
  className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
  onClick={handleAddNew}
>
  <FiPlus className="w-5 h-5" />
  
</button>
        </div>
        {
        customFields.map((field, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="flex items-center">
              {/* <span className="mr-2">Status:</span> */}
              <label
                htmlFor={`toggle${index}`}
                className={`flex items-center cursor-pointer`}
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id={`toggle${index}`}
                    className="sr-only"
                    checked={field.status}
                    onChange={() => handleStatusChange(index)}
                  />
                  <div
                    className={`block w-12 h-6 rounded-full ${
                      field.status ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></div>
                  <div
                    className={`dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition ${
                      field.status ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </div>
              </label>
            </div>
            <div className="flex items-center">
  <span className="mx-2 text-white">Type:</span>
  <select
    className="px-4 py-2 bg-transparent border border-2 border-blue-950 rounded-lg focus:outline-none focus:border-violet-500 text-white "
    value={field.type}
    onChange={(e) => handleTypeChange(index, e)}
  >
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="mobile">Mobile Number</option>
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="email">Email</option>
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="address">Address</option>
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="website">Website</option>
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="company">Company Name</option>
  </select>
</div>

            <div className="flex items-center">
              <label htmlFor={`text${index}`} className="text-white mx-2">
                Text:
              </label>
              <input
                type="text"
                id={`text${index}`}
                className="px-4 py-2 bg-transparent border border-2 border-blue-950 rounded-lg focus:outline-none focus:border-violet-500 text-white "
                value={field.text}
                onChange={(e) => handleTextChange(index, e)}
              />
              <button
              className="px-3 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 ml-4 flex items-center"
              onClick={() => handleDelete(index)}
            >
              <FiTrash2 className="w-5 h-5" />
              
              </button>
            </div>
            
          </div>
        ))}
        <div className=" flex justify-center py-4">
      <button
            type="submit"
            className="text-blue-600 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
            onClick={handleSubmit}
           >
            Create Card
          </button>
          <button
            type="submit"
            className="text-blue-600 ml-6 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
            >
           Clear Form
          </button>
          </div>
          {showSuccessMessage && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg transition-opacity duration-500">
            Profile Card Created Successfully!
          </div>
        )}
      </div>
      
    </div>
  );
};

export default AddNewCardForm;