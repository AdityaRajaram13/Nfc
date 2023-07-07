// import React, { useState } from 'react';
// import CardProfile from './CardProfile';
// import TemplateComponent from './TemplateComponent';

// const App = () => {
//   const [showTemplate, setShowTemplate] = useState(false);
//   const [formData, setFormData] = useState(null);

//   const handleSubmit = (data) => {
//     setFormData(data);
//     setShowTemplate(true);
//   };

//   return (
//     <div className="bg-[url('C:\Users\Vinayak\Desktop\NFC2\nfc\src\assets\Images\bimage.svg')] bg-cover bg-center">
//       {!showTemplate ? (
//         <CardProfile onSubmit={handleSubmit} />
//       ) : (
//         <TemplateComponent formData={formData} />
//       )}
//     </div>
//   );
// };

// export default App;






// import React, { useState } from 'react';
// import CardProfile from './CardProfile';
// import TemplateComponent from './TemplateComponent';

// const App = () => {
//   const [showTemplate, setShowTemplate] = useState(false);
//   const [formData, setFormData] = useState(null);

//   const handleSubmit = (data) => {
//     setFormData(data);
//     setShowTemplate(true);
//   };

//   return (
//     <div className="bg-[url('C:\Users\Vinayak\Desktop\NFC2\nfc\src\assets\Images\bimage.svg')] bg-cover bg-center">
//       <CardProfile onSubmit={handleSubmit} showTemplate={showTemplate} formData={formData} />
//     </div>
//   );
// };

// export default App;








// import React, { useState } from 'react';
// import CardProfile from './CardProfile';

// const App = () => {
//   const [formData, setFormData] = useState(null);

//   const handleSubmit = (data) => {
//     setFormData(data);
//   };

//   return (
//     <div className="bg-[url('C:\Users\Vinayak\Desktop\NFC2\nfc\src\assets\Images\bimage.svg')] bg-cover bg-center">
//       <CardProfile onSubmit={handleSubmit} formData={formData} />
//     </div>
//   );
// };

// export default App;










// import React, { useState } from 'react';
// import CardList from './CardList';
// import AddCardForm from './AddCardForm';
// import CardDetails from './CardDetails';
// import EditCardForm from './EditCardForm';
// import UserProfile from './UserProfile';
// import Sidebar from './Sidebar';
// import CardDash from './CardDash';

// const Merge = () => {
//   const [cards, setCards] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userProfile, setUserProfile] = useState({
//     name: '',
//     jobTitle: '',
//     company: '',
//     contactDetails: '',
//   });

//   const handleAddCard = (newCard) => {
//     setCards([...cards, newCard]);
//   };

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//     setIsEditing(false);
//   };

//   const handleEditCard = (updatedCard) => {
//     const updatedCards = cards.map((card) =>
//       card.id === updatedCard.id ? updatedCard : card
//     );
//     setCards(updatedCards);
//     setSelectedCard(updatedCard);
//     setIsEditing(false);
//   };

//   const handleEditProfile = (updatedProfile) => {
//     setUserProfile(updatedProfile);
//   };

//   return (

//    <div style={{ backgroundColor: "#111536" }}>
    
//       <div className="flex justify-end ">
        
//     <div className="flex items-center">
//       <div className="flex flex-col p-4">
//         <div className="bg-white rounded-lg shadow-lg p-4">
//           <div className="space-y-4">

//             <div>
//               <h2 className="text-lg font-semibold">Add Card</h2>
//               <AddCardForm onAddCard={handleAddCard} />
//             </div>

//             <div>
//               <h2 className="text-lg font-semibold ">Card List</h2>
//               <CardList cards={cards} onCardClick={handleCardClick} />
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
 
//        <div className="flex  justify-end items-end  ">
//         <div className="bg-white w-340  ">
//           <div className="">
//             {/* <h2 className="text-lg bg-111536 text-white text-center font-semibold " style={{ backgroundColor: "#111536" }}  >My Profile</h2> */}
//             <div className="">
//               <div className=" ">
//                 <UserProfile profile={userProfile} onEdit={handleEditProfile} />
//               </div>
//               <div className="  ">
//                 <CardDash />
//               </div>
//             </div>

//             {/* <div>
//               <h2 className="text-lg font-semibold">Add Card</h2>
//               <AddCardForm onAddCard={handleAddCard} />
//             </div>

//             <div>
//               <h2 className="text-lg font-semibold ">Card List</h2>
//               <CardList cards={cards} onCardClick={handleCardClick} />
//             </div> */}

