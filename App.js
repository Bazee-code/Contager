import React from 'react';
import AppNavContainer from './src/navigation';
import GlobalProvider from './src/context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />;
    </GlobalProvider>
  );
};

export default App;
