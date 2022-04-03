import React from "react";
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import './PrimeHome.css';
import Home from "./Home";
import TvShows from "./TvShows";
import Movies from "./Movies";
import Kids from "./Kids";
import Logo from "./images/prime-logo.jpg";
import DiscriptionPage from "./Discription";

function PrimeHome() {
    return (
        <BrowserRouter>
         
        <img className="logo" src={Logo} alt="logo image" />
        

         <nav className="nav_bar" >
            <Link className="nav_link" to="/">Home</Link>
            <Link className="nav_link" to="/TvShows">Tv Shows</Link>
            <Link className="nav_link" to="/Movies">Movies</Link>
            <Link className="nav_link" to="/Kids">Kids</Link>
        </nav>
        
        <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route path="/TvShows" element={<TvShows/>}/>
        <Route path="/Movies" element={<Movies/>}/>   
        <Route path="/Kids" element={<Kids/>}/> 
        <Route path="/Discription" element={<DiscriptionPage/>}/>
        </Routes>
        
        </BrowserRouter>
    );
}
export default PrimeHome;