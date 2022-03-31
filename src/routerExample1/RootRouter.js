import React from "react";
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import './RootRouter.css';
import Home from './HomePage';
import AboutPage from './AboutPage';
import ContactUs from "./ContactUs";
import Content from "./Content";


function RootRouter() {
    return (
        <BrowserRouter>
         <nav class="nav_bar" >
            <Link class="nav_link" to="/HomePage">HomePage</Link>
            <Link class="nav_link" to="/AboutPage">AboutPage</Link>
            <Link class="nav_link" to="/ContactUs">ContactUs</Link>
             <input id="search_bar" type="text" name=" " placeholder="search for products"/>
        </nav>
        
        <Routes>
        <Route path="/" element={<Content/>}></Route>
        <Route path="/HomePage" element={<Home/>}/>
        <Route path="/AboutPage" element={<AboutPage/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>   
        
        </Routes>
        
        </BrowserRouter>
    );
}
export default RootRouter;