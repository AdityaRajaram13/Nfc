import React, { useState } from 'react';

const NewUser = ({ isOpen, onClose, onSave }) => {
  // Initialize form fields
  const [formData, setFormData] = useState({
    Name: '',
    Username: '',
    Password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Validate form data here if needed
    onSave(formData); // Pass the form data to the parent component
    onClose();
  };

  return (
    <div className={"fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50"}>
      <div className="bg-blue-950 p-6 rounded-lg shadow-xl max-w-500 border-2 border-blue-950" style={{ backgroundColor: "#111536" }}>
        <h2 className="text-3xl font-bold mb-4 text-white">Create New User</h2>
        <form>
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1 text-white" htmlFor="Name">Name</label>
              <input
                type="text"
                name="Name"
                id="Name"
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border-2 border-blue-950  focus:outline-none focus:border-violet-500"
                value={formData.Name}
                onChange={handleInputChange}
              />
            </div>
           
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white" htmlFor="Username">Username</label>
            <input
              type="text"
              name="Username"
              id="Username"
              className="w-full px-4 py-2 text-white bg-transparent rounded-lg border-2 border-blue-950  focus:outline-none focus:border-violet-500"
              value={formData.Username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-white" htmlFor="Password">Password</label>
            <input
              type="password"
              name="Password"
              id="Password"
              className="w-full px-4 py-2 text-white bg-transparent rounded-lg border-2 border-blue-950  focus:outline-none focus:border-violet-500"
              value={formData.Password}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="mt-6 flex justify-center items-center space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              onClick={handleSubmit}
            >
             Add User
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
