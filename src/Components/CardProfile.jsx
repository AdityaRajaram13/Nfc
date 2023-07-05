// import React, { useState, useRef } from 'react';

// const FormComponent = () => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [userImage, setUserImage] = useState('');
//   const fileInputRef = useRef(null);
//   const [customFieldStatus, setCustomFieldStatus] = useState(false);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUserImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     // You can access the form values using the state variables

//     // Reset the form fields
//     setDisplayName('');
//     setDesignation('');
//     setEmail('');
//     setWebsite('');
//     setCompanyName('');
//     setPhoneNumber('');
//     setAddress('');
//   };

//     return (
//       <div>
//        <div className="flex flex-col items-center justify-center">
//       <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
//         <div
//           className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
//           onClick={handleImageClick}
//         >
//           {userImage ? (
//             <img
//               src={userImage}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <span className="text-gray-600">Select Image</span>
//           )}
//         </div>
//       </div>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         ref={fileInputRef}
//         className="hidden"
//       />
//     </div>
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
//           <div className="flex flex-wrap -mx-2">
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="displayName">Display Name</label>
//               <input
//                 type="text"
//                 id="displayName"
//                 value={displayName}
//                 onChange={(e) => setDisplayName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="designation">Designation</label>
//               <input
//                 type="text"
//                 id="designation"
//                 value={designation}
//                 onChange={(e) => setDesignation(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="website">Website</label>
//               <input
//                 type="text"
//                 id="website"
//                 value={website}
//                 onChange={(e) => setWebsite(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="companyName">Company Name</label>
//               <input
//                 type="text"
//                 id="companyName"
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full px-2 mb-4">
//               <label htmlFor="address">Address</label>
//               <textarea
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               ></textarea>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Submit
//           </button>
//         </form>


//         <div className="w-full max-w-lg mx-auto mt-8">
//         <h1>Custom fields</h1>
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             <span className="mr-2">Status:</span>
//             <label
//               htmlFor="toggle"
//               className={`flex items-center cursor-pointer ${
//                 customFieldStatus ? 'justify-end' : 'justify-start'
//               }`}
//             >
//               <div className="relative">
//                 <input
//                   type="checkbox"
//                   id="toggle"
//                   className="sr-only"
//                   checked={customFieldStatus}
//                   onChange={() =>
//                     setCustomFieldStatus(!customFieldStatus)
//                   }
//                 />

//                  <div
//                   className={`block w-12 h-6 rounded-full ${
//                     customFieldStatus ? 'bg-green-500' : 'bg-red-500'
//                   }`}> 
//                 </div>

//                 <div
//                   className={`dot absolute left-0.5 top-0.5 bg-white w-5   h-5 rounded-full transition ${
//                     customFieldStatus ? 'translate-x-6' : 'translate-x-0'
//                   }`}
//                 >  
//                 </div>

//               </div>
//               <div className="ml-3 text-gray-700 font-medium">
//                 {customFieldStatus ? 'Enabled' : 'Disabled'}
//               </div>
//             </label>
//           </div>
//           <div className="flex items-center">
//             <span className="mr-2">Type:</span>
//             <select
//               className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             >
//               <option value="mobile">Mobile Number</option>
//               <option value="email">Email</option>
//               <option value="address">Address</option>
//               <option value="website">Website</option>
//               <option value="company">Company Name</option>
//             </select>
//           </div>
//         </div>
//         <div className="flex items-center mb-4">
//           <label htmlFor="text" className="mr-2">
//             Text:
//           </label>
//           <input
//             type="text"
//             id="text"
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           />
//           <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4">
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;






























// import React, { useState, useRef } from 'react';

// const FormComponent = ({ onSubmit }) => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [userImage, setUserImage] = useState('');
//   const fileInputRef = useRef(null);
//   const [customFields, setCustomFields] = useState([]);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUserImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       displayName,
//       designation,
//       email,
//       website,
//       companyName,
//       phoneNumber,
//       address,
//       customFields,
//       userImage, // Pass the userImage to the formData
//     };

//     onSubmit(formData);

