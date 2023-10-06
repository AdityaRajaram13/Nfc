
import React, { useContext, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import GeneralProfileForm from '../Components/Forms/GeneralProfile';
import AddNewCardForm from '../Components/Forms/AddNewCardForm';
import SignIn from '../Components/LoginForm/SignIn';
import SignUp from '../Components/LoginForm/SignUp';
import { AuthContext } from '../utils/authContext';
import Template from '../Pages/Template';
import TemplateProfile from '../Pages/TemplateProfile';
import Navbar from '../Components/Navbar';
import ProductPage from '../Pages/Products';

const Routing = () => {
  const { userLoggedIn, userType } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(false);
  }, [userLoggedIn]);

  if (loading) {
    return null;
  }
  console.log('UserRoutinng User Type:', userType);
  return (
    <Routes>
      <Route path="/:userID" element={<TemplateProfile />} />
      <Route path="/products" element={<><Navbar/><ProductPage /></>} />
      <Route element={<Layout />}>
        {/* Unauthenticated routes */}
        <Route path="/" element={<Home />} />

        {/* Redirect authenticated users from /signin and /signup to dashboard */}
        {userLoggedIn && userType === 'user' &&(
          <>
            <Route path="/signin" element={<Navigate to="/dashboard" />} />
            <Route path="/signup" element={<Navigate to="/dashboard" />} />
          </>
        )}

        {/* Protected routes */}
        {userLoggedIn && userType === 'user' ? ( // Only show these routes for logged in users of type 'user'
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/GeneralProfileForm" element={<GeneralProfileForm />} />
            <Route path="/AddNewCardForm" element={<AddNewCardForm />} />
            <Route path="/Template" element={<Template />} />
          </>
        ) : (
          // Redirect to SignIn for other cases
          <>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Navigate to="/signin" replace />} />
          <Route path="/GeneralProfileForm" element={<Navigate to="/signin" replace />} />
          <Route path="/AddNewCardForm" element={<Navigate to="/signin" replace />} />
          <Route path="/Template" element={<Navigate to="/signin" replace />} />
          {/* You can add more unauthenticated routes here */}
          </>
        )}
      </Route>
    </Routes>
  );
};

export default Routing;
