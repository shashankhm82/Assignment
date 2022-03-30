import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home3 from "./components/Home3";
import Products from "./components/products/Products";
import Login from "./components/Login";
import Search from "./components/products/Search";
import AddProduct from "./components/products/AddProduct";
import ListProducts from "./components/products/ListProducts";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="products/search"> Products </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