//     // Reset the form fields
//     setDisplayName('');
//     setDesignation('');
//     setEmail('');
//     setWebsite('');
//     setCompanyName('');
//     setPhoneNumber('');
//     setAddress('');
//     setUserImage('');
//   };

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
//     <div>
//       <div className="flex flex-col items-center justify-center">
//         <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
//           <div
//             className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
//             onClick={handleImageClick}
//           >
//             {userImage ? (
//               <img
//                 src={userImage}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <span className="text-gray-600">Select Image</span>
//             )}
//           </div>
//         </div>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           ref={fileInputRef}
//           className="hidden"
//         />
//       </div>
//       <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
//         <div className="flex flex-wrap -mx-2">
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="displayName">Display Name</label>
//             <input
//               type="text"
//               id="displayName"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="designation">Designation</label>
//             <input
//               type="text"
//               id="designation"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="website">Website</label>
//             <input
//               type="text"
//               id="website"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="companyName">Company Name</label>
//             <input
//               type="text"
//               id="companyName"
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full px-2 mb-4">
//             <label htmlFor="address">Address</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             ></textarea>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       <div className="w-full max-w-2xl mx-auto mt-8">
//         <div className="flex justify-between mb-4">
//           <h1 className="text-lg font-bold">Custom Details</h1>
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
//             onClick={handleAddNew}
//           >
//             Add New
//           </button>
//         </div>
//         {customFields.map((field, index) => (
//           <div key={index} className="flex mb-4">
//             <div className="w-1/4">
//               <select
//                 value={field.type}
//                 onChange={(e) => handleTypeChange(index, e)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               >
//                 <option value="mobile">Mobile</option>
//                 <option value="email">Email</option>
//                 <option value="social">Social</option>
//               </select>
//             </div>
//             <div className="w-1/4">
//               <input
//                 type="text"
//                 value={field.text}
//                 onChange={(e) => handleTextChange(index, e)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-1/4">
//               <input
//                 type="checkbox"
//                 checked={field.status}
//                 onChange={() => handleStatusChange(index)}
//                 className="mr-2 leading-tight"
//               />
//               <span className="text-sm">Active</span>
//             </div>
//             <div className="w-1/4">
//               <button
//                 className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FormComponent;






















// import React, { useState, useRef } from 'react';

// const FormComponent = () => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [userImage, setUserImage] = useState('');
//   const fileInputRef = useRef(null);
//   const [customFields, setCustomFields] = useState([]);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUserImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     // You can access the form values using the state variables

//     // Reset the form fields
//     setDisplayName('');
//     setDesignation('');
//     setEmail('');
//     setWebsite('');
//     setCompanyName('');
//     setPhoneNumber('');
//     setAddress('');
//   };

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
//     <div>
// <div className="w-full max-w-2xl mx-auto mt-8">

//   <div className="flex justify-between mb-4">
//     <h1 className="text-lg font-bold">Custom Details</h1>
//     <button
//       className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       onClick={handleAddNew}
//     >
//       Add New
//     </button>
//   </div>
//   {customFields.map((field, index) => (
//     <div key={index} className="flex items-center mb-4">
//       <div className="flex items-center">
//         <span className="mr-2">Status:</span>
//         <label
//           htmlFor={`toggle${index}`}
//           className={`flex items-center cursor-pointer`}
//         >
//           <div className="relative">
//             <input
//               type="checkbox"
//               id={`toggle${index}`}
//               className="sr-only"
//               checked={field.status}
//               onChange={() => handleStatusChange(index)}
//             />

//             <div
//               className={`block w-12 h-6 rounded-full ${
//                 field.status ? 'bg-green-500' : 'bg-red-500'
//               }`}
//             ></div>

//             <div
//               className={`dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition ${
//                 field.status ? 'translate-x-6' : 'translate-x-0'
//               }`}
//             ></div>
//           </div>
//           <div className="ml-3 text-gray-700 font-medium">
//             {field.status ? 'Enabled' : 'Disabled'}
//           </div>
//         </label>
//       </div>
//       <div className="flex items-center">
//         <span className="mr-2">Type:</span>
//         <select
//           className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           value={field.type}
//           onChange={(e) => handleTypeChange(index, e)}
//         >
//           <option value="mobile">Mobile Number</option>
//           <option value="email">Email</option>
//           <option value="address">Address</option>
//           <option value="website">Website</option>
//           <option value="company">Company Name</option>
//         </select>
//       </div>
//       <div className="flex items-center">
//         <label htmlFor={`text${index}`} className="mr-2">
//           Text:
//         </label>
//         <input
//           type="text"
//           id={`text${index}`}
//           className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//           value={field.text}
//           onChange={(e) => handleTextChange(index, e)}
//         />
//         <button
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
//           onClick={() => handleDelete(index)}
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//         ))}


//       </div>
//     </div>
//   );
// };

// export default FormComponent;
















// import React, { useState, useRef } from 'react';

