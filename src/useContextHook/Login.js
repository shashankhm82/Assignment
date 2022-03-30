import React, { useContext } from 'react';
import AuthContext from './AuthContext';

const Login = () => {
   const auth = useContext(AuthContext);
   return (
      <>
         <button onClick={auth.login}>Login</button>
      </>
   );
};
export default Login;