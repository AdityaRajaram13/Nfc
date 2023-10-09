import React from 'react';
import Routing from './Routes/Routing';
import AdminRouting from './Routes/AdminRouting';
import CompanyAdminRouting from './Routes/CompanyAdminRouting';

const App = () => {
  return (
    <>
          <Routing/>
          <AdminRouting/>
          <CompanyAdminRouting/>

    </>
  );
};

export default App;


