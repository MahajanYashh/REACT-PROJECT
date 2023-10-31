import React from 'react'
import { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../components/css/Contact.css'
import logo from './img/Customcarslogo.png'

const Contact = () => {
    const history = useNavigate();
    // const location = useLocation();

    const [name,setName ] = useState('');
     const [email,setEmail ] = useState('');
     const [message,setMsg ] = useState('');

   async function submit (e){
    // to avoid errror in case
    e.preventDefault()

    try {
       
        await axios.post("http://localhost:3001/contact",{
            name,email
        })
        .then(res => {
            if(res.data == "Exist"){
                alert("Name ALready Exists")
            }
            else if(res.data == "NotExist"){
                history("/Contact")
                alert("message sent")
            }
        } )
        
    } 
    catch(e) {
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

            <main class="contact-page">
                <section class="contact-info">
                    <address>
                    <h2>Contact Information</h2>
                        <p><strong>Custom Cars</strong></p>
                        <p><strong>Workshop and Automotive</strong></p>
                        <p>Cityville, Vyara </p>
                        <p>Phone: +91 7622824573</p>
                        <p>Email: Customcars@gmail.com</p>
                    </address>
                </section>
                <section class="contact-form">
                        
                    <form  action="POST"  onSubmit={submit} >
                    <h2>Contact Form</h2>
                        <div class="form-group">
                            <label for="name">Your Name:</label>
                            <input type="text" id="name" name="name" required 
                            onChange={(e) => {setName(e.target.value)} } />
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email:</label>
                            <input type="text" id="email" name="email" required
                            onChange={(e) => {setEmail(e.target.value) }} />
                        </div>
                        <div class="form-group">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="6" required
                             onChange={(e) => {setMsg(e.target.value) }}> 
                            </textarea>
                        </div>
                        <div class="form-group">
                            <input type="submit" onClick={submit} value="submit"/>
                        </div>
                    </form>
                </section>
            </main>
            <footer>
                

            <p> &copy; 2023 Custom Cars<br/>
            Contact: customcars@gmail.com</p>

            </footer>
        </>
    )
}

export default Contact
