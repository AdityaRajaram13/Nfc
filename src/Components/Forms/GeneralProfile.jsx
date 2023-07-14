// import React, { useState } from 'react';

// const GeneralProfileForm = () => {
//   const [username, setUsername] = useState('');
//   const [fullname, setFullname] = useState('');
//   const [nationality, setNationality] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform actions with the form data (e.g., submit to a server)
//     console.log('Form submitted:', {
//       username,
//       fullname,
//       nationality,
//       phoneNumber,
//       gender,
//       email,
//       address,
//     });
//   };

//   const handleCancel = () => {
//     // Clear form inputs or perform any other necessary actions
//     setUsername('');
//     setFullname('');
//     setNationality('');
//     setPhoneNumber('');
//     setGender('');
//     setEmail('');
//     setAddress('');
//   };

//   return (
//     <div className="w-800 mx-auto" style={{ backgroundColor: "#111536" }}>
//       <div className="w-full max-w-2xl mx-auto">
//         <h2 className="text-lg px-4 bg-111536 text-white text-center font-semibold">General Profile</h2>
//         <div className="w-full px-4 py-6">
//           <form onSubmit={handleSubmit}>
//           <div className="border rounded-xl border border-2 border-blue-950 p-4">
//           <h1 class="text-white text-2xl font-bold">Personal Info</h1>
//           <hr className="my-4  border-blue-600" />
//             <div className="flex flex-wrap -mx-2 mb-4">
//               <div className="w-full md:w-1/2 px-2 mb-4">
//                 <label htmlFor="username" className="text-white">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 px-2 mb-4">
//                 <label htmlFor="fullname" className="text-white">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullname"
//                   value={fullname}
//                   onChange={(e) => setFullname(e.target.value)}
//                   className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 px-2 mb-4">
//                 <label htmlFor="nationality" className="text-white">
//                   Nationality
//                 </label>
//                 <select
//                   id="nationality"
//                   value={nationality}
//                   onChange={(e) => setNationality(e.target.value)}
//                   className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//                 >
//                   <option style={{ backgroundColor: "#111536" }} value="">Select</option>
//                   <option style={{ backgroundColor: "#111536" }} value="USA">USA</option>
//                   <option style={{ backgroundColor: "#111536" }} value="UK">UK</option>
//                   <option style={{ backgroundColor: "#111536" }} value="Canada">Canada</option>
//                 </select>
//               </div>
//               <div className="w-full md:w-1/2 px-2 mb-4">
//                 <label htmlFor="phoneNumber" className="text-white">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phoneNumber"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 px-2 mb-4">
//                 <label htmlFor="gender" className="text-white">
//                   Gender
//                 </label>
//                 <select
//                   id="gender"
//                   value={gender}
//                   onChange={(e) => setGender(e.target.value)}
//                   className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//                 >
//                   <option style={{ backgroundColor: "#111536" }} value="">Select</option>
//                   <option style={{ backgroundColor: "#111536" }} value="Male">Male</option>
//                   <option style={{ backgroundColor: "#111536" }} value="Female">Female</option>
//                   <option style={{ backgroundColor: "#111536" }} value="Other">Other</option>
//                 </select>
//               </div>
//               <div className="w-full md:w-1/2 px-2 mb-4">
//                 <label htmlFor="email" className="text-white">
//                   Email ID
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//                 />
//               </div>
//               <div className="w-full px-2 mb-4">
//                 <label htmlFor="address" className="text-white">
//                   Address
//                 </label>
//                 <textarea
//                   id="address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
//                 ></textarea>
//               </div>
//             </div>
//             </div>

//             <div className="flex justify-end">
//               <button type="submit" className="bg-blue-950 text-white px-4 py-2 rounded-lg mr-2">
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GeneralProfileForm;











import React, { useState } from 'react';

