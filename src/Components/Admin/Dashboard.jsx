import React, { useState } from 'react';
import { MdEdit, MdDelete, MdFileDownload } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import NewUser from './NewUser';
import EditForm from './EditForm';
import sampleUserData from "./JSONDATA/sampleUserData.json";

const Dashboard = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState(null);
  const [isNewUserFormOpen, setIsNewUserFormOpen] = useState(false);

  const handleAddNewUser = () => {
    setIsNewUserFormOpen(true);
  };

  const handleEditModalClose = () => {
    // Close the edit modal without saving
    setIsEditFormOpen(false);
  };

  const handleEdit = (user) => {
    setSelectedUserForEdit(user);
    setIsEditFormOpen(true);
  };

  const handleSaveEdit = (editedUser) => {
    // Implement logic to save edited user data
    console.log('Edited user data:', editedUser);
    setIsEditFormOpen(false);

    // Update the sampleUserData with the editedUser data
    const updatedUserData = sampleUserData.map((user) =>
      user.UserID === editedUser.UserID ? editedUser : user
    );

    // Update the state with the updated user data
    setSampleUserData(updatedUserData);

    // Implement the logic to update the user data in your app state or API
    // For now, just log the updated data
    console.log('Updated user data:', updatedUserData);
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

  const handleDelete = (userId) => {
    // Find the index of the user with the given userId
    const userIndex = sampleUserData.findIndex((user) => user.UserID === userId);

    if (userIndex !== -1) {
      // Remove the user from the array using splice
      const updatedUserData = [...sampleUserData];
      updatedUserData.splice(userIndex, 1);

      // Update the state and the sampleUserData
      setSelectedUsers(updatedUserData);
      // Update other state if needed

      console.log('Deleted user with ID:', userId);
    }
  };

  return (
    <div className=" min-h-screen" style={{ backgroundColor: "#0D0F23" }}>
      <main className="relative top-20 p-4 ">

        <div className="flex justify-end space-x-4">
          <button className="flex items-center px-3 py-1 rounded-full bg-green-400 hover:bg-green-500">
            <FiPlus className="w-5 h-5 mr-1" />
            Add CSV
          </button>
          <button
            className="flex items-center px-3 py-1 rounded-full bg-blue-400 hover:bg-blue-500"
            onClick={downloadCSV}
          >
            <MdFileDownload className="w-5 h-5 mr-1" />
            Export CSV
          </button>
        </div>

        <div className="flex flex-col mt-4 p-4 overflow-auto rounded shadow w-5/6 relative left-12 md:left-64 border-2 border-blue-950" style={{ backgroundColor: "#111536" }}>

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

          <table className="w-full text-white border-collapse border">
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
              onSave={(newUserData) => handleSaveNewUser(newUserData)}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