// const FormComponent = () => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [userImage, setUserImage] = useState('');
//   const fileInputRef = useRef(null);
//   const [customFields, setCustomFields] = useState([]);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUserImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     // You can access the form values using the state variables

//     // Reset the form fields
//     setDisplayName('');
//     setDesignation('');
//     setEmail('');
//     setWebsite('');
//     setCompanyName('');
//     setPhoneNumber('');
//     setAddress('');
//   };

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


//     return (
//       <div>
//        <div className="flex flex-col items-center justify-center">
//       <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
//         <div
//           className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
//           onClick={handleImageClick}
//         >
//           {userImage ? (
//             <img
//               src={userImage}
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           ) : (
//             <span className="text-gray-600">Select Image</span>
//           )}
//         </div>
//       </div>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageChange}
//         ref={fileInputRef}
//         className="hidden"
//       />
//     </div>
//         <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
//           <div className="flex flex-wrap -mx-2">
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="displayName">Display Name</label>
//               <input
//                 type="text"
//                 id="displayName"
//                 value={displayName}
//                 onChange={(e) => setDisplayName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="designation">Designation</label>
//               <input
//                 type="text"
//                 id="designation"
//                 value={designation}
//                 onChange={(e) => setDesignation(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="website">Website</label>
//               <input
//                 type="text"
//                 id="website"
//                 value={website}
//                 onChange={(e) => setWebsite(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="companyName">Company Name</label>
//               <input
//                 type="text"
//                 id="companyName"
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-2 mb-4">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <input
//                 type="tel"
//                 id="phoneNumber"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="w-full px-2 mb-4">
//               <label htmlFor="address">Address</label>
//               <textarea
//                 id="address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               ></textarea>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Submit
//           </button>
//         </form>


//         <div className="w-full max-w-2xl mx-auto mt-8">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-lg font-bold">Custom Details</h1>
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={handleAddNew}
//           >
//             Add New
//           </button>
//         </div>
//         {customFields.map((field, index) => (
//           <div key={index} className="flex items-center mb-4">
//             <div className="flex items-center">
//               <span className="mr-2">Status:</span>
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
//                 <div className="ml-3 text-gray-700 font-medium">
//                   {field.status ? 'Enabled' : 'Disabled'}
//                 </div>
//               </label>
//             </div>
//             <div className="flex items-center">
//               <span className="mr-2">Type:</span>
//               <select
//                 className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={field.type}
//                 onChange={(e) => handleTypeChange(index, e)}
//               >
//                 <option value="mobile">Mobile Number</option>
//                 <option value="email">Email</option>
//                 <option value="address">Address</option>
//                 <option value="website">Website</option>
//                 <option value="company">Company Name</option>
//               </select>
//             </div>
//             <div className="flex items-center">
//               <label htmlFor={`text${index}`} className="mr-2">
//                 Text:
//               </label>
//               <input
//                 type="text"
//                 id={`text${index}`}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={field.text}
//                 onChange={(e) => handleTextChange(index, e)}
//               />
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}


//       </div>
//     </div>
//   );
// };

// export default FormComponent;
























// import React, { useState, useRef } from 'react';

// const FormComponent = ({ onSubmit }) => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [userImage, setUserImage] = useState('');
//   const fileInputRef = useRef(null);
//   const [customFields, setCustomFields] = useState([]);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUserImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Extract the type and text data from the customFields array
//     const customFieldData = customFields.map(({ type, text }) => ({ type, text }));

