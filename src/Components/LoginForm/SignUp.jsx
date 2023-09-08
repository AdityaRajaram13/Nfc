import React, { useState } from 'react';
import { registerUser } from '../../Services/userregistration';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


// ... (import statements)

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Define showConfirmPassword state

  

  const isPasswordValid = (password) => {
    const passwordRegex = /^[A-Za-z\d@$#!%^&*]+$/;
    return passwordRegex.test(password);
  };
  
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'password') {
      if (value.length < 8) {
        setError('Password must be at least 8 characters long.');
      } else {
        setError('');
      }
    }
  
    if (name === 'phone') {
      const phoneNumber = value.replace(/\D/g, ''); // Remove non-numeric characters
      setFormData({ ...formData, [name]: phoneNumber.slice(0, 10) }); // Limit to 10 digits
    } else {
      setFormData({ ...formData, [name]: value });
    }
  
    if (name === 'email') {
      if (!isEmailValid(value)) {
        setError('Please enter a valid email address.');
      } else {
        setError('');
      }
    }
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordValid(formData.password)) {
      setError('Password must contain 8-16 characters including an uppercase letter, a lowercase letter, a digit, and a special character.');
      return;
    }

    if (!isEmailValid(formData.email)) {
      setError('Please enter a valid email address, it should contain @ and . in the Email .');
      return;
    }

    try {
      setError(''); // Clear any previous error message
      const response = await registerUser(formData);

      // Handle successful registration, e.g., show success message, redirect to login page, etc.
      console.log('Registration successful:', response);
      navigate('/signin');
    } catch (error) {
      setError(error.message); // Set the error message received from the backend
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundColor: "#0D0F23" }}>
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow border border-2 border-blue-950" style={{ backgroundColor: "#111536" }}>
        <h1 className="text-3xl font-Inter text-white font-semibold text-center">Create Account</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="name" className="text-white">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="username" className="text-white">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="phone" className="text-white">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
            {/* ... (other input fields) ... */}
            <div className="w-full px-2 mb-4 relative">
          <label htmlFor="password" className="text-white font-Inter">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle input type based on state
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
          />
          <button
            type="button"
            className="absolute top-1/2 right-4"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} className="text-gray-400 hover:text-gray-600" />
            ) : (
              <AiOutlineEye size={20} className="text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
        <div className="w-full px-2 mb-4 relative">
          <label htmlFor="confirmPassword" className="text-white font-Inter">
            Confirm Password
          </label>
          <input
            type={showConfirmPassword ? 'text' : 'password'} // Toggle input type based on state
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
          />
          <button
            type="button"
            className="absolute top-1/2 right-4"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible size={20} className="text-gray-400 hover:text-gray-600" />
            ) : (
              <AiOutlineEye size={20} className="text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
          </div>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <div className=" mt-4 flex justify-center">
            <button
              type="submit"
              className="font-Inter text-blue-600 hover:bg-gradient-to-b  from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 w-40 py-2 rounded-full transition-all duration-300"
            >
              Create
            </button>
          </div>
          <hr className="my-8   border-blue-600" />
          <p className="mt-4 font-Inter text-white text-center">
            Already have an Account <Link to="/SignIn" className="text-blue-300 hover:text-blue-500">Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;