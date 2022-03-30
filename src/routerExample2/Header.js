import React from 'react'
import {Route, Link, Routes, BrowserRouter} from "react-router-dom";
  import Home from './Home';
  import Profile from './Profile';

function Header() {

        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <BrowserRouter>
                            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Profile" className="nav-link">Profile </Link>
                                    </li>
                                    
                                </ul>
                            </nav>
                            <br />
                            <Routes>
                                <Route exact path="/" element={<Home />}>
                                </Route>
                                <Route path="/Profile" element={<Profile />}>
                                </Route>
                                
                            </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        )  
    }


export default Header