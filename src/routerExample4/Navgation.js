import React from "react";
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import HomePage4 from './HomePage4';
import AboutPage4 from "./AboutPage4";

function Navgation() {
    return (
        <BrowserRouter>
         <nav class="nav_bar" >
            <Link class="nav_link" to="/HomePage4">HomePage</Link>
            <Link class="nav_link" to="/AboutPage4">AboutPage</Link>
           
             
        </nav>
        
        <Routes>
        <Route path="/HomePage4" element={<HomePage4/>}/>
        <Route path="/AboutPage4" element={<AboutPage4/>}/> 
        
        </Routes>
        
        </BrowserRouter>
    );
}
export default Navgation;