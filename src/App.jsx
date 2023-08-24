import React from 'react';
import { AuthProvider } from './utils/authContext';
import Routing from './Routes/Routing';
import { Provider } from 'react-redux';
import store from './Redux/Store/store'
import AdminRouting from './Routes/AdminRouting';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
          <Routing/>
          <AdminRouting/>
      </AuthProvider>
    </Provider>
  );
};

export default App;