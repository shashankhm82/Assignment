import React, { useEffect } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";


function HomePage4(){
    let location= useLocation();
    let navigate = useNavigate();
   
     const onClickBtn=()=>{
         if (location.pathname==='/HomePage4'){
             navigate("/AboutPage4")
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
export default HomePage4;