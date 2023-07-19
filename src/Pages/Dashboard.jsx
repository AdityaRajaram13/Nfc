import React, { useState } from 'react';
import CardList from '../Components/Dashboards/CardList';
import MySvg from '../assets/Images/Header.svg';


const Dashboard = () => {
    const [cards, setCards] = useState([
        // Initial sample card
        {
            id: 1,
            name: 'Aditya Rajaram',
            jobTitle: 'Software Engineer',
            company: 'ABC Corp',
            contactDetails: 'john.doe@example.com',
        },
        {
            id: 1,
            name: 'Aditya Rajaram',
            jobTitle: 'Software Engineer',
            company: 'ABC Corp',
            contactDetails: 'john.doe@example.com',
        },
        {
            id: 2,
            name: 'Vinayak Vishwakarma',
            jobTitle: 'Software Engineer',
            company: 'ABC Corp',
            contactDetails: 'john.doe@example.com',
        },
        {
            id: 3,
            name: 'Vinayak Vishwakamra',
            jobTitle: 'Software Engineer',
            company: 'ABC Corp',
            contactDetails: 'john.doe@example.com',
        },
    ]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    

    const handleAddCard = (newCard) => {
        setCards([...cards, newCard]);
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsEditing(false);
    };

    const handleEditCard = (updatedCard) => {
        const updatedCards = cards.map((card) =>
            card.id === updatedCard.id ? updatedCard : card
        );
        setCards(updatedCards);
        setSelectedCard(updatedCard);
        setIsEditing(false);
    };


    return (
        
        <div className="p-4 " style={{ backgroundColor: "#0D0F23" }}>
        <div className="mt-20 ml-20 relative">
          <div className="mt-32 w-[800px] lg:w-[850px] xl:w-[1050px] rounded-3xl bg-gradient-to-t from-cyan-950 to-indigo-950 p-4 relative overflow-hidden">
            <p className="text-2xl font-bold text-white mt-2">
              Check out our premier plan to avail <br /> exclusive card templates.
            </p>
            <button className="explore-button bg-gradient-to-t from-blue-600 to-violet-500 text-white mt-4 py-2 px-4 rounded-full shadow">
              Explore
            </button>
          </div>
          <img
            src={MySvg}
            alt="SVG"
            className="absolute bottom-[72%] left-[40%] transform -translate-x-1/8"
            style={{
              width: "50vw",
              maxWidth: "300px",
              zIndex: "1",
            }}
          />
          <h2 className="text-2xl text-white font-semibold">Your Cards</h2>
          <CardList cards={cards} onCardClick={handleCardClick} />
        </div>
      </div>
      
      

    );
};

export default Dashboard;