import React, { useContext, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Landing from '../Components/Admin/Landing';
import Dashboard from '../Components/Admin/Dashboard';
import AdminLayout from '../Layout/AdminLayout';
import { AuthContext } from '../utils/authContext';

const AdminRouting = () => {
  const { userLoggedIn, userType } = useContext(AuthContext); // Add userType to the context
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
            setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return<p>Loading</p>; // Render loading indicator or component
  }

  console.log('AdminRoutinng User Type:', userType);

  return (
    <Routes>
      <Route element={<AdminLayout />}>
        {!userLoggedIn && <Route path="/admin" element={<Landing />} />}
        {userLoggedIn && userType === 'admin' ? (
          <>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/dashboard" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/GeneralProfileForm" element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="/AddNewCardForm" element={<Navigate to="/admin/dashboard" replace />} />
             <Route path="/Template" element={<Navigate to="/admin/dashboard" replace />} />
             <Route path="/signin" element={<Navigate to="/admin/dashboard" replace />} />
             <Route path="/signup" element={<Navigate to="/admin/dashboard" replace />} />

          </>
        ) : (
          // Redirect to SignIn for unauthenticated users or non-admin users
          <Route path="/admin/*" element={<Navigate to="/admin" replace />} />
          
        )}
      </Route>
    </Routes>
  );
};

export default AdminRouting;
