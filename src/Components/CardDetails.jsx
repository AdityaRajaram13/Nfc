import React from 'react';

const CardDetails = ({ card }) => {
  return (
    <div className="card-details">
      <h2>{card.name}</h2>
      <p>{card.jobTitle}</p>
      <p>{card.company}</p>
      <p>{card.contactDetails}</p>
      {/* Additional information */}
    </div>
  );
};

export default CardDetails;
