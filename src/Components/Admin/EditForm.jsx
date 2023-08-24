import React, { useState } from 'react';
import { MdEdit, MdClose } from 'react-icons/md';

const EditModal = ({ user, onSaveEdit, onClose }) => {
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    onSaveEdit(editedUser);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded shadow w-78 border-2 border-blue-950" style={{ backgroundColor: "#111536" }}>
        <div className="flex justify-end">
          <button className="hover:text-red-500" onClick={onClose}>
            <MdClose className="text-white" />
          </button>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center font-Quicksand text-white">Edit User</h2>
        <div className="mb-4 font-Quicksand flex">
          <div className="w-1/2  pr-2">
            <label className="block text-sm font-medium  text-white">Name</label>
            <input
              type="text"
              name="Name"
              value={editedUser.Name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-white bg-transparent rounded-lg border-2 border-blue-950  focus:outline-none focus:border-violet-500"
              />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block text-sm font-medium  text-white">Username</label>
            <input
              type="text"
              name="Username"
              value={editedUser.Username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-white bg-transparent rounded-lg border-2 border-blue-950  focus:outline-none focus:border-violet-500"
              />
          </div>
        </div>
        <div className="mb-4 font-Quicksand">
          <label className="block text-sm font-medium  text-white">Email</label>
          <input
            type="email"
            name="Email"
            value={editedUser.Email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-white bg-transparent rounded-lg border-2 border-blue-950  focus:outline-none focus:border-violet-500"
            />
        </div>
        <div className="mb-4 font-Quicksand">
          <label className="block text-sm font-medium  text-white">Phone</label>
          <input
            type="text"
            name="Phone"
            value={editedUser.Phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-white bg-transparent rounded-lg border-2 border-blue-950  focus:outline-none focus:border-violet-500"
            />
        </div>
        <div className="mb-4 font-Quicksand">
          <label className="block text-sm font-medium  text-white">Password</label>
          <input
            type="password"
            name="Password"
            value={editedUser.Password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 text-white bg-transparent rounded-lg border-2 border-blue-950  focus:outline-none focus:border-violet-500"
            />
        </div>
        <button
          className="px-3 py-1 font-Quicksand bg-blue-500 hover:bg-blue-600 text-white rounded-full "
          onClick={handleSaveEdit}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditModal;