//     const formData = {
//       displayName,
//       designation,
//       email,
//       website,
//       companyName,
//       phoneNumber,
//       address,
//       customFields: customFieldData,
//       userImage,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/api/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Data submitted successfully');
//         // Reset the form fields
//         setDisplayName('');
//         setDesignation('');
//         setEmail('');
//         setWebsite('');
//         setCompanyName('');
//         setPhoneNumber('');
//         setAddress('');
//         setUserImage('');
//       } else {
//         console.error('Error submitting data');
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

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
//     <div>
//       <div className="flex flex-col items-center justify-center">
//         <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
//           <div
//             className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
//             onClick={handleImageClick}
//           >
//             {userImage ? (
//               <img
//                 src={userImage}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <span className="text-gray-600">Select Image</span>
//             )}
//           </div>
//         </div>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           ref={fileInputRef}
//           className="hidden"
//         />
//       </div>
//       <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
//         <div className="flex flex-wrap -mx-2">
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="displayName">Name</label>
//             <input
//               type="text"
//               id="displayName"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="designation">Designation</label>
//             <input
//               type="text"
//               id="designation"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="website">Website</label>
//             <input
//               type="text"
//               id="website"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="companyName">Company Name</label>
//             <input
//               type="text"
//               id="companyName"
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full px-2 mb-4">
//             <label htmlFor="address">Address</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             ></textarea>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       <div className="w-full max-w-2xl mx-auto mt-8">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-lg font-bold">Custom Details</h1>
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={handleAddNew}
//           >
//             Add New
//           </button>
//         </div>
//         {customFields.map((field, index) => (
//           <div key={index} className="flex items-center mb-4">
//             <div className="flex items-center">
//               <span className="mr-2">Status:</span>
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
//                 <div className="ml-3 text-gray-700 font-medium">
//                   {field.status ? 'Enabled' : 'Disabled'}
//                 </div>
//               </label>
//             </div>
//             <div className="flex items-center">
//               <span className="mr-2">Type:</span>
//               <select
//                 className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={field.type}
//                 onChange={(e) => handleTypeChange(index, e)}
//               >
//                 <option value="mobile">Mobile Number</option>
//                 <option value="email">Email</option>
//                 <option value="address">Address</option>
//                 <option value="website">Website</option>
//                 <option value="company">Company Name</option>
//               </select>
//             </div>
//             <div className="flex items-center">
//               <label htmlFor={`text${index}`} className="mr-2">
//                 Text:
//               </label>
//               <input
//                 type="text"
//                 id={`text${index}`}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={field.text}
//                 onChange={(e) => handleTextChange(index, e)}
//               />
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}


//       </div>
//     </div>
//   );
// };

// export default FormComponent;




















// import React, { useState, useRef } from 'react';

// const FormComponent = ({ onSubmit }) => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [userImage, setUserImage] = useState('');
//   const fileInputRef = useRef(null);
//   const [customFields, setCustomFields] = useState([]);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUserImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       displayName,
//       designation,
//       email,
//       website,
//       companyName,
//       phoneNumber,
//       address,
//       customFields,
//       userImage, // Pass the userImage to the formData
//     };

//     try {
//       const response = await fetch('http://localhost:3000/api/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Data submitted successfully');
//         // Reset the form fields
//         setDisplayName('');
//         setDesignation('');
//         setEmail('');
//         setWebsite('');
//         setCompanyName('');
//         setPhoneNumber('');
//         setAddress('');
//         setUserImage('');
//       } else {
//         console.error('Error submitting data');
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }

//   };

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
//     <div>
//       <div className="flex flex-col items-center justify-center">
//         <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
//           <div
//             className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
//             onClick={handleImageClick}
//           >
//             {userImage ? (
//               <img
//                 src={userImage}
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             ) : (
//               <span className="text-gray-600">Select Image</span>
//             )}
//           </div>
//         </div>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           ref={fileInputRef}
//           className="hidden"
//         />
//       </div>
//       <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
//         <div className="flex flex-wrap -mx-2">
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="displayName">Display Name</label>
//             <input
//               type="text"
//               id="displayName"
//               value={displayName}
//               onChange={(e) => setDisplayName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="designation">Designation</label>
//             <input
//               type="text"
//               id="designation"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="website">Website</label>
//             <input
//               type="text"
//               id="website"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="companyName">Company Name</label>
//             <input
//               type="text"
//               id="companyName"
//               value={companyName}
//               onChange={(e) => setCompanyName(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full md:w-1/2 px-2 mb-4">
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <input
//               type="tel"
//               id="phoneNumber"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           <div className="w-full px-2 mb-4">
//             <label htmlFor="address">Address</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//             ></textarea>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       <div className="w-full max-w-2xl mx-auto mt-8">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-lg font-bold">Custom Details</h1>
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={handleAddNew}
//           >
//             Add New
//           </button>
//         </div>
//         {customFields.map((field, index) => (
//           <div key={index} className="flex items-center mb-4">
//             <div className="flex items-center">
//               <span className="mr-2">Status:</span>
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
//                 <div className="ml-3 text-gray-700 font-medium">
//                   {field.status ? 'Enabled' : 'Disabled'}
//                 </div>
//               </label>
//             </div>
//             <div className="flex items-center">
//               <span className="mr-2">Type:</span>
//               <select
//                 className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={field.type}
//                 onChange={(e) => handleTypeChange(index, e)}
//               >
//                 <option value="mobile">Mobile Number</option>
//                 <option value="email">Email</option>
//                 <option value="address">Address</option>
//                 <option value="website">Website</option>
//                 <option value="company">Company Name</option>
//               </select>
//             </div>
//             <div className="flex items-center">
//               <label htmlFor={`text${index}`} className="mr-2">
//                 Text:
//               </label>
//               <input
//                 type="text"
//                 id={`text${index}`}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={field.text}
//                 onChange={(e) => handleTextChange(index, e)}
//               />
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}


