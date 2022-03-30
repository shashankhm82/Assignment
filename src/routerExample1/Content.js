import React from "react";
import {Link} from "react-router-dom";

function Content(){
    return (
        <div>
<h2>this is base page</h2>

       <div class="container-fluid bg-light" style={{height:"100px"}}>
    <div class="row">
      <div class="col-md-1 ms-5" style={{height: "100px"}}> 
	      <Link class="different_item" to="./images1/front.jpg">
	      <img style={{height:"70px", width:"70px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="google"/>
	      Top offers</Link>
      </div>
      <div class="col-md-1 ms-4" style={{height: "100px"}}> 
	      <Link class="different_items" to="/https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
	      <img style={{height:"70px", width:"50px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="google"/>
	      Grocery</Link>
      </div>
      <div class="col-md-1 ms-4" style={{height: "100px"}}> 
	      <Link class="different_items" to="/./flipkart page1.html">
      	<img style={{height:"70px", width:"50px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="google"/> 
      	Mobiles</Link>
      </div>
      <div class="col-md-1 ms-4" style={{height: "100px"}}>
        <Link class="different_items" to="/https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <img style={{height:"70px", width:"50px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="google"/>
        Fashon</Link>
      </div>
      <div class="col-md-1 ms-4" style={{height: "100px"}}>
        <Link class="different_items" to="/https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <img style={{height:"70px", width:"50px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="google"/>
        Electronics</Link>
      </div>
      <div class="col-md-1 ms-4" style={{height: "100px"}}>
        <Link class="different_items" to="/https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <img style={{height:"70px", width:"50px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="google"/>
        Home</Link>
      </div>
      <div class="col-md-1 ms-4" style={{height: "100px"}}>
        <Link class="different_items" to="/https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <img style={{height:"70px", width:"50px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="google"/>
        Appliances</Link>
      </div>
      <div class="col-md-1 ms-4" style={{height: "100px"}}>
        <Link class="different_items" to="/https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <img style={{height:"70px", width:"50px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="google"/>
        Travel</Link>
      </div>
      <div class="col-md-1 ms-4" style={{height: "100px"}}>
        <Link class="different_items" to="/https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <img style={{height:"70px", width:"50px"}} src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="google"/>
      Toys&more </Link>
      </div>
    </div>	
</div>
<br/>
</div>
    );
}
export default Content;
		