import React from 'react';
import CardImage from '../assets/CardDesign/Approved.svg';

const CardList = ({ cards }) => {
  return (
    <div className="mt-5 w-730 px-4 gap-5 grid grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex justify-center"
          style={{ backgroundColor: "#111536" }}
        >
          <div className="w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105">
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src={CardImage}
              alt="Card Background"
            />
            <div className="w-full px-6 py- absolute top-6">
              <div className="flex items-center space-x-4">
                <div className="font-medium text-xs mb-1"></div>
                <div className="font-bold tracking-widest text-lg mb-2">
                  {card.name}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-medium text-xs mb-1"></div>
                <div className="font-medium tracking-wider text-sm">
                  {card.company}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-medium text-xs mb-1"></div>
                <div className="font-medium tracking-wider text-sm">
                  {card.jobTitle}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-medium text-xs mb-1"></div>
                <div className="font-medium tracking-wider text-sm">
                  {card.contactDetails}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
