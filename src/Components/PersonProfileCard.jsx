import React, { useState } from 'react';

const PersonProfileCard = ({ name, age, occupation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedAge, setEditedAge] = useState(age);
  const [editedOccupation, setEditedOccupation] = useState(occupation);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save the edited details and update the card
    // For simplicity, we'll just update the state here
    name = editedName;
    age = editedAge;
    occupation = editedOccupation;

    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded border border-gray-300 shadow-md p-4 w-64">
      <h2 className="text-xl font-bold mb-4">Person Profile</h2>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 mb-2"
          />
          <input
            type="text"
            value={editedAge}
            onChange={(e) => setEditedAge(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 mb-2"
          />
          <input
            type="text"
            value={editedOccupation}
            onChange={(e) => setEditedOccupation(e.target.value)}
            className="border border-gray-300 rounded py-2 px-4 mb-2"
          />
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p className="mb-2">Name: {name}</p>
          <p className="mb-2">Age: {age}</p>
          <p className="mb-2">Occupation: {occupation}</p>
          <button
            onClick={handleEditClick}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default PersonProfileCard;
