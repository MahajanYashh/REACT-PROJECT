import React  from 'react'
import { Link} from 'react-router-dom'
import '../components/css/product.css'
import logo from './img/Customcarslogo.png'
import p1 from './img/racing carbonfibre spoiler.jpg'
import P2 from './img/carbon fiber spoiler.jpg'
import P3 from './img/spoiler2jpg.jpg'
import P4 from './img/mini spoiler.jpg'
import P5 from './img/spoiler package.jpg'
import P6 from './img/pedestal spoiler.jpg'

const Product = () => {

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
            {/* ====== Header Ends ====== */}
                <Link to="/Product2"><button className='addtocart'>Packages</button></Link>
                {/* <img src="../img/shopping-cart.gif"  className="logo" alt="shopping cart"/> */}

            <div className="product-grid">
                {/* <!-- Product 1 --> */}
                <div className="product">
                    <img src={p1} alt="Carbon Fibre Spoiler" />
                    <h2 className='pname'>CARBON FIBRE SPOILER</h2>
                    <h3>Price:2500</h3>
                    <label for="quantity-product1">Quantity:</label>
                    <input type="number" min="1"  />
                    <Link to="/payment">
                    <button className='addtocart'>Buy</button>
                    </Link>
                </div>


                {/* <!-- Product 2 --> */}
                <div className="product">
                    <img src={P2} alt=" racing carbonfibre Spoiler" />
                    < h2 className='pname'> RACING CARBON FIBRE SPOILER</h2>
                    <h3>Price:5000</h3>
                    <label for="quantity-product1">Quantity:</label>
                    <input type="number" min="1"  />
                    {/* <Link to="/payment" >Buy</Link> */}
                    <Link to="/payment">
                    <button className='addtocart'>Buy</button>
                    </Link>
                </div>


                {/* <!-- Product 3 --> */}
                <div className="product">
                    <img src={P3} alt="Spoiler" />
                    < h2 className='pname'> UNIVERSAL SPOILER</h2>
                    <h3>Price:4500</h3>
                    <label for="quantity-product1">Quantity:</label>
                    <input type="number" min="1" />
                    <Link to="/payment">
                    <button className='addtocart'>Buy</button>
                    </Link>
                </div>


                {/* <!-- Product 4 --> */}
                <div className="product">
                    <img src={P4} alt=" Mini Spoiler" />
                    < h2 className='pname'> MINI SPOILER</h2>
                    <h3>Price:2000</h3>
                    <label for="quantity-product1">Quantity:</label>
                    <input type="number" min="1" />
                    <Link to="/payment">
                    <button className='addtocart'>Buy</button>
                    </Link>
                </div>


                {/* <!-- Product 5 --> */}
                <div className="product">
                    <img src={P5} alt="Spoiler package" />
                    < h2 className='pname'>SPOLIER PACK OF 3</h2>
                    <h3>Price:8000</h3>
                    <label for="quantity-product1">Quantity:</label>
                    <input type="number" min="1" />
                    {/* <Link to="/payment" >Buy</Link> */}
                    <Link to="/payment">
                    <button className='addtocart'>Buy</button>
                    </Link>
                </div>


                {/* <!-- Product 6 --> */}
                <div className="product">
                    <img src={P6} alt="pedestal spoiler" />
                    < h2 className='pname'>PEDESTAL SPOILER</h2>
                    <h3>Price:6000</h3>
                    <label for="quantity-product1">Quantity:</label>
                    <input type="number"  min="1" />
                    <Link to="/payment">
                    <button className='addtocart'>Buy</button>
                    </Link>
                </div>
            </div>
            <footer>
            <p> &copy; 2023 Custom Cars<br/>
            Contact: customcars@gmail.com</p>
            </footer>
                       
        </>
    )
}

export default Product
