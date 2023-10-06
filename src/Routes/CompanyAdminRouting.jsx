import React, { useContext, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyAdminLayout from '../Layout/CompanyAdminLayout';
import CompanyAdminLanding from '../Components/CompanyAdmin/CompanyAdminLanding';
import CompanyAdminDashboard from '../Components/CompanyAdmin/Pages/CompanyAdminDashboard';
import { AuthContext } from '../utils/authContext';

const CompanyAdminRouting = () => {
  const { userLoggedIn, userType } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <p>Loading</p>; // Render a loading indicator or component
  }

  console.log('CompanyAdminRouting User Type:', userType);

  return (
    <Routes>
      <Route element={<CompanyAdminLayout />}>
        {!userLoggedIn && <Route path="/companyadmin" element={<CompanyAdminLanding />} />}
        {userLoggedIn && userType === 'companyadmin' ? (
          <>
            <Route path="/companyadmin/dashboard" element={<CompanyAdminDashboard />} />
            <Route path="/companyadmin" element={<Navigate to="/companyadmin/dashboard" replace />} />
            {/* Add more routes specific to company admin */}
          </>
        ) : (
          // Redirect to SignIn for unauthenticated users or non-company admin users
          <Route path="/companyadmin/*" element={<Navigate to="/companyadmin" replace />} />
        )}
      </Route>
    </Routes>
  );
};

export default CompanyAdminRouting;
