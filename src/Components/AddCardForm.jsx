import React, { useState } from 'react';

const AddCardForm = ({ onAddCard }) => {
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      name,
      jobTitle,
      company,
      contactDetails
    };
    onAddCard(newCard);
    setName('');
    setJobTitle('');
    setCompany('');
    setContactDetails('');
  };

  return (
    <form onSubmit={handleSubmit} className=" space-x-4 bg-white rounded-lg shadow p-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border border-gray-300 rounded p-2 mb-2"
      />
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Job Title"
        className="border border-gray-300 rounded p-2 mb-2"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
        className="border border-gray-300 rounded p-2 mb-2"
      />
      <input
        type="text"
        value={contactDetails}
        onChange={(e) => setContactDetails(e.target.value)}
        placeholder="Contact Details"
        className="border border-gray-300 rounded p-2 mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add Card
      </button>
    </form>
  );
};

export default AddCardForm;