//       </div>
//     </div>
//   );
// };

// export default FormComponent;


































// import React, { useState, useRef } from 'react';

// const FormComponent = ({ onSubmit }) => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [userImage, setUserImage] = useState('');
//   const fileInputRef = useRef(null);
//   const [customFields, setCustomFields] = useState([]);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUserImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Extract the type and text data from the customFields array
//     const customFieldData = customFields.map(({ type, text }) => ({ type, text }));

//     const formData = {
//       displayName,
//       designation,
//       email,
//       website,
//       companyName,
//       phoneNumber,
//       address,
//       customFields: customFieldData,
//       userImage,
//     };

//     try {
//       const response = await fetch('http://localhost:3000/api/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('Data submitted successfully');
//         // Reset the form fields
//         setDisplayName('');
//         setDesignation('');
//         setEmail('');
//         setWebsite('');
//         setCompanyName('');
//         setPhoneNumber('');
//         setAddress('');
//         setUserImage('');
//       } else {
//         console.error('Error submitting data');
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

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


//     <div className="">


//       <div className="flex flex-col items-center justify-center">
//       <div className="flex rounded-2xl h-56 w-56 items-center border border-gray-100 justify-center"
//      style={{
//        perspective: '800px',
//        transformStyle: 'preserve-3d',
//        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//        transform: 'rotateX(10deg) rotateY(5deg)'
//      }}>
//   <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
//     <div
//       className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
//       onClick={handleImageClick}
//     >
//       {userImage ? (
//         <img
//           src={userImage}
//           alt="Profile"
//           className="w-full h-full object-cover"
//         />
//       ) : (
//         <span className=" text-5xl text-gray-600">+</span>
//       )}
//     </div>
//   </div>

//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           ref={fileInputRef}
//           className="hidden"
//         />
//       </div>

//       <div>
//      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
//   <div className="flex flex-wrap -mx-2">
//     <div className="w-full md:w-1/2 px-2 mb-4">
//       <div className="relative h-11 w-full min-w-[200px]">
//         <input
//           type="text"
//           id="displayName"
//           value={displayName}
//           onChange={(e) => setDisplayName(e.target.value)}
//           className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//           placeholder=" "
//         />
//         <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//           Name
//         </label>
//       </div>
//     </div>
//     <div className="w-full md:w-1/2 px-2 mb-4">
//       <div className="relative h-11 w-full min-w-[200px]">
//         <input
//           type="text"
//           id="designation"
//           value={designation}
//           onChange={(e) => setDesignation(e.target.value)}
//           className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//           placeholder=" "
//         />
//         <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//           Designation
//         </label>
//       </div>
//     </div>
//     <div className="w-full md:w-1/2 px-2 mb-4">
//       <div className="relative h-11 w-full min-w-[200px]">
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//           placeholder=" "
//         />
//         <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//           Email
//         </label>
//       </div>
//     </div>
//     <div className="w-full md:w-1/2 px-2 mb-4">
//       <div className="relative h-11 w-full min-w-[200px]">
//         <input
//           type="text"
//           id="website"
//           value={website}
//           onChange={(e) => setWebsite(e.target.value)}
//           className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//           placeholder=" "
//         />
//         <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//           Website
//         </label>
//       </div>
//     </div>
//     <div className="w-full md:w-1/2 px-2 mb-4">
//       <div className="relative h-11 w-full min-w-[200px]">
//         <input
//           type="text"
//           id="companyName"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//           className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//           placeholder=" "
//         />
//         <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//           Company Name
//         </label>
//       </div>
//     </div>
//     <div className="w-full md:w-1/2 px-2 mb-4">
//       <div className="relative h-11 w-full min-w-[200px]">
//         <input
//           type="tel"
//           id="phoneNumber"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//           placeholder=" "
//         />
//         <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//           Phone Number
//         </label>
//       </div>
//     </div>
//     <div className="w-full px-2 mb-4">
//       <div className="relative h-11 w-full min-w-[200px]">
//         <textarea
//           id="address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//           placeholder=" "
//         ></textarea>
//         <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//           Address
//         </label>
//       </div>
//     </div>
//   </div>
//   <div className="flex justify-end mt-6">
//     <button
//       type="submit"
//       className="px-6 py-2 text-sm font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
//     >
//       Submit
//     </button>
//   </div>
// </form>
// </div>
// </div>

