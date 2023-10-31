import React, { useState } from "react"
import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"
import { useNavigate} from "react-router-dom"
import './css/login.css'


function Login() {

    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {

            await axios.post("http://localhost:3001/", {
                email, password
            })
                .then(res => {
                    if (res.data == "exist") {
                    // if (res.data == "exist") {
                        history("/Home", { state: { id: email } })
                    }
                    else if (res.data == "notexist") {
                    // else if (res.data == "notexist") {
                    // else if (res.data === "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        // <div className="body">
        <div>
            
        {/* </div> */}

            

    
<form className="login-form" action="POST">
  <h1>LOGIN</h1>
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
  <button onClick={submit}>Login</button>
  <button type="submit" onClick={() => history('/Signup')}>
    Signup
  </button>
</form>

            {/* <form className="login" action="POST">
            <h1>Login</h1>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                    <button onClick={submit}>Login </button>
                <button type="submit" onClick={()=>history('/Signup')}>
                    Signup
                </button>
            </form> */}
        </div>
    )
}

export default Login