//             {selectedCard && !isEditing && (
//               <div className="">
//               <div>
//                 <h2 className="text-lg font-semibold">Card Details</h2>
//                 <CardDetails card={selectedCard} />
//                 <button
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   onClick={() => setIsEditing(true)}
//                 >
//                   Edit Card
//                 </button>
//               </div>
//               </div>
//             )}

//             {selectedCard && isEditing && (
//               <div className="absolute">
//                 <h2 className="text-lg font-semibold">Edit Card</h2>
//                 <EditCardForm card={selectedCard} onEditCard={handleEditCard} />
//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   Cancel Edit
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>





//     </div>
//   );
// };

// export default Merge;










// import React, { useState } from 'react';
// import CardList from './CardList';
// import AddCardForm from './AddCardForm';
// import CardDetails from './CardDetails';
// import EditCardForm from './EditCardForm';
// import UserProfile from './UserProfile';
// import Sidebar from './Sidebar';
// import CardDash from './CardDash';

// const Merge = () => {
//   const [cards, setCards] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userProfile, setUserProfile] = useState({
//     name: '',
//     jobTitle: '',
//     company: '',
//     contactDetails: '',
//   });
  

//   const handleAddCard = (newCard) => {
//     setCards([...cards, newCard]);
//   };

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//     setIsEditing(false);
//   };

//   const handleEditCard = (updatedCard) => {
//     const updatedCards = cards.map((card) =>
//       card.id === updatedCard.id ? updatedCard : card
//     );
//     setCards(updatedCards);
//     setSelectedCard(updatedCard);
//     setIsEditing(false);
//   };

//   const handleEditProfile = (updatedProfile) => {
//     setUserProfile(updatedProfile);
//   };

//   return (
//     <div style={{ backgroundColor: "#111536" }}>
//       <div className="flex">
//         <div className="flex  items-center">
//           <div className="flex flex-col p-4">
//             <div className="rounded-lg shadow-lg p-4">
//               <div className="space-y-4">
//                 {/* <div>
//                   <h2 className="text-lg font-semibold">Add Card</h2>
//                   <AddCardForm onAddCard={handleAddCard} />
//                 </div> */}
//                 <div >
//                   <h2 className="text-lg text-white font-semibold " >Card List</h2>
//                   <CardList cards={cards} onCardClick={handleCardClick} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="fixed top-3 right-0 bottom-0 bg-white w-340">
//           <div>
//             <div className="">
//               <UserProfile profile={userProfile} onEdit={handleEditProfile} />
//             </div>
//             <div className="">
//               <CardDash />
//             </div>
//             {selectedCard && !isEditing && (
//               <div>
//                 <h2 className="text-lg font-semibold">Card Details</h2>
//                 <CardDetails card={selectedCard} />
//                 <button
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   onClick={() => setIsEditing(true)}
//                 >
//                   Edit Card
//                 </button>
//               </div>
//             )}
//             {selectedCard && isEditing && (
//               <div>
//                 <h2 className="text-lg font-semibold">Edit Card</h2>
//                 <EditCardForm card={selectedCard} onEditCard={handleEditCard} />
//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   Cancel Edit
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Merge;













// import React, { useState } from 'react';
// import CardList from './CardList';
// import AddCardForm from './AddCardForm';
// import CardDetails from './CardDetails';
// import EditCardForm from './EditCardForm';
// import UserProfile from './UserProfile';
// import Sidebar from './Sidebar';
// import CardDash from './CardDash';
// import Header from './Header';

// const Merge = () => {
//   const [cards, setCards] = useState([
//     // Initial sample card
//     {
//       id: 1,
//       name: 'John Doe',
//       jobTitle: 'Software Engineer',
//       company: 'ABC Corp',
//       contactDetails: 'john.doe@example.com',
//     },
//     {
//       id: 1,
//       name: 'John Doe',
//       jobTitle: 'Software Engineer',
//       company: 'ABC Corp',
//       contactDetails: 'john.doe@example.com',
//     },
//     {
//       id: 2,
//       name: 'John Shoe',
//       jobTitle: 'Software Engineer',
//       company: 'ABC Corp',
//       contactDetails: 'john.doe@example.com',
//     },
//     {
//       id: 3,
//       name: 'John Doe',
//       jobTitle: 'Software Engineer',
//       company: 'ABC Corp',
//       contactDetails: 'john.doe@example.com',
//     },
//   ]);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userProfile, setUserProfile] = useState({
//     name: '',
//     jobTitle: '',
//     company: '',
//     contactDetails: '',
//   });
  