//       <div className="w-full max-w-2xl mx-auto mt-8">

//         <div className="flex justify-between mb-4">
//           <h1 className="text-lg font-bold">Custom Details</h1>
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={handleAddNew}
//           >
//             Add New
//           </button>
//         </div>
//         {customFields.map((field, index) => (
//           <div key={index} className="flex items-center mb-4">
//             <div className="flex items-center">
//               <span className="mr-2">Status:</span>
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
//                 <div className="ml-3 text-gray-700 font-medium">
//                   {field.status ? 'Enabled' : 'Disabled'}
//                 </div>
//               </label>
//             </div>
//             <div className="flex items-center">
//               <span className="mr-2">Type:</span>
//               <select
//                 className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={field.type}
//                 onChange={(e) => handleTypeChange(index, e)}
//               >
//                 <option value="mobile">Mobile Number</option>
//                 <option value="email">Email</option>
//                 <option value="address">Address</option>
//                 <option value="website">Website</option>
//                 <option value="company">Company Name</option>
//               </select>
//             </div>
//             <div className="flex items-center">
//               <label htmlFor={`text${index}`} className="mr-2">
//                 Text:
//               </label>
//               <input
//                 type="text"
//                 id={`text${index}`}
//                 className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                 value={field.text}
//                 onChange={(e) => handleTextChange(index, e)}
//               />
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
//                 onClick={() => handleDelete(index)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}


//       </div>
//     </div>
//   );
// };

// export default FormComponent;

































// import React, { useState, useRef } from 'react';
// import Defaultuserimage from '../assets/Images/Userdefault.png'
// import TemplateComponent from './TemplateComponent';

// const FormComponent = ({ }) => {
//   const [displayName, setDisplayName] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [email, setEmail] = useState('');
//   const [website, setWebsite] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [address, setAddress] = useState('');
//   const [userImage, setUserImage] = useState('');
//   const fileInputRef = useRef(null);
//   const [customFields, setCustomFields] = useState([]);
//   const [showTemplate, setShowTemplate] = useState(false);

//   const handleImageClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setUserImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Extract the type and text data from the customFields array
//     const customFieldData = customFields.map(({ type, text }) => ({ type, text }));

//     const formData = {
//       displayName,
//       designation,
//       email,
//       website,
//       companyName,
//       phoneNumber,
//       address,
//       customFields: customFieldData,
//       userImage,
//     };


//     try {
//       const response = await fetch('http://localhost:3000/api/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),

//       });

//       if (response.ok) {
//         console.log('Data submitted successfully');
//         // Reset the form fields
//         setDisplayName('');
//         setDesignation('');
//         setEmail('');
//         setWebsite('');
//         setCompanyName('');
//         setPhoneNumber('');
//         setAddress('');
//         setUserImage('');
//       } else {
//         console.error('Error submitting data');
//       }
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

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

//     <div className="">



//       <div className="flex  flex-col items-end justify-end   " >


//         <div className="flex flex-col mt-10 mr-4 items-center justify-center">
//           <div className="flex  backdrop-blur-md bg-opacity-20  rounded-full h-40 w-40 items-center justify-center"
//             style={{
//               perspective: '800px',
//               transformStyle: 'preserve-3d',
//               boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//               transform: 'rotateX(10deg) rotateY(5deg)'
//             }}>
//             <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
//               <div
//                 className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
//                 onClick={handleImageClick}
//               >
//                 {userImage ? (
//                   <img
//                     src={userImage}
//                     alt="Profile"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <img
//                     src={Defaultuserimage}
//                     alt="Default Background"
//                     className="w-full h-full object-cover"
//                   />
//                 )}
//               </div>
//             </div>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               ref={fileInputRef}
//               className="hidden"
//             />
//           </div>

