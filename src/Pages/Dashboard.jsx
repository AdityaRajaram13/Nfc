import React, { useState,useEffect } from 'react';
import CardList from '../Components/Dashboards/CardList';
import MySvg from '../assets/Images/Header.svg';
import { getProfiles } from '../Services/ProfileService';
import { updateIsDefaultProfile } from '../Services/ProfileService';
import VFCForm from '../Components/Forms/VFCForm';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  

  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(cards[0]); // Initialize selectedCard with the first card
  const [showVFCForm, setShowVFCForm] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedCustomFieldID, setSelectedCustomFieldID] = useState(null); // Define the state for selectedCustomFieldID
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetProfiles = async () => {
      await fetchProfiles();
    };
  
    fetchAndSetProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const profiles = await getProfiles();
      const simplifiedCards = profiles.map((profile) => ({
        id: profile.profileID,
        profileID: profile.profileID,
        Profilename: profile.profileName,
        Designation: profile.designation,
        companyName: profile.companyName,
        PhoneNumber: profile.mobile,
        email: profile.email,
        website: profile.website,
        address: profile.address,
        Visitcount: profile.Visitcount,
        IsDefaultProfile: profile.IsDefaultProfile,
        customFields: profile.customFields || [],
      }));
  
      setCards(simplifiedCards); // Update the cards state with the simplified card data
  
      // Find the card with IsDefaultProfile set to true
      const defaultCard = simplifiedCards.find((card) => card.IsDefaultProfile);
      if (defaultCard) {
        setSelectedCard(defaultCard); // Set the selected card as the default card
        setSelectedProfile(defaultCard);
      }
  
      const selectedCustomFieldID = defaultCard?.customFields[0]?.CustomFieldID || null;
      setSelectedCustomFieldID(selectedCustomFieldID);
    } catch (error) {
      console.error('Error fetching profiles:', error);
      // Handle the error, for example, show an error message to the user.
    }
  };

  
  const handleCardClick = async (card) => {
    setSelectedCard(card);
    setSelectedProfile(card);  
    console.log('Selected Card ID:', card.id);
  
    try {
      // Fetch all profiles for the user
      const userProfiles = await getProfiles(); // You need to implement this function
  
      await Promise.all(
        userProfiles.map(async (profile) => {
          const isDefault = profile.profileID === card.id;
          await updateIsDefaultProfile(profile.profileID, isDefault);
          console.log(`IsDefaultProfile updated to ${isDefault} for Profile ID ${profile.profileID}`);
        })
      );
      console.log('IsDefaultProfile updated successfully');
  
      // If needed, dispatch the fetchProfileData action here
  
    } catch (error) {
      console.error('Error updating IsDefaultProfile:', error);
      // Handle the error, for example, show an error message to the user.
    }
  };
  

  const handleVFCOpen = async (card) => {
    setShowVFCForm(true);
  }
  
  
  const handleAddCardClick = () => {
    navigate('/AddNewCardForm');
  };
  
  console.log('Cards:', cards);
  console.log('Selected Card:', selectedCard);


  return (
    <div className="p-4 h-screen overflow-auto " style={{ backgroundColor: "#0D0F23" }}>
      <div className="mt-20 md:ml-20 relative">
        <div className="mt-32  max-w-[1050px] rounded-3xl bg-gradient-to-t from-cyan-950 to-indigo-950 p-4 relative overflow-hidden">          <p className="text-2xl font-Poppins font-bold text-white mt-2">
            Check out our premier plan to avail <br /> exclusive card templates.
          </p>
          <button className="explore-button font-Poppins bg-gradient-to-t from-blue-600 to-violet-500 text-white mt-4 py-2 px-4 rounded-full shadow">
            Explore
          </button>
        </div>
        <img
          src={MySvg}
          alt="SVG"
          className="invisible md:visible absolute -top-[11%] left-[40%] transform -translate-x-1/12"
          style={{
            width: "50vw",
            maxWidth: "300px",
            zIndex: "1",
          }}
        />
        <h2 className="text-2xl text-white font-Poppins mt-2 font-semibold">Your Cards</h2>
        <CardList
          cards={cards}
          selectedCard={selectedCard}
          onCardClick={handleCardClick}
          onVfcopen={handleVFCOpen}
        />

{cards.length === 0 && (
  <div className=" relative right-56  mt-5">
    <div className="w-96 h-56 m-auto rounded-xl text-white border-dashed border-2 border-gray-400 p-4 flex flex-col justify-center items-center">
      <p className="text-lg font-Poppins">No cards available.</p>
      <p className="text-sm font-Poppins text-gray-300">Click the button below to create a new card.</p>
      <button 
       onClick={handleAddCardClick}
       className="text-blue-600 font-Poppins mt-6 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300">
       
        Create New Card
      </button>
    </div>
  </div>
)}
      </div>
      {/* Conditionally render VFCForm based on showVFCForm */}
      {showVFCForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowVFCForm(false)}
            >
              Close
            </button>
            <VFCForm
              onClose={() => setShowVFCForm(false)}
              selectedProfile={selectedProfile} // Pass the selected profile data
             selectedCustomFieldID={selectedCustomFieldID} // Pass the selected customFieldID
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Dashboard;