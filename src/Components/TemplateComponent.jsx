// import React from 'react';

// const TemplateComponent = ({ formData }) => {
//   const {
//     displayName,
//     designation,
//     email,
//     website,
//     companyName,
//     phoneNumber,
//     address,
//     customFields,
//      userImage, // Receive the userImage from the formData
//   } = formData;

//   return (
//     <div>
      
//       <p>Display Name: {displayName}</p>
//       <p>Designation: {designation}</p>
//       <p>Email: {email}</p>
//       <p>Website: {website}</p>
//       <p>Company Name: {companyName}</p>
//       <p>Phone Number: {phoneNumber}</p>
//       <p>Address: {address}</p>

//       <h2>Custom Details</h2>
//       {customFields.map((field, index) => (
//         <div key={index}>
//           <p>Status: {field.status ? 'Enabled' : 'Disabled'}</p>
//           <p>Type: {field.type}</p>
//           <p>Text: {field.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TemplateComponent;
















import React from 'react';

const TemplateComponent = ({ formData }) => {
  const {
    displayName,
    designation,
    email,
    website,
    companyName,
    phoneNumber,
    address,
    customFields,
    userImage, // Receive the userImage from the formData
  } = formData;

  return (
    <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
      <div className="relative z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))' }}>
        {userImage && (
          <img
            src={userImage}
            alt="Profile image"
            className="w-full"
          />
        )}
        <div className="text-center absolute w-full" style={{ bottom: '4rem' }}>
          <p className="text-white tracking-wide uppercase text-lg font-bold">{displayName}</p>
        </div>
      </div>
      <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
        
        <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
      </div>

      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
     

        <p className="mb-2">
          <span className="font-bold">Name:</span> {displayName}
        </p>
        <p className="mb-2">
          <span className="font-bold">Designation:</span> {designation}
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> {email}
        </p>
        <p className="mb-2">
          <span className="font-bold">Website:</span> {website}
        </p>
        <p className="mb-2">
          <span className="font-bold">Company Name:</span> {companyName}
        </p>
        <p className="mb-2">
          <span className="font-bold">Phone Number:</span> {phoneNumber}
        </p>
        <p className="mb-4">
          <span className="font-bold">Address:</span> {address}
        </p>

        {customFields.map((field, index) => (
          <div key={index} className="mb-4">
            <p>
              <span className="font-bold">Status:</span>{' '}
              {field.status ? 'Enabled' : 'Disabled'}
            </p>
            <p>
              <span className="font-bold">Type:</span> {field.type}
            </p>
            <p>
              <span className="font-bold">Text:</span> {field.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateComponent;
