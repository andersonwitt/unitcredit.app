import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import {SignInResult} from './src/components/services/UserService';
import MainNavigation from './src/Routes';

export type UserSessionType = {
  token?: SignInResult;
  setToken?: Dispatch<SetStateAction<SignInResult>>;
};

export const UserSessionContext = createContext<UserSessionType>({});

const App = () => {
  const [token, setToken] = useState<SignInResult>({
    accessToken: '',
    isAuthenticated: false,
    userName: '',
  });

  return (
    <UserSessionContext.Provider value={{token, setToken}}>
      <MainNavigation />
    </UserSessionContext.Provider>
  );
};

export default App;
