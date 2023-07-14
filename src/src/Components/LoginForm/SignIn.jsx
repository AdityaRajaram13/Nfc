import React from 'react';

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow" style={{ backgroundColor: "#111536" }}>
        <h1 className="text-3xl font-Inter text-white font-semibold text-center">Sign In</h1>
        <form className="mt-6">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full  px-2 mb-4">
              <label htmlFor="displayName" className="text-white font-Inter">Username/Email-ID</label>
              <input
                type="text"
                id="displayName"
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label htmlFor="designation" className="text-white font-Inter">Password</label>
              <input
                type="text"
                id="designation"
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
            
          </div>
          <div className=" mt-4 flex">
            <button
              type="submit"
              className="font-Inter text-blue-600 hover:bg-gradient-to-b ml-6 from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 w-40 py-2 rounded-full transition-all duration-300"
            >
              Login
            </button>
            <button
              type="button"
              className=" font-Inter text-sm text-blue-600 hover:bg-gradient-to-b ml-8 from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 py-2 rounded-full transition-all duration-300"
            >
              I Forgot My Password
            </button>
          </div>
          <hr className="my-8   border-blue-600" />
          <p className="mt-4 font-Inter text-white text-center">
            New User? <a href="/create-profile" className="text-blue-300 hover:text-blue-500">Create Profile</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