//   const handleAddCard = (newCard) => {
//     setCards([...cards, newCard]);
//   };

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//     setIsEditing(false);
//   };

//   const handleEditCard = (updatedCard) => {
//     const updatedCards = cards.map((card) =>
//       card.id === updatedCard.id ? updatedCard : card
//     );
//     setCards(updatedCards);
//     setSelectedCard(updatedCard);
//     setIsEditing(false);
//   };

//   const handleEditProfile = (updatedProfile) => {
//     setUserProfile(updatedProfile);
//   };

//   return (
//     <div style={{ backgroundColor: "#111536" }}>
//       <div className="">
//       <Header />
//         <div className="flex  items-center">
          
//           <div className="flex flex-col p-4" >
//             <div className="bg-white rounded-lg shadow-lg p-4" style={{ backgroundColor: "#111536" }}  >
//               <div className="space-y-4">
//                 {/* <div>
//                   <h2 className="text-lg font-semibold">Add Card</h2>
//                   <AddCardForm onAddCard={handleAddCard} />
//                 </div> */}
//                 <div style={{ backgroundColor: "#111536" }}>
//                   <h2 className="text-lg  font-semibold ">Card List</h2>
//                   <CardList cards={cards} onCardClick={handleCardClick} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="fixed top-3 right-0 bottom-0 bg-white w-340">

//           <div>
//             <div className="">
//               <UserProfile profile={userProfile} onEdit={handleEditProfile} />
//             </div>
//             <div className="">
//               <CardDash />
//             </div>
//             {selectedCard && !isEditing && (
//               <div>
//                 <h2 className="text-lg font-semibold">Card Details</h2>
//                 <CardDetails card={selectedCard} />
//                 <button
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   onClick={() => setIsEditing(true)}
//                 >
//                   Edit Card
//                 </button>
//               </div>
//             )}
//             {selectedCard && isEditing && (
//               <div>
//                 <h2 className="text-lg font-semibold">Edit Card</h2>
//                 <EditCardForm card={selectedCard} onEditCard={handleEditCard} />
//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   Cancel Edit
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Merge;














// import React, { useState } from 'react';
// import CardList from './CardList';
// import AddCardForm from './AddCardForm';
// import CardDetails from './CardDetails';
// import EditCardForm from './EditCardForm';
// import UserProfile from './UserProfile';
// import Sidebar from './Sidebar';
// import CardDash from './CardDash';
// import Header from './Header';

// const Merge = () => {
//   const [cards, setCards] = useState([
//     // Initial sample card
//     {
//       id: 1,
//       name: 'Aditya Rajaram',
//       jobTitle: 'Software Engineer',
//       company: 'ABC Corp',
//       contactDetails: 'john.doe@example.com',
//     },
//     {
//       id: 1,
//       name: 'Aditya Rajaram',
//       jobTitle: 'Software Engineer',
//       company: 'ABC Corp',
//       contactDetails: 'john.doe@example.com',
//     },
//     {
//       id: 2,
//       name: 'Vinayak Vishwakarma',
//       jobTitle: 'Software Engineer',
//       company: 'ABC Corp',
//       contactDetails: 'john.doe@example.com',
//     },
//     {
//       id: 3,
//       name: 'Vinayak Vishwakamra',
//       jobTitle: 'Software Engineer',
//       company: 'ABC Corp',
//       contactDetails: 'john.doe@example.com',
//     },
//   ]);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [userProfile, setUserProfile] = useState({
//     name: '',
//     jobTitle: '',
//     company: '',
//     contactDetails: '',
//   });

//   const handleAddCard = (newCard) => {
//     setCards([...cards, newCard]);
//   };

//   const handleCardClick = (card) => {
//     setSelectedCard(card);
//     setIsEditing(false);
//   };

//   const handleEditCard = (updatedCard) => {
//     const updatedCards = cards.map((card) =>
//       card.id === updatedCard.id ? updatedCard : card
//     );
//     setCards(updatedCards);
//     setSelectedCard(updatedCard);
//     setIsEditing(false);
//   };

//   const handleEditProfile = (updatedProfile) => {
//     setUserProfile(updatedProfile);
//   };

//   return (

//    <div style={{ backgroundColor: "#111536" }}>
    
//       <div className="flex justify-end ">
        
//     <div className="flex items-center">
//       <div className="flex flex-col p-4">
//         <div className="rounded-lg shadow-lg p-4" style={{ backgroundColor: "#111536" }}>
//           <div className="space-y-4">