//           <div className="rounded-md mt-4 bg-white backdrop-blur-md bg-opacity-20  p-4 shadow-md " >
//             <form onSubmit={handleSubmit} className="mt-6 w-full max-w-2xl mx-auto">
//               <div className="flex flex-wrap -mx-2">
//                 <div className="w-full md:w-1/2 px-2 mb-4">
//                   <div className="relative h-11 w-full min-w-[200px]">
//                     <input
//                       type="text"
//                       id="displayName"
//                       value={displayName}
//                       onChange={(e) => setDisplayName(e.target.value)}
//                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                       placeholder=" "
//                     />
//                     <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                       Name
//                     </label>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 px-2 mb-4">
//                   <div className="relative h-11 w-full min-w-[200px]">
//                     <input
//                       type="text"
//                       id="designation"
//                       value={designation}
//                       onChange={(e) => setDesignation(e.target.value)}
//                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                       placeholder=" "
//                     />
//                     <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                       Designation
//                     </label>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 px-2 mb-4">
//                   <div className="relative h-11 w-full min-w-[200px]">
//                     <input
//                       type="email"
//                       id="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                       placeholder=" "
//                     />
//                     <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                       Email
//                     </label>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 px-2 mb-4">
//                   <div className="relative h-11 w-full min-w-[200px]">
//                     <input
//                       type="text"
//                       id="website"
//                       value={website}
//                       onChange={(e) => setWebsite(e.target.value)}
//                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                       placeholder=" "
//                     />
//                     <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                       Website
//                     </label>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 px-2 mb-4">
//                   <div className="relative h-11 w-full min-w-[200px]">
//                     <input
//                       type="text"
//                       id="companyName"
//                       value={companyName}
//                       onChange={(e) => setCompanyName(e.target.value)}
//                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                       placeholder=" "
//                     />
//                     <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                       Company Name
//                     </label>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 px-2 mb-4">
//                   <div className="relative h-11 w-full min-w-[200px]">
//                     <input
//                       type="tel"
//                       id="phoneNumber"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                       placeholder=" "
//                     />
//                     <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                       Phone Number
//                     </label>
//                   </div>
//                 </div>
//                 <div className="w-full px-2 mb-4">
//                   <div className="relative h-11 w-full min-w-[200px]">
//                     <textarea
//                       id="address"
//                       value={address}
//                       onChange={(e) => setAddress(e.target.value)}
//                       className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
//                       placeholder=" "
//                     ></textarea>
//                     <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
//                       Address
//                     </label>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end mt-6">
//                 <button
//                   type="submit"
//                   className="px-6 py-2 text-sm font-medium text-white bg-pink-500 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>



//         <div className="w-full mx-auto mr-4 mb-6 mt-6" style={{ maxWidth: '702px' }}>
//           <div className="rounded-md bg-white p-4 shadow-md backdrop-blur-md bg-opacity-20 overflow-y-auto h-[calc(100vh-620px)]" >
//             <style>
//               {`
//             .overflow-y-auto::-webkit-scrollbar {
//               display: none;
//             }
//             `}
//             </style>
//             <div className="flex justify-between mb-4">
//               <h1 className="text-lg font-bold">Custom Details</h1>
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                 onClick={handleAddNew}
//               >
//                 Add New
//               </button>
//             </div>
//             {customFields.map((field, index) => (
//               <div key={index} className="flex items-center mb-4">
//                 <div className="flex items-center">
//                   <span className="mr-2">Status:</span>
//                   <label
//                     htmlFor={`toggle${index}`}
//                     className={`flex items-center cursor-pointer`}
//                   >
//                     <div className="relative">
//                       <input
//                         type="checkbox"
//                         id={`toggle${index}`}
//                         className="sr-only"
//                         checked={field.status}
//                         onChange={() => handleStatusChange(index)}
//                       />

//                       <div
//                         className={`block w-12 h-6 rounded-full ${field.status ? 'bg-green-500' : 'bg-red-500'
//                           }`}
//                       ></div>

//                       <div
//                         className={`dot absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition ${field.status ? 'translate-x-6' : 'translate-x-0'
//                           }`}
//                       ></div>
//                     </div>
//                     <div className="ml-3 text-gray-700 font-medium">
//                       {field.status ? 'Enabled' : 'Disabled'}
//                     </div>
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="mr-2">Type:</span>
//                   <select
//                     className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                     value={field.type}
//                     onChange={(e) => handleTypeChange(index, e)}
//                   >
//                     <option value="mobile">Mobile Number</option>
//                     <option value="email">Email</option>
//                     <option value="address">Address</option>
//                     <option value="website">Website</option>
//                     <option value="company">Company Name</option>
//                   </select>
//                 </div>
//                 <div className="flex items-center">
//                   <label htmlFor={`text${index}`} className="mr-2">
//                     Text:
//                   </label>
//                   <input
//                     type="text"
//                     id={`text${index}`}
//                     className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//                     value={field.text}
//                     onChange={(e) => handleTextChange(index, e)}
//                   />
//                   <button
//                     className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 ml-4"
//                     onClick={() => handleDelete(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;




















