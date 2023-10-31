import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './css/update.css'

function Update() {
    const Navigate = useNavigate();
    const history = useNavigate();
    const { id } = useParams('')
    const [email, setEmail] = useState('')
    useEffect(() => {

        axios.get("http://localhost:3001/getuser/" + id)
            .then(res => {
                console.log(res)

                setEmail(res.data.email)

            })
            .catch(e => console.log(e))
    }, []);
    function update(e) {
        e.preventDefault();


        axios.put("http://localhost:3001/updateusers/" + id, {
            email
        })
            .then(res => {
                console.log(res)
                Navigate('/Admin')
            })
    }
    return (
        <div>
            <div className='container'>
                <center>
                    <form action="POST">
                        <h1>Update Page</h1>
                        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        <button onClick={update}>Update</button>
                        <Link to="/Admin">
                            <button>Back</button>
                        </Link>
                    </form>
                </center>
            </div>
        </div>
    )
}

export default Update
