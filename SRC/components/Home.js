import React from "react"
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../components/css/style.css'
import logo from './img/Customcarslogo.png'


function Home() {
    // const location = useLocation()

    return (
        <>
        <div className="homepage">

            
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
            {/* <li>
                 <Link to="/Admin">Admin</Link>
            </li> */}
            {/* <li>
                <Link to="/">Logout</Link>
            </li> */}
        </ul>
    </nav>
</header >
{/* ====== Header Ends ====== */}
</div>
            <section id="home">
            {/* <h1>Hello {location.state.id} and welcome to the home</h1> */}
                {/* website Introduction */}

                <div>
                    <h2>Welcome to Custom Cars</h2>
                    <h3>Workshop and Automotive</h3>
                </div>


            </section>
            <footer>
            <p> &copy; 2023 Custom Cars<br/>
            Contact: customcars@gmail.com</p>
            
            </footer>

</>


    
    )
}

export default Home