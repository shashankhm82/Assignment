import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Component1 from './useContextHook/Example1';
import Example2 from './useContextHook/Example2';
import RootRouter from './routerExample1/RootRouter';
import Example3 from './useContextHook/Example3';
import Header from './routerExample2/Header';
import Navgation from './routerExample4/Navgation';
import PrimeHome from './amazonAssignment/PrimeHome';
import DiscriptionPage from './amazonAssignment/Discription';

ReactDOM.render(
  <React.StrictMode>
   {/* <App /> 
   <Component1/> 
   <Example2/> 
    <Example3/>
  <Navgation/>
  <Header/> 
<RootRouter/>
<PrimeHome/>
*/}

<DiscriptionPage/>


 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
