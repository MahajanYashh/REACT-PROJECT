import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../components/css/about.css'
import logo from './img/Customcarslogo.png'

const About = () => {
    const history = useNavigate();
    // const location = useLocation();

    const [name,setName ] = useState('');
     const [email,setEmail ] = useState('');
     const [feedback,setfeedback ] = useState('');

   async function submit (e){
    // to avoid errror in case
    e.preventDefault()

    try {
        await axios.post("http://localhost:3001/About",{
            name,email,feedback
        })
        .then(res => {
            if(res.data == "Exist"){
                alert("Name ALready Exists")
            }
            else if(res.data == "NotExist"){
                alert("message sent")
                alert("Submitted")
                history("/About")
            }
        }

    )
    } catch (e) {
        alert("wrong details")
        console.log(e)
    }
   }
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
            <main>
                <div className="about">
                    <h2 className="about">Welcome to Custom Cars</h2>
                    <p className="about">
                        At Custom Cars Garage, we are passionate about turning your automotive dreams into reality.
                        With years of experience and a dedicated team of experts, we specialize in customizing and
                        enhancing your cars to meet your unique style and performance requirements.
                    </p>
                    <p className="about">
                        Our services include custom paint jobs, bodywork, performance upgrades, and more.
                        Whether you have a classic car that needs restoration or a modern vehicle that requires
                        a personal touch, we have the skills and expertise to deliver exceptional results.
                    </p>
                    <p className="about">
                        Your car is more than just a mode of transportation; it's an expression of your individuality.
                        Let us help you make a statement on the road with our customized solutions.
                    </p>
                    <img src="" alt="" />
                </div>
                <div className="container-about">
                    <form action="POST" onSubmit={submit}>
                        <h2>Customer Feedback</h2>
                        <p>We value your feedback. Please share your thoughts and suggestions with us:</p>
                        <label for="name">Name:</label>
                        <input type="text" onChange={(e) => {setName(e.target.value)} } id="name" name="name" required />

                        <label for="email">Email:</label>
                        <input type="email"  onChange={(e) => {setEmail(e.target.value)} } id="email" name="email" required />

                        <label for="feedback">Feedback:</label>
                        <textarea id="message" onChange={(e) => {setfeedback(e.target.value)} }name="feedback" rows="4" required></textarea>

                        <input type="submit" value="Submit" name="submit" />
                    </form>
                </div>
               
            </main>
            <footer>
            <p> &copy; 2023 Custom Cars<br/>
            Contact: customcars@gmail.com</p>
            </footer>
        </>
    )
}

export default About