import React, { useState, useRef } from 'react';
import Defaultuserimage from '../assets/Images/Userdefault.png'
import TemplateComponent from './TemplateComponent';

const FormComponent = () => {
  const [formState, setFormState] = useState({
    displayName: '',
    designation: '',
    email: '',
    website: '',
    companyName: '',
    phoneNumber: '',
    address: '',
    userImage: '',
    customFields: []
  });

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setFormState(prevState => ({
        ...prevState,
        userImage: reader.result
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract the type and text data from the customFields array
    const customFieldData = formState.customFields.map(({ type, text }) => ({ type, text }));

    const formData = {
      ...formState,
      customFields: customFieldData
    };

    try {
      const response = await fetch('http://localhost:3000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        // Reset the form fields
        setFormState({
          displayName: '',
          designation: '',
          email: '',
          website: '',
          companyName: '',
          phoneNumber: '',
          address: '',
          userImage: '',
          customFields: []
        });
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleAddNew = () => {
    setFormState(prevState => ({
      ...prevState,
      customFields: [...prevState.customFields, { status: false, type: 'mobile', text: '' }]
    }));
  };

  const handleDelete = (index) => {
    setFormState(prevState => {
      const updatedCustomFields = [...prevState.customFields];
      updatedCustomFields.splice(index, 1);
      return {
        ...prevState,
        customFields: updatedCustomFields
      };
    });
  };

  const handleStatusChange = (index) => {
    setFormState(prevState => {
      const updatedCustomFields = [...prevState.customFields];
      updatedCustomFields[index].status = !updatedCustomFields[index].status;
      return {
        ...prevState,
        customFields: updatedCustomFields
      };
    });
  };

  const handleTypeChange = (index, e) => {
    setFormState(prevState => {
      const updatedCustomFields = [...prevState.customFields];
      updatedCustomFields[index].type = e.target.value;
      return {
        ...prevState,
        customFields: updatedCustomFields
      };
    });
  };

  const handleTextChange = (index, e) => {
    setFormState(prevState => {
      const updatedCustomFields = [...prevState.customFields];
      updatedCustomFields[index].text = e.target.value;
      return {
        ...prevState,
        customFields: updatedCustomFields
      };
    });
  };

  return (
    <div className="">
      <div className="flex flex-col mt-10 mr-4 items-center justify-center">
        <div className="mb-6">
          <h2 className="text-2xl text-center font-semibold">Create your Card</h2>
        </div>

        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <label htmlFor="userImage" className="cursor-pointer">
              <img
                src={formState.userImage || Defaultuserimage}
                alt="User"
                className="w-32 h-32 rounded-full object-cover"
                onClick={handleImageClick}
              />
              <input
                type="file"
                id="userImage"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="mt-6">
            <label htmlFor="displayName" className="block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={formState.displayName}
              onChange={(e) => setFormState({ ...formState, displayName: e.target.value })}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="designation" className="block font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={formState.designation}
              onChange={(e) => setFormState({ ...formState, designation: e.target.value })}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="website" className="block font-medium text-gray-700">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={formState.website}
              onChange={(e) => setFormState({ ...formState, website: e.target.value })}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="companyName" className="block font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={formState.companyName}
              onChange={(e) => setFormState({ ...formState, companyName: e.target.value })}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="phoneNumber" className="block font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={formState.phoneNumber}
              onChange={(e) => setFormState({ ...formState, phoneNumber: e.target.value })}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="address" className="block font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              value={formState.address}
              onChange={(e) => setFormState({ ...formState, address: e.target.value })}
            ></textarea>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Custom Fields</h3>
            {formState.customFields.map((customField, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={customField.status}
                  onChange={() => handleStatusChange(index)}
                />
                <select
                  className="mr-2"
                  value={customField.type}
                  onChange={(e) => handleTypeChange(index, e)}
                >
                  <option value="mobile">Mobile</option>
                  <option value="email">Email</option>
                  <option value="website">Website</option>
                  <option value="address">Address</option>
                </select>
                <input
                  type="text"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={customField.text}
                  onChange={(e) => handleTextChange(index, e)}
                />
                <button
                  type="button"
                  className="ml-2 text-red-500"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              type="button"
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
              onClick={handleAddNew}
            >
              Add New Field
            </button>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>

        <TemplateComponent formData={formState} />
      </div>
    </div>
  );
};

export default FormComponent;
