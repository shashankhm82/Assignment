import React from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import RootRouter from "./RootRouter";
import ContactUs from "./ContactUs";
function Home(){
    let location= useLocation();
    let navigate = useNavigate();
   
     const onClickBtn=()=>{
         if (location.pathname==='/HomePage'){
             navigate("/AboutPage")
         }
     }
    
    return(
        <div>
            <button onClick={()=>onClickBtn()}>Go to AboutPage</button>
        <nav style={{borderBottom:"1px solid blue", paddingBottom:"10px"}}>
            
            
    </nav> 
        

<h2>This is the Home page</h2>
</div>
    );
}
export default Home;