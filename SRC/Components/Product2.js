import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './css/product2.css'
import logo from './img/Customcarslogo.png'

const Product2 = () => {
    // const { id } = useParams
    const [pdata, setPData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getproducts')
            .then(products => setPData(products.data))
            .catch(e => console.log(e))
    }, []);
    return (
        <>
         <header>

<nav className="navbar">
    <div class="logo">
        <img src={logo} alt="Custom Cars" class="Navlogo" />
    </div>
    <ul className="nav-links">
        <li>
            <Link to="/Home">Home</Link>
        </li>
        <li>
            <Link to="/Product">Products</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Contact">Contact Us</Link>
        </li>
        <li>
            <Link to="/AdminLogin">Admin</Link>
        </li>
    </ul>
</nav>
</header >
<Link to="/Product"><button className='addtocart'>Products</button></Link>
<div className='container'>
    <div className='row'>
            {
                pdata.map(products => {
                    return <div className="col-4">
                        <div className="product">
                            <h2>{products.name}</h2>
                            <h3>Price:{products.price}</h3>
                            <h4>Description:{products.Description}</h4>
                            
                            <label for="quantity">Quantity</label>
                            <input type="number" />
                            <Link to="/payment">
                    <button className='addtocart'>Buy</button>
                    </Link>
                        </div>
                    </div>
                })
            }
            </div>
            </div>
            <footer>
            <p> &copy; 2023 Custom Cars<br/>
            Contact: customcars@gmail.com</p>
            </footer>
        </>
    )
}

export default Product2