const GeneralProfileForm = () => {
  const [activeTab, setActiveTab] = useState('generalProfile');
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [nationality, setNationality] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [oldpassword, setOldpassword] = useState('');
  const [enternewpassword, setEnternewpassword] = useState('');
  const [enternewpasswordagain, setEnternewpasswordagain] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data (e.g., submit to a server)
    console.log('Form submitted:', {
      username,
      fullname,
      nationality,
      phoneNumber,
      gender,
      email,
      address,
    });
  };

  const handleCancel = () => {
    // Clear form inputs or perform any other necessary actions
    setUsername('');
    setFullname('');
    setNationality('');
    setPhoneNumber('');
    setGender('');
    setEmail('');
    setAddress('');
  };

  return (
    <div className="w-800 mx-auto" style={{ backgroundColor: "#111536" }}>
      <div className="w-full max-w-2xl mx-auto">
        {/* <h2 className="text-lg px-4 bg-111536 text-white text-center font-semibold">General Profile</h2> */}
        <div className="w-full px-4 py-4">
        <div className="flex mb-4">
  <button
    className={`p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-blue-500 dark:hover:text-gray-300 ${activeTab === 'generalProfile' ? 'text-white border-white' : ''}`}
    onClick={() => handleTabChange('generalProfile')}
  >
    General Profile
  </button>
  <button
    className={`p-4 border-b-2 border-transparent rounded-t-lg text-white hover:text-white hover:border-blue-500 dark:hover:text-white ${activeTab === 'PasswordChange' ? 'text-white border-white' : ''}`}
    onClick={() => handleTabChange('PasswordChange')}
  >
    Change Password
  </button>
  {/* Add more tab buttons for additional sections */}
</div>


          <form onSubmit={handleSubmit}>
            {activeTab === 'generalProfile' && (
              <div className="border rounded-xl border border-2 border-blue-950 p-4">
                <h1 className="text-white text-2xl font-bold">Personal Info</h1>
                <hr className="my-4 border-blue-600" />
                {/* Add your personal info form elements */}
                <div className="border rounded-xl border border-2 border-blue-950 p-4">
          {/* <h1 class="text-white text-2xl font-bold">Personal Info</h1>
          <hr className="my-4  border-blue-600" /> */}
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="username" className="text-white">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="fullname" className="text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="nationality" className="text-white">
                  Nationality
                </label>
                <select
                  id="nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                >
                  <option style={{ backgroundColor: "#111536" }} value="">Select</option>
                  <option style={{ backgroundColor: "#111536" }} value="USA">USA</option>
                  <option style={{ backgroundColor: "#111536" }} value="UK">UK</option>
                  <option style={{ backgroundColor: "#111536" }} value="Canada">Canada</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="phoneNumber" className="text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="gender" className="text-white">
                  Gender
                </label>
                <select
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                >
                  <option style={{ backgroundColor: "#111536" }} value="">Select</option>
                  <option style={{ backgroundColor: "#111536" }} value="Male">Male</option>
                  <option style={{ backgroundColor: "#111536" }} value="Female">Female</option>
                  <option style={{ backgroundColor: "#111536" }} value="Other">Other</option>
                </select>
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4">
                <label htmlFor="email" className="text-white">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
              </div>
              <div className="w-full px-2 mb-4">
                <label htmlFor="address" className="text-white">
                  Address
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                ></textarea>
              </div>
            </div>
            </div>

            <div className="flex justify-center py-10">
              <button
                type="submit"
                className="text-blue-600 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="text-blue-600 hover:bg-gradient-to-b ml-8 from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 py-2 rounded-full transition-all duration-300"
              >
                Discard Changes
              </button>
            </div>

              </div>
            )}
            {activeTab === 'PasswordChange' && (
              <div className="border rounded-xl border border-2 border-blue-950 p-4">
                <h1 className="text-white text-2xl font-bold">Change Password</h1>
                <hr className="my-4 border-blue-600" />
                {/* Add your Change Password form elements */}
                <div className="flex flex-wrap -mx-2 mb-4">
                  
                  <div className="w-full  px-2 mb-4">
                    <label htmlFor="phoneNumber" className="text-white">
                     Old Password
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={oldpassword}
                      onChange={(e) => setOldpassword   (e.target.value)}
                      className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div className="w-full  px-2 mb-4">
                    <label htmlFor="phoneNumber" className="text-white">
                      Enter New Password
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={enternewpassword}
                      onChange={(e) => setEnternewpassword(e.target.value)}
                      className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  <div className="w-full  px-2 mb-4">
                    <label htmlFor="phoneNumber" className="text-white">
                    Enter New Password Again
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={enternewpasswordagain}
                      onChange={(e) => setEnternewpasswordagain(e.target.value)}
                      className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                    />
                  </div>
                  
                  {/* Add more Change Password form fields */}
                </div>
                <div className="flex justify-center py-10">
              <button
                type="submit"
                className="text-blue-600 hover:bg-gradient-to-b from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-6 py-2 rounded-full mr-2 transition-all duration-300"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="text-blue-600 hover:bg-gradient-to-b ml-8 from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 py-2 rounded-full transition-all duration-300"
              >
                Discard Changes
              </button>
            </div>
              </div>
            )}
            {/* Add more form sections based on the active tab */}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralProfileForm;
