import React, {createContext, useReducer} from 'react-native';

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  return (
    <GlobalContext.GlobalProvider value={[]}>
      {children}
    </GlobalContext.GlobalProvider>
  );
};
