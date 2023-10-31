import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Product from "./components/Product"
import About from "./components/About"
import Contact from "./components/Contact"
import Product2 from "./components/Product2"
import Admin from "./components/Admin"
import Update from "./components/Update"
import Payment from "./components/Payment"
import AdminLogin from "./components/AdminLogin"
import Insertproduct from "./components/Insertproduct"
import Updateproduct from "./components/Updateproduct";
import Users from "./components/Users";
import Packages from "./components/Packages";
// import usersdisplay from "./components/usersdisplay";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Product' element={<Product />}/>
          <Route path='/Product2' element={<Product2 />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<Contact />}/>
          <Route path='/Admin' element={<Admin />}/>
          <Route path='/AdminLogin' element={<AdminLogin />}/>
          <Route path='/Update/:id' element={<Update />}/>
          <Route path='/payment' element={<Payment />}/>
          <Route path='/users' element={<Users />}/>
          <Route path='/packages' element={<Packages />}/>
          <Route path='/Insertproduct' element={<Insertproduct />}/>
          <Route path='/Updateproduct/:id' element={<Updateproduct />}/>
          {/* <Route path='/usersdisplay' element={<usersdisplay />}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
