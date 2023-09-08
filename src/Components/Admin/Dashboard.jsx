import React, { useState, useEffect } from 'react';
import { MdEdit, MdDelete, MdFileDownload } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { getAllUsers} from '../../Services/adminuserdata'; // Import the service
import {updateUser} from '../../Services/adminuserdata'; // Update the import path
import {deleteUser} from '../../Services/adminuserdata'; // Update the import path
import { addUser } from '../../Services/adminuserdata';
import { addUsersFromCSV } from '../../Services/adminuserdata'; // Import the service

import NewUser from './NewUser';
import EditForm from './EditForm';

const Dashboard = () => {
  const [sampleUserData, setSampleUserData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState(null);
  const [isNewUserFormOpen, setIsNewUserFormOpen] = useState(false);
  const [csvFile, setCsvFile] = useState(null);

  useEffect(() => {
    fetchSampleUserData();
  }, []);

  const fetchSampleUserData = async () => {
    try {
      const userData = await getAllUsers();
      setSampleUserData(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };


  const handleCSVFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setCsvFile(selectedFile);
  };

  // Function to handle adding users from CSV
  const handleAddUsersFromCSV = async () => {
    if (csvFile) {
      try {
        const csvText = await csvFile.text();
        const csvRows = csvText.split('\n');
  
        // Skip the first row (header) and remove empty lines
        const validCsvRows = csvRows.slice(1).filter(row => row.trim() !== '');
  
        const csvData = validCsvRows.map((row) => {
          const [userID, name, username, email, phone, password] = row.split(',');
          return { userID, name, username, email, phone, password };
        });
  
        const response = await addUsersFromCSV(csvData);
        console.log('Users added from CSV:', response.addedUsers);
        fetchSampleUserData(); // Fetch updated user data after adding from CSV
  
        alert('Users added successfully from CSV.'); // Display success message
      } catch (error) {
        console.error('Error adding users from CSV:', error);
        alert('Failed to add users from CSV. Please try again.'); // Display error message
      }
    }
  };
  
  
  

  const handleAddNewUser = () => {
    setIsNewUserFormOpen(true);
  };

  const handleSaveNewUser = async (newUserData) => {
    try {
      await addUser(newUserData);
      console.log('User added successfully');
      setIsNewUserFormOpen(false); // Close the new user form modal
      fetchSampleUserData(); // Fetch updated user data

    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleEditModalClose = () => {
    setIsEditFormOpen(false);
  };

  const handleEdit = (user) => {
    setSelectedUserForEdit(user);
    setIsEditFormOpen(true);
  };



  
  const handleSaveEdit = async (editedUser) => {
    try {
      await updateUser(editedUser.UserID, editedUser);
      console.log('User data updated successfully');
      
      // Update the user data in the state to reflect changes immediately
      const updatedUserData = sampleUserData.map((user) =>
        user.UserID === editedUser.UserID ? editedUser : user
      );
      setSampleUserData(updatedUserData);
      
      setIsEditFormOpen(false); // Close the edit form
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  

  const downloadCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + "User ID,Name,Username,Email,Phone,Password\n"
      + sampleUserData.map(user =>
        `${user.UserID},"${user.Name}","${user.Username}","${user.Email}","${user.Phone}","${user.Password}"`
      ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "user_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
  
      // Update the user data in the state to reflect changes immediately
      const updatedUserData = sampleUserData.filter(user => user.UserID !== userId);
      setSampleUserData(updatedUserData);
  
      console.log('Deleted user with ID:', userId);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  return (
    <div className=" min-h-screen" style={{ backgroundColor: "#0D0F23" }}>
      <main className="relative top-20 p-4 ">

        <div className="flex justify-end space-x-4">
        <input
    type="file"
    accept=".csv"
    onChange={handleCSVFileChange} // Call the handler when a file is selected
    onClick={handleAddUsersFromCSV}
    className="hidden"
    id="csvFileInput"
  />
  <label

    htmlFor="csvFileInput"
    className="flex items-center px-3 py-1 rounded-full bg-green-400 hover:bg-green-500 cursor-pointer"
  >
    <FiPlus className="w-5 h-5 mr-1" />
    Add CSV
  </label>
          <button
            className="flex items-center px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
            onClick={downloadCSV}
          >
            <MdFileDownload className="w-5 h-5 mr-1" />
            Export CSV
          </button>
        </div>

        <div className="flex flex-col max-h-[calc(100vh-200px)] mt-4 p-4 overflow-auto rounded shadow w-5/6 relative left-12 md:left-64 border-2 border-blue-950" style={{ backgroundColor: "#111536" }}>
        <style>
          {`
            .overflow-auto::-webkit-scrollbar {
            display: none;
            }
          `}
        </style>
          <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-white font-Inter relative md:left-[45%] font-semibold mb-4">User Data</h2>
            <button
              className="flex items-center px-3 py-1 rounded-full bg-green-400 hover:bg-green-500"
              onClick={handleAddNewUser}
            >
              <FiPlus className="w-5 h-5 mr-1" />
              Add User
            </button>
          </div>

          <table className="w-full  text-white border-collapse border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Select</th>
                <th className="px-4 py-2 border">User ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Password</th>
                <th className="px-4 py-2 border">Edit</th>
                <th className="px-4 py-2 border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {sampleUserData.map(user => (
                <tr key={user.UserID}>
                  <td className="relative left-4 md:left-6 px-4 py-2 border">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 border">{user.UserID}</td>
                  <td className="px-4 py-2 border">{user.Name}</td>
                  <td className="px-4 py-2 border">{user.Username}</td>
                  <td className="px-4 py-2 border">{user.Email}</td>
                  <td className="px-4 py-2 border">{user.Phone}</td>
                  <td className="px-4 py-2 border">{user.Password}</td>
                  <td className="px-4 py-2 border">
                    <button onClick={() => handleEdit(user)}>
                      <MdEdit className="text-blue-500 hover:text-blue-700 ml-4" />
                    </button>
                  </td>
                  <td className="px-4 py-2 border">
                    <button onClick={() => handleDelete(user.UserID)}>
                      <MdDelete className="text-red-500 hover:text-red-700 ml-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Conditionally render the EditModal component */}
          {isEditFormOpen && (
            <EditForm user={selectedUserForEdit} onSaveEdit={handleSaveEdit} onClose={handleEditModalClose} />
          )}
          {isNewUserFormOpen && (
            <NewUser
              isOpen={isNewUserFormOpen}
              onClose={() => setIsNewUserFormOpen(false)}
              onSave={handleSaveNewUser}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;