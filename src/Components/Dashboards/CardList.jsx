import React from "react";
import CardImage from "../../assets/CardDesign/Approved.svg";
import { MdEdit } from "react-icons/md";

const CardList = ({ cards, selectedCard, onCardClick, onVfcopen }) => {
  return (
    <div className="mt-5 w-400 md:w-730 xl:w-1100  px-4 gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="flex justify-center"
          style={{ backgroundColor: "#111536" }}
          onClick={() => onCardClick(card)}
        >
          <div
            className="w-96 h-56 m-auto rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105"
            style={{
              filter:
                selectedCard && selectedCard.id !== card.id
                  ? "grayscale(1)"
                  : "none",
              transition: "filter 0.3s ease-in-out",
            }}
          >
            {selectedCard && selectedCard.id === card.id && (
              <div
                className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 font-Poppins rounded-full"
                style={{ zIndex: 3 }}
              >
                Active
              </div>
            )}

            <img
              className="relative object-cover w-full h-full rounded-2xl"
              src={CardImage}
              alt="Card Background"
            />
            <div className="w-full px-6 py- absolute top-6">
              <div className="flex items-center space-x-4">
                <div className="font-bold font-Poppins tracking-widest text-xl mb-2">
                  {card.Profilename}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-medium font-Poppins tracking-wider text-sm">
                  {card.companyName}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-medium font-Poppins tracking-wider text-sm">
                  {card.Designation}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="font-medium font-Poppins tracking-wider text-sm">
                  {card.PhoneNumber}
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-gradient-to-br from-blue-500 to-violet-500 text-white font-Quicksand px-2 py-1 border border-1 rounded-full">
              P{index + 1}
            </div>

            <div className="absolute top-12 right-3 cursor-pointer text-gray-400 hover:text-gray-200">
              <button
                className="relative border border-2 border-blue-950 inline-flex items-center justify-center px-1 py-1 overflow-hidden font-mono font-medium tracking-tighter text-white bg-blue-950 rounded-full group"
                onClick={onVfcopen}
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-b from-blue-600 to-violet-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                <span className="flex justify-center items-center font-Inter relative z-10">
                  <MdEdit className=" " />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;