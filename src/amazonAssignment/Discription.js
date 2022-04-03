import React from "react";
import './DiscriptionPage.css';
import {BrowserRouter, Link} from 'react-router-dom';

function DiscriptionPage (){
    return(
        
        <div>
            <BrowserRouter>
        <nav className="nav_bar" >
            <Link className="nav_link" to="/">Home</Link>
            <Link className="nav_link" to="/TvShows">Tv Shows</Link>
            <Link className="nav_link" to="/Movies">Movies</Link>
            <Link className="nav_link" to="/Kids">Kids</Link>
        </nav>
        </BrowserRouter>
        <div className="container-fluid background">
        <h1 className="p-4" style={{color:"white"}}>Yuvarathnaa (Kannada)</h1>
        <h1 className="ms-4" style={{color:"blue"}}>Prime <span style={{color:"white",fontSize:"20px"}}>Watch for ₹0 with Prime</span></h1>
        <div className="ms-4" style={{width:"200px",border:"none"}}><button className="bg-info">Watch with prime Start your 30 day free trail</button>
        </div>
        <div className="ms-4 w-50">
            <p style={{color:"white",fontSize:"22px"}}>YUVARATHNAA, revolves around RK University (Govt Aided college) which is at the standpoint of completing 50 glorious years. Gurudev, Principal at RK University, whose life is dedicated for the welfare of the college fights against the privatisation of education system The story entwines between the bond of a teacher and his students.</p>
        </div>
        </div>
        
        </div>
    );
} export default DiscriptionPage;