import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './css/login.css'

function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:3001/Signup",{
                email,password
            })
            .then(res=>{
                if(res.data == "exist"){
                    alert("User already exists")
                }
                else if(res.data == "notexist"){
                    history("/login",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

<form className="login-form" action="POST">
  <h1>REGISTRATION</h1>
  <input type="text" placeholder=" First Name"/>
  <input type="text" placeholder="Last Name"/>
  <input
    type="email"
    onChange={(e) => { setEmail(e.target.value) }}
    placeholder="Email"
  />
  <input
    type="password"
    onChange={(e) => { setPassword(e.target.value) }}
    placeholder="Password"
  />
  <button onClick={submit}>Register</button>
    <Link to="/">
  <button>
        Login
  </button>
        </Link>
</form>

{/* 
            <form action="POST">
            <h1>Signup</h1>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <button onClick={submit}>Register</button>
                <button><Link to="/">Login</Link></button>

            </form> */}

            


        </div>
    )
}

export default Signup