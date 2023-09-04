import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { updateProfile } from '../../Services/ProfileService'; // Update the path accordingly
import { deleteCustomField } from '../../Services/ProfileService';
import { deleteProfile  } from '../../Services/ProfileService';


const VFCForm = ({ onClose, selectedProfile, selectedCustomFieldID }) => {
  // State to manage the form field values
  const [displayName, setDisplayName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [customFields, setCustomFields] = useState([]);
  const [customFieldsToDelete, setCustomFieldsToDelete] = useState([]);


  const handleAddNew = () => {
    setCustomFields([
      ...customFields,
      { status: false, type: '', text: '', customFieldID: null } // Add customFieldID
    ]);
  };
  







  const handleDeleteProfile = async (profileID) => {
    const shouldDeleteProfile = window.confirm("Are you sure you want to delete this profile?");
    
    if (shouldDeleteProfile) {
      try {
        // Call the deleteProfile function with the selected profile's ID
        const response = await deleteProfile(profileID);
  
        // Profile deleted successfully, you might want to perform some actions here
  
      } catch (error) {
        console.error('Error deleting profile:', error);
        // Handle the error as needed
      }
      
      // Reload the page after deletion
      window.location.reload();
    }
  };




  const handleTypeChange = (index, e) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index].type = e.target.value; // Set the FieldName based on the selected value
    setCustomFields(updatedCustomFields);
  };

  const handleTextChange = (index, e) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index].text = e.target.value;
    setCustomFields(updatedCustomFields);
  };

  
  const handleDelete = (index, customFieldID) => {
    const updatedCustomFields = customFields.filter((_, i) => i !== index);
    setCustomFields(updatedCustomFields);
  
    // Only add the customFieldID to the array if it's not null
    if (customFieldID) {
      setCustomFieldsToDelete(prevCustomFieldsToDelete => [
        ...prevCustomFieldsToDelete,
        { customFieldID }
      ]);
    }
  };
  


  const handleUpdateProfile = async () => {

    if (!displayName || !designation || !email || !phoneNumber) {
      // Display an error message for required fields
      alert('Please fill in all required fields.');
      return;
    }
  
    // Email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Phone number validation (you can add your own validation criteria)
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    // Custom field validations
    for (const field of customFields) {
      if (!field.type || !field.text) {
        alert('Please fill in all custom fields.');
        return;
      }
  
      if (field.type === 'email' && !emailPattern.test(field.text)) {
        alert(`Please enter a valid email address for the custom field: ${field.text}`);
        return;
      }
  
      if (field.type === 'phone' && !/^\d{10}$/.test(field.text)) {
        alert(`Please enter a valid 10-digit phone number for the custom field: ${field.text}`);
        return;
      }
  
      // You can add more custom field validations here as needed
    }
  
    try {
      const updatedCustomFields = customFields.map((field) => ({
        customFieldID: field.customFieldID,
        FieldName: field.type,
        Value: field.text,
      }));
  
      const updatedProfileData = {
        profileID: selectedProfile.profileID,
        profileName: displayName,
        designation,
        email,
        website,
        companyName,
        mobile: phoneNumber,
        address,
        customFields: updatedCustomFields,
      };
  
      const deletedCustomFields = customFieldsToDelete
        .filter((field) => field.customFieldID !== null)
        .map((field) => field.customFieldID);
  
      const shouldApplyChanges = window.confirm("Apply changes to the profile?");
  
      if (shouldApplyChanges) {
        for (const customFieldID of deletedCustomFields) {
          await deleteCustomField(customFieldID);
          console.log('Custom field deleted:', customFieldID);
        }
  
        const updatedProfile = await updateProfile(updatedProfileData);
        console.log('Profile updated:', updatedProfile);
  
        // Apply changes without a second confirmation
        window.location.reload();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle the error as needed
    }
  };
  
useEffect(() => {
  if (selectedProfile) {
    setDisplayName(selectedProfile.Profilename);
    setDesignation(selectedProfile.Designation);
    setEmail(selectedProfile.email);
    setWebsite(selectedProfile.website);
    setCompanyName(selectedProfile.companyName);
    setPhoneNumber(selectedProfile.PhoneNumber);
    setAddress(selectedProfile.address);
    
   
    const initialCustomFields = selectedProfile.customFields
      ? selectedProfile.customFields.map(field => ({
          customFieldID: field.CustomFieldID, // Assign the fetched customFieldID here
          type: field.FieldName,
          text: field.Value,
        }))
      : [];

      console.log('Selected Profile Custom Fields:', selectedProfile.customFields);
    console.log('Initial Custom Fields:', initialCustomFields);
    setCustomFields(initialCustomFields);
  }
}, [selectedProfile]);



  return (
    <div className="  rounded-xl p-4 overflow-y-auto max-h-[calc(100vh-60px)]" style={{ backgroundColor: "#111536" }}>
      <div className="w-full max-w-2xl mx-auto ">
      <style>
         {`
          .overflow-y-auto::-webkit-scrollbar {
          display: none;
          }
        `}
      </style>
       <div className="flex justify-between">
        <h2 className="text-lg  px-4 bg-111536 text-white text-center font-semibold" style={{ backgroundColor: "#111536" }}>Virtual Contact File (VFC) Information</h2>
        <button
          className="text-white flex relative items-center"
          onClick={onClose}
        >
          {/* Use the AiOutlineCloseCircle icon and apply red color */}
          <AiOutlineCloseCircle size={24} className="text-red-500 hover:text-red-600 mr-1" />
        </button>
          </div>
          <input type="hidden" name="profileID" value={selectedProfile ? selectedProfile.profileID : ''} />

        <hr className="my-4  border-blue-600" />
        <div className="flex flex-wrap -mx-2">
          <div className="w-full  px-2 mb-4">
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
               type="text"               id="designation"
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
        <div
          className="custom-fields-container "
          style={{ scrollbarWidth: "thin", scrollbarColor: "gray dark" }}
        >
       
        {customFields.map((field, index) => (
         <div key={`customField_${index}`} className="md:flex items-center mb-4 ">
           
      
            <div className="flex items-center">
              <span className="mx-2 text-white">Type:</span>
              <select
              className="px-4 py-2 bg-transparent border border-2 border-blue-950 rounded-lg focus:outline-none focus:border-violet-500 text-white "
              value={field.type}
              onChange={(e) => handleTypeChange(index, e)}
              data-customfieldid={field.customFieldID} // Add data attribute
              >
                 <option className="text-white" style={{ backgroundColor: "#111536" }} value="">Select a custom field type</option>
                <option className="text-white" style={{ backgroundColor: "#111536" }}  value="mobile">Mobile Number</option>
                <option className="text-white" style={{ backgroundColor: "#111536" }}  value="email">Email</option>
                <option className="text-white" style={{ backgroundColor: "#111536" }}  value="address">Address</option>
                <option className="text-white" style={{ backgroundColor: "#111536" }}  value="website">Website</option>
                <option className="text-white" style={{ backgroundColor: "#111536" }}  value="company">Company Name</option>
              </select>
            </div>

            <div className="flex space-y-2 md:space-y-0 items-center">
              <label htmlFor={`text${index}`} className="text-white mx-2">
                Text:
              </label>
              <input
                type="text"
                id={`text${index}`}
                className="px-4 py-2 bg-transparent ml-1 border-2 border-blue-950 rounded-lg focus:outline-none focus:border-violet-500 text-white "
                value={field.text}
                onChange={(e) => handleTextChange(index, e)}
              />
          <button
            className="px-3 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 ml-4 flex items-center"
             onClick={() => handleDelete(index, field.customFieldID)}
             >
            <FiTrash2 className="w-5 h-5" />   
          </button>
          </div>
            
          </div>
          ))}
        </div>
        </div>
        {/* ...custom fields */}
        <div className="flex justify-center py-10">
        <button
          type="button"
          className="text-blue-600 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
          onClick={handleUpdateProfile}
        >
          Save Changes
        </button>
        <button
          className="text-blue-600 ml-6 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
          type="button"
          onClick={() => handleDeleteProfile(selectedProfile.profileID)}
        >
          Delete Profile
        </button>
          
        </div>
      </div>

  );
};

export default VFCForm;