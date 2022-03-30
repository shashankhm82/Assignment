import React, { useState } from 'react';
import LogIn from './Login';
import LogOut from './Logout';
import AuthContext from './AuthContext';

const Example3 = () => {
   const [auth, setAuth] = useState(false);
   const login = () => {
      setAuth(true);
   };
   const logout = () => {
      setAuth(false);
   };
   return (
      <React.Fragment>
      <AuthContext.Provider
            value={{ auth: auth, login: login, logout: logout }}
      >
      <p>{auth ? 'Hi! You are Logged In' : 'Oope! Kindly Login'}</p>
      <LogIn />
      <LogOut />
      </AuthContext.Provider>
      </React.Fragment>
   );
};
export default Example3;