//             {/* <div>
//               <h2 className="text-lg font-semibold">Add Card</h2>
//               <AddCardForm onAddCard={handleAddCard} />
//             </div> */}
//              <div>
//              <Header />
//             </div>

//             <div>
//               <h2 className="text-2xl text-white font-semibold ">Your Cards</h2>
//               <CardList cards={cards} onCardClick={handleCardClick} />
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
 
//        <div className="flex  justify-end items-end  ">
//         <div className="bg-white w-340  ">
//           <div className="">
//             {/* <h2 className="text-lg bg-111536 text-white text-center font-semibold " style={{ backgroundColor: "#111536" }}  >My Profile</h2> */}
//             <div className="">
//               <div className=" ">
//                 <UserProfile profile={userProfile} onEdit={handleEditProfile} />
//               </div>
//               <div className="  ">
//                 <CardDash />
//               </div>
//             </div>

//             {/* <div>
//               <h2 className="text-lg font-semibold">Add Card</h2>
//               <AddCardForm onAddCard={handleAddCard} />
//             </div>

//             <div>
//               <h2 className="text-lg font-semibold ">Card List</h2>
//               <CardList cards={cards} onCardClick={handleCardClick} />
//             </div> */}

//             {selectedCard && !isEditing && (
//               <div className="">
//               <div>
//                 <h2 className="text-lg font-semibold">Card Details</h2>
//                 <CardDetails card={selectedCard} />
//                 <button
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   onClick={() => setIsEditing(true)}
//                 >
//                   Edit Card
//                 </button>
//               </div>
//               </div>
//             )}

//             {selectedCard && isEditing && (
//               <div className="absolute">
//                 <h2 className="text-lg font-semibold">Edit Card</h2>
//                 <EditCardForm card={selectedCard} onEditCard={handleEditCard} />
//                 <button
//                   className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   Cancel Edit
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>





//     </div>
//   );
// };

// export default Merge;











import React, { useState } from 'react';
import CardList from './CardList';
import AddCardForm from './AddCardForm';
import CardDetails from './CardDetails';
import EditCardForm from './EditCardForm';
import UserProfile from './UserProfile';
import Sidebar from './Sidebar';
import CardDash from './CardDash';
import Header from './Header';
import Navbar from './Navbar';

const Merge = () => {
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
  const [userProfile, setUserProfile] = useState({
    name: '',
    jobTitle: '',
    company: '',
    contactDetails: '',
  });

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

  const handleEditProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  return (


    <div className="flex flex-col"><Navbar />
<div className="flex "><Sidebar />

   <div style={{ backgroundColor: "#111536" }}>
   
      <div className="flex justify-end ">
        
    <div className="flex items-center">
      <div className="flex flex-col p-4">
        <div className="rounded-lg shadow-lg p-4" style={{ backgroundColor: "#111536" }}>
          <div className="space-y-4">

            {/* <div>
              <h2 className="text-lg font-semibold">Add Card</h2>
              <AddCardForm onAddCard={handleAddCard} />
            </div> */}
             <div>
             <Header />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white font-semibold ">Your Cards</h2>
              <CardList cards={cards} onCardClick={handleCardClick} />
            </div>
            
          </div>
        </div>
      </div>
    </div>
 
       <div className="flex  justify-end items-end  ">
        <div className="bg-white w-340  ">
          <div className="">
            {/* <h2 className="text-lg bg-111536 text-white text-center font-semibold " style={{ backgroundColor: "#111536" }}  >My Profile</h2> */}
            <div className="">
              <div className=" ">
                <UserProfile profile={userProfile} onEdit={handleEditProfile} />
              </div>
              <div className="  ">
                <CardDash />
              </div>
            </div>

            {/* <div>
              <h2 className="text-lg font-semibold">Add Card</h2>
              <AddCardForm onAddCard={handleAddCard} />
            </div>

            <div>
              <h2 className="text-lg font-semibold ">Card List</h2>
              <CardList cards={cards} onCardClick={handleCardClick} />
            </div> */}

            {selectedCard && !isEditing && (
              <div className="">
              <div>
                <h2 className="text-lg font-semibold">Card Details</h2>
                <CardDetails card={selectedCard} />
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Card
                </button>
              </div>
              </div>
            )}

            {selectedCard && isEditing && (
              <div className="absolute">
                <h2 className="text-lg font-semibold">Edit Card</h2>
                <EditCardForm card={selectedCard} onEditCard={handleEditCard} />
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    </div>
    </div>s


    </div>
  );
};

export default Merge;
