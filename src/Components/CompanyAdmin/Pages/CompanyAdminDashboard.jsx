import React, { useState, useEffect } from "react";
import { MdEdit, MdDelete, MdFileDownload } from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import EditForm from "../Forms/EditForm";
import NewUser from "../Forms/NewUser";
import { getCompanyUsers } from "../../../Services/getcompanyuser"; // Import the service function
import { updateCompanyUser } from '../../../Services/updatecompanyusers'; // Import the updateCompanyUser function
import { createCompanyUser } from '../../../Services/createcompanynewuser'; // Import the createCompanyUser function
import { deleteCompanyUser } from "../../../Services/deletecompanyuser";
import { addUsersWithCompanyAdmin } from "../../../Services/addusercompanyid";

const CompanyAdminDashboard = () => {
  const [sampleUserData, setSampleUserData] = useState([]);

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedUserForEdit, setSelectedUserForEdit] = useState(null);
  const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false); // State for the NewUser modal
  const [isAddingUser, setIsAddingUser] = useState(false);
  const fileInputRef = React.createRef();

  // useEffect(() => {
  //   // Fetch company users when the component mounts
  //   async function fetchCompanyUsers() {
  //     try {
  //       const companyUsers = await getCompanyUsers(); // Assuming you don't need to pass CompanyAdminID here

  //       // Update the state with the fetched company users
  //       setSampleUserData(companyUsers);
  //     } catch (error) {
  //       console.error('Error fetching company users:', error);
  //     }
  //   }

  //   fetchCompanyUsers();
  // }, []);

  useEffect(() => {
    // Fetch company users when the component mounts
    async function fetchCompanyUsers() {
      try {
        // Retrieve CompanyAdminID from local storage
        const CompanyAdminID = localStorage.getItem('companyAdminID');
        
        // Check if CompanyAdminID is available
        if (!CompanyAdminID) {
          console.error('CompanyAdminID not found in local storage.');
          return;
        }
  
        // Fetch company users with CompanyAdminID
        const companyUsers = await getCompanyUsers(CompanyAdminID);
  
        // Update the state with the fetched company users
        setSampleUserData(companyUsers);
      } catch (error) {
        console.error('Error fetching company users:', error);
      }
    }
  
    fetchCompanyUsers();
  }, []);
  

  const handleAddCSV = async () => {
    if (fileInputRef.current && fileInputRef.current.files.length > 0) {
      const selectedCSVFile = fileInputRef.current.files[0];
  
      try {
        const csvText = await selectedCSVFile.text();
        const csvRows = csvText.split('\n');
  
        // Check if the CSV has at least one row (besides the header)
        if (csvRows.length < 2) {
          throw new Error('CSV file is empty or does not contain valid data.');
        }
  
        // Filter and process valid CSV rows
        const csvData = csvRows
          .slice(1) // Skip header row
          .filter((row, index) => {
            const columns = row.split(',');
            if (columns.length !== 3) {
              console.error(`Invalid data in row ${index + 2}. Expected 3 columns. Row Data: ${row}`);
              return false; // Exclude invalid rows
            }
            return true;
          })
          .map((row) => {
            const columns = row.split(',');
            return {
              name: columns[0].trim(),
              username: columns[1].trim(),
              password: columns[2].trim(),
            };
          });
  
        // Replace 'yourCompanyAdminID' with the actual CompanyAdminID
        const CompanyAdminID = localStorage.getItem('companyAdminID');
        
        // Call the addUsersWithCompanyAdmin function with CompanyAdminID and csvData
        const response = await addUsersWithCompanyAdmin(CompanyAdminID, csvData);
  
        if (response.message === 'Users added from CSV successfully') {
          console.log('Users added successfully:', response);
          alert('Users added successfully from CSV.');
          window.location.reload();

        } else {
          console.error('Failed to add users from CSV:', response.error);
          alert('Failed to add users from CSV. Please try again.');
        }
      } catch (error) {
        console.error('Error adding users from CSV:', error);
        alert(`Failed to add users from CSV: ${error.message}`);
      }
  
      // Clear the file input
      fileInputRef.current.value = null;
    }
  };
  
  
  
  


  const handleEdit = (user) => {
    setSelectedUserForEdit(user);
    setIsEditFormOpen(true);
  };

  const handleEditFormSave = async (user, editedUser) => {
    try {
      // Call the updateCompanyUser function here
      await updateCompanyUser(user.CompanyAdminID, user.UserID, editedUser);

      // Handle the successful update or any other logic here
      console.log('User updated successfully'); // Add this console log
      window.location.reload();

    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error updating user:', error.message);
    }
  };




  const handleDelete = async (CompanyAdminID, UserID) => {
    try {
      // Call the deleteCompanyUser function to delete the user
      const deleted = await deleteCompanyUser(CompanyAdminID, UserID);

      if (deleted) {
        // Handle successful deletion by removing the user from the state
        setSampleUserData((prevUsers) => prevUsers.filter((user) => user.UserID !== UserID));
        console.log('User deleted successfully');
      } else {
        // Handle deletion failure
        console.error('Failed to delete user');
      }
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error deleting user:', error);
    }
  };


  const handleOpenNewUserModal = () => {
    setIsNewUserModalOpen(true);
  };

  const handleCloseNewUserModal = () => {
    setIsNewUserModalOpen(false);
  };

  const handleAddUserClick = () => {
    setIsAddingUser(true);
  };

  const handleCloseUserForm = () => {
    setIsAddingUser(false);
  };

  const handleSaveUser = async (userData) => {
    // Assuming you have the CompanyAdminID available in your component
    const CompanyAdminID = 'yourCompanyAdminID';
    try {
      // Call the createCompanyUser function to create a new user
      const response = await createCompanyUser(CompanyAdminID, userData);

      // Handle the response or display a success message
      console.log('User created successfully:', response);
      window.location.reload();

    } catch (error) {
      // Handle any errors that occurred during user creation
      console.error('Error creating user:', error);
    }

    handleCloseUserForm();
  };


  const downloadCSV = () => {
    // Create a header row for the CSV
    const headerRow = [
      'Company Admin ID',
      'User ID',
      'Name',
      'Username',
      'Password',
    ].join(',');
  
    // Create a CSV content string by mapping over the sampleUserData array
    const csvContent = sampleUserData.map((user) => {
      // Prepare the data for each row
      const rowData = [
        user.CompanyAdminID,
        user.UserID,
        user.Name,
        user.Username,
        user.Password,
      ];
  
      // Join the row data with commas
      return rowData.join(',');
    }).join('\n');
  
    // Create a Blob containing the CSV content
    const blob = new Blob([headerRow, '\n', csvContent], { type: 'text/csv' });
  
    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);
  
    // Create a temporary anchor element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_data.csv'; // You can specify the filename here
  
    // Simulate a click on the anchor element to trigger the download
    a.click();
  
    // Clean up the temporary URL
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen font-Poppins" style={{ backgroundColor: "#0D0F23" }}>
      <main className="relative top-20 p-4">
        <div className="flex justify-end space-x-4">
        <button className="flex items-center px-3 py-1 rounded-full bg-green-400 hover:bg-green-500" onClick={() => fileInputRef.current.click()}>
            <FiPlus className="w-5 h-5 mr-1" />
            Add CSV
            <input
              type="file"
              accept=".csv"
              style={{ display: 'none' }}
              onChange={handleAddCSV}
              ref={fileInputRef}
            />
          </button>
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
              onClick={handleAddUserClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Add User
            </button>
          </div>

          <table className="w-full text-white border-collapse border">
            {/* Table headers */}
            <thead>
              <tr>
                <th className="px-4 py-2 border">Select</th>
                <th className="px-4 py-2 border">Company Admin ID</th>
                <th className="px-4 py-2 border">User ID</th> {/* Add this line */}
                <th className="px-4 py-2 border">Name</th>
                {/* <th className="px-4 py-2 border">Company Name</th> */}
                <th className="px-4 py-2 border">Username</th>
                <th className="px-4 py-2 border">Password</th>
                <th className="px-4 py-2 border">Edit</th>
                <th className="px-4 py-2 border">Delete</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {sampleUserData.map((user) => (
                <tr key={user.CompanyAdminID}>
                  <td className="relative left-4 md:left-6 px-4 py-2 border">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2 border">{user.CompanyAdminID}</td>
                  <td className="px-4 py-2 border">{user.UserID}</td>
                  <td className="px-4 py-2 border">{user.Name}</td>
                  {/* <td className="px-4 py-2 border">{user.CompanyName}</td> */}
                  <td className="px-4 py-2 border">{user.Username}</td>
                  <td className="px-4 py-2 border">{user.Password}</td>
                  <td className="px-4 py-2 border">
                    <button onClick={() => handleEdit(user)}> {/* Pass the user object */}
                      <MdEdit className="text-blue-500 hover:text-blue-700 ml-4" />
                    </button>
                  </td>
                  <td className="px-4 py-2 border">
                    <button onClick={() => handleDelete(user.CompanyAdminID, user.UserID)}>
                      <MdDelete className="text-red-500 hover:text-red-700 ml-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Conditionally render the EditModal component */}
          {isEditFormOpen && (
            <EditForm
              user={selectedUserForEdit}
              onSaveEdit={handleEditFormSave} // Pass the new function here
              onClose={() => setIsEditFormOpen(false)}
              updateCompanyUser={updateCompanyUser}
            />

          )}
          {/* Conditionally render the NewUser modal */}
          {isAddingUser && (
            <NewUser isOpen={true} onClose={handleCloseUserForm} onSave={handleSaveUser} />
          )}
        </div>
      </main>
    </div>
  );
};

export default CompanyAdminDashboard;
