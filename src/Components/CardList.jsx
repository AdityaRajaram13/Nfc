import React from 'react';
import ProfileCard from './ProfileCard';

const CardList = ({ cards }) => {
  return (
    
    <div className="mt-5 px-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
       
      {cards.map((card) => (
        <ProfileCard
          key={card.id}
          name={card.name}
          jobTitle={card.jobTitle}
          company={card.company}
          contactDetails={card.contactDetails}
        />
      ))}
    </div>
  );
};

export default CardList;
