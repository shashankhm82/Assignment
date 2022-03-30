import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const Logout = () => {
   const auth = useContext(AuthContext);
   return (
      <>
         <button onClick={auth.logout}>Click To Logout</button>
      </>
   );
};
export default Logout;