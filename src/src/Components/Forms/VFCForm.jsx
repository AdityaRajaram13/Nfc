import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { FiPlus } from 'react-icons/fi';

const VFCForm = ({ onClose }) => {
  const [displayName, setDisplayName] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [customFields, setCustomFields] = useState([]);

  const handleAddNew = () => {
    setCustomFields([...customFields, { status: false, type: 'mobile', text: '' }]);
  };

  const handleDelete = (index) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields.splice(index, 1);
    setCustomFields(updatedCustomFields);
  };

  const handleStatusChange = (index) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index].status = !updatedCustomFields[index].status;
    setCustomFields(updatedCustomFields);
  };

  const handleTypeChange = (index, e) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index].type = e.target.value;
    setCustomFields(updatedCustomFields);
  };

  const handleTextChange = (index, e) => {
    const updatedCustomFields = [...customFields];
    updatedCustomFields[index].text = e.target.value;
    setCustomFields(updatedCustomFields);
  };

  return (
    <div className="w-800  rounded-xl p-4" style={{ backgroundColor: "#111536" }}>
      <div className="w-full max-w-2xl mx-auto">
       <div className="flex justify-between">
        <h2 className="text-lg  px-4 bg-111536 text-white text-center font-semibold" style={{ backgroundColor: "#111536" }}>Virtual Contact File (VFC) Information</h2>
        <button
            className="text-red-500 ml-6 hover:bg-red-600 hover:text-white border border-red-500 hover:border-red-600 w-6 h- rounded-full transition-all duration-300"
            onClick={onClose}
          >
           X
          </button>
          </div>
        <hr className="my-4  border-blue-600" />
        <div className="flex flex-wrap -mx-2">
          <div className="w-full  px-2 mb-4">
             <label htmlFor="displayName" className="text-white">Display Name</label>
             <input
               type="text"
               id="displayName"
               value={displayName}
               onChange={(e) => setDisplayName(e.target.value)}
               className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
             />
           </div>
           <div className="w-full md:w-1/2 px-2 mb-4">
             <label htmlFor="designation" className="text-white">Designation</label>
             <input
               type="text"               id="designation"
               value={designation}
               onChange={(e) => setDesignation(e.target.value)}
               className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
             />
           </div>
           <div className="w-full md:w-1/2 px-2 mb-4">
             <label htmlFor="email" className="text-white" >Email</label>
             <input
              type="email"
               id="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
             />
           </div>
           <div className="w-full md:w-1/2 px-2 mb-4">
             <label htmlFor="website" className="text-white">Website</label>
             <input
               type="text"
               id="website"
               value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
         
           <div className="w-full md:w-1/2 px-2 mb-4">
             <label htmlFor="phoneNumber" className="text-white">Phone Number</label>
             <input
               type="tel"
               id="phoneNumber"
               value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
         <div className="w-full  px-2 mb-4">
          <label htmlFor="companyName" className="text-white">Company Name</label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            />
          </div>
          <div className="w-full px-2 mb-4">
            <label htmlFor="address" className="text-white">Address</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
            ></textarea>
          </div>
      
        </div>
        <hr className="my-4  border-blue-600" />
        <div className="flex mt-4 justify-between mb-4">
          <h1 className="text-lg text-white font-bold">Custom Details</h1>
          <button
            className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            onClick={handleAddNew}
          >
            <FiPlus className="w-5 h-5" />
          </button>
        </div>
        <div
          className="custom-fields-container overflow-y-auto max-h-12"
          style={{ scrollbarWidth: "thin", scrollbarColor: "gray dark" }}
        >
        {customFields.map((field, index) => (
          <div key={index} className="flex items-center mb-4 ">
            {/* <style>
                {`
                  .overflow-y-auto::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style> */}
            <div className="flex items-center ">
              {/* <span className="mr-2">Status:</span> */}
              <label
                htmlFor={`toggle${index}`}
                className={`flex items-center cursor-pointer`}
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id={`toggle${index}`}
                    className="sr-only"
                    checked={field.status}
                    onChange={() => handleStatusChange(index)}
                  />
                  <div
                    className={`block w-12 h-6 rounded-full ${
                      field.status ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></div>
                  <div
                    className={`dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition ${
                      field.status ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </div>
                {/* <div className="ml-3 text-gray-700 font-medium">
                  {field.status ? 'Enabled' : 'Disabled'}
                </div> */}
              </label>
            </div>
            <div className="flex items-center">
  <span className="mx-2 text-white">Type:</span>
  <select
    className="px-4 py-2 bg-transparent border border-2 border-blue-950 rounded-lg focus:outline-none focus:border-violet-500 text-white "
    value={field.type}
    onChange={(e) => handleTypeChange(index, e)}
  >
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="mobile">Mobile Number</option>
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="email">Email</option>
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="address">Address</option>
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="website">Website</option>
    <option className="text-white" style={{ backgroundColor: "#111536" }}  value="company">Company Name</option>
  </select>
</div>

            <div className="flex items-center">
              <label htmlFor={`text${index}`} className="text-white mx-2">
                Text:
              </label>
              <input
                type="text"
                id={`text${index}`}
                className="px-4 py-2 bg-transparent border border-2 border-blue-950 rounded-lg focus:outline-none focus:border-violet-500 text-white "
                value={field.text}
                onChange={(e) => handleTextChange(index, e)}
              />
              <button
              className="px-3 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 ml-4 flex items-center"
              onClick={() => handleDelete(index)}
            >
              <FiTrash2 className="w-5 h-5" />
              
              </button>
            </div>
            
          </div>
        ))}
      </div>
      </div>
        {/* ...custom fields */}
        <div className="flex justify-center py-10">
          <button
            type="submit"
            className="text-blue-600 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
          >
            Save Changes
          </button>
          <button
            type="submit"
            className="text-blue-600 ml-6 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
          >
            Delete Profile
          </button>
          
        </div>
      </div>

  );
};

export default VFCForm;












// import React, { useState } from 'react';
// import { FiTrash2 } from 'react-icons/fi';
// import { FiPlus } from 'react-icons/fi';


// const VFCForm = () => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [customFields, setCustomFields] = useState([]);

//   const handleAddNew = () => {
//     setCustomFields([...customFields, { status: false, type: 'mobile', text: '' }]);
//   };

//   const handleDelete = (index) => {
//     const updatedCustomFields = [...customFields];
//     updatedCustomFields.splice(index, 1);
//     setCustomFields(updatedCustomFields);
//   };

//   const handleStatusChange = (index) => {
//     const updatedCustomFields = [...customFields];
//     updatedCustomFields[index].status = !updatedCustomFields[index].status;
//     setCustomFields(updatedCustomFields);
//   };

//   const handleTypeChange = (index, e) => {
//     const updatedCustomFields = [...customFields];
//     updatedCustomFields[index].type = e.target.value;
//     setCustomFields(updatedCustomFields);
//   };

//   const handleTextChange = (index, e) => {
//     const updatedCustomFields = [...customFields];
//     updatedCustomFields[index].text = e.target.value;
//     setCustomFields(updatedCustomFields);
//   };

//   return (
//     <div className="w-800" style={{ backgroundColor: "#111536" }}>
//       <div className="w-full max-w-2xl mx-auto">
//       <h2 className="text-lg px-4 bg-111536 text-white text-center font-semibold " style={{ backgroundColor: "#111536" }}  >Virtual Contact File (VFC) Information</h2>
//         <hr className="my-4  border-blue-600" />
//         <div className="flex flex-wrap -mx-2">
        
//           <div className="w-full  px-2 mb-4">
//             <label htmlFor="displayName" className="text-white">Display Name</label>
//             <input
//               type="text"
//               id="displayName"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//               className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="designation" className="text-white">Designation</label>
//             <input
//               type="text"
//               id="designation"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="email" className="text-white" >Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="website" className="text-white">Website</label>
//             <input
//               type="text"
//               id="website"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//               className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//             />
//           </div>
         
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="phoneNumber" className="text-white">Phone Number</label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//             />
//           </div>
//           <div className="w-full  px-2 mb-4">
//           <label htmlFor="companyName" className="text-white">Company Name</label>
//             <input
//               type="text"
//               id="companyName"
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//             />
//           </div>
//           <div className="w-full px-2 mb-4">
//             <label htmlFor="address" className="text-white">Address</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full px-4 py-2 text-white  bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//             ></textarea>
//           </div>
//         </div>
//         <hr className="my-4  border-blue-600" />
      
//         <div className="flex mt-4 justify-between mb-4">
//           <h1 className="text-lg text-white font-bold">Custom Details</h1>
//           <button
//   className="px-2 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
//   onClick={handleAddNew}
// >
//   <FiPlus className="w-5 h-5" />
  
// </button>
//         </div>
//         {customFields.map((field, index) => (
//           <div key={index} className="flex items-center mb-4">
//             <div className="flex items-center">
//               {/* <span className="mr-2">Status:</span> */}
//               <label
//                 htmlFor={`toggle${index}`}
//                 className={`flex items-center cursor-pointer`}
//               >
//                 <div className="relative">
//                   <input
//                     type="checkbox"
//                     id={`toggle${index}`}
//                     className="sr-only"
//                     checked={field.status}
//                     onChange={() => handleStatusChange(index)}
//                   />
//                   <div
//                     className={`block w-12 h-6 rounded-full ${
//                       field.status ? 'bg-green-500' : 'bg-red-500'
//                     }`}
//                   ></div>
//                   <div
//                     className={`dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition ${
//                       field.status ? 'translate-x-6' : 'translate-x-0'
//                     }`}
//                   ></div>
//                 </div>
//                 {/* <div className="ml-3 text-gray-700 font-medium">
//                   {field.status ? 'Enabled' : 'Disabled'}
//                 </div> */}
//               </label>
//             </div>
//             <div className="flex items-center">
//   <span className="mx-2 text-white">Type:</span>
//   <select
//     className="px-4 py-2 bg-transparent border border-2 border-blue-950 rounded-lg focus:outline-none focus:border-violet-500 text-white "
//     value={field.type}
//     onChange={(e) => handleTypeChange(index, e)}
//   >
//     <option className="text-white" style={{ backgroundColor: "#111536" }}  value="mobile">Mobile Number</option>
//     <option className="text-white" style={{ backgroundColor: "#111536" }}  value="email">Email</option>
//     <option className="text-white" style={{ backgroundColor: "#111536" }}  value="address">Address</option>
//     <option className="text-white" style={{ backgroundColor: "#111536" }}  value="website">Website</option>
//     <option className="text-white" style={{ backgroundColor: "#111536" }}  value="company">Company Name</option>
//   </select>
// </div>

//             <div className="flex items-center">
//               <label htmlFor={`text${index}`} className="text-white mx-2">
//                 Text:
//               </label>
//               <input
//                 type="text"
//                 id={`text${index}`}
//                 className="px-4 py-2 bg-transparent border border-2 border-blue-950 rounded-lg focus:outline-none focus:border-violet-500 text-white "
//                 value={field.text}
//                 onChange={(e) => handleTextChange(index, e)}
//               />
//               <button
//               className="px-3 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 ml-4 flex items-center"
//               onClick={() => handleDelete(index)}
//             >
//               <FiTrash2 className="w-5 h-5" />
              
//               </button>
//             </div>
            
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center py-10">
//       <button
//             type="submit"
//             className="text-blue-600 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
//             >
//             Save Changes
//           </button>
//           <button
//             type="submit"
//             className="text-blue-600 ml-6 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
//             >
//             Delete Profile
//           </button>
          
//           </div>
//     </div>
//   );
// };

// export default VFCForm;