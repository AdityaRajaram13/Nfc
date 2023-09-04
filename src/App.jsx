import React from 'react';
import { AuthProvider } from './utils/authContext';
import Routing from './Routes/Routing';
import AdminRouting from './Routes/AdminRouting';

const App = () => {
  return (
      <AuthProvider>
          <Routing/>
          <AdminRouting/>
      </AuthProvider>
  );
};

export default App;