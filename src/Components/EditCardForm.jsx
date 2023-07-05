import React, { useState } from 'react';

const EditCardForm = ({ card, onEditCard }) => {
  const [name, setName] = useState(card.name);
  const [jobTitle, setJobTitle] = useState(card.jobTitle);
  const [company, setCompany] = useState(card.company);
  const [contactDetails, setContactDetails] = useState(card.contactDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCard = {
      id: card.id,
      name,
      jobTitle,
      company,
      contactDetails
    };
    onEditCard(updatedCard);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Job Title"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company"
      />
      <input
        type="text"
        value={contactDetails}
        onChange={(e) => setContactDetails(e.target.value)}
        placeholder="Contact Details"
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditCardForm;
