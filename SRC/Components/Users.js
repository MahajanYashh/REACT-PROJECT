import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './css/admin.css'
import logo from './img/Customcarslogo.png'

const Users = () => {

    const { id } = useParams
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/Users')
            .then(user => setData(user.data))
            .catch(e => console.log(e))
    }, []);

    // For  Records of Products Displaying 
    const [pdata, setPData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getproducts')
            .then(products => setPData(products.data))
            .catch(e => console.log(e))
    }, []);

    const handledelete = (id) => {
        axios.delete('http://localhost:3001/deleteuser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    const handledeleteproduct = (id) => {
        axios.delete('http://localhost:3001/deleteproduct/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    const search = () => {
        let filter = document.getElementById('myinput').value.toUpperCase();

        let mytable = document.getElementById('mytable');

        let tr = mytable.getElementsByTagName('tr');

        for (var i = 0; i < tr.length; i++) {
            let td = tr[i].getElementsByTagName('td')[0];
            let td2 = tr[i].getElementsByTagName('td')[1];
            if (td) {
                let textvalue = td.textContent || td.innerHTML;
                if (textvalue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }

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
                            <Link to="/">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header >
            {/* ====== Header Ends ====== */}

            <div className="navbar1">
                <ul>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/packages">Packages</Link></li>
                </ul>
            </div>
            <div className="content">
                {/* Your content goes here */}
                {/* <div className='outlook'> */}

                    
                    {/* onKeyUp={search} /> */}

                    <table id="mytable">
                    <h1>USERS DATA</h1>
                        <tr>
                            <td colSpan={3}><input type="text" id="myinput" placeholder="Search" onKeyUp={search} /></td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>

                        {data.map(i => {
                            return (

                                <tr>
                                    <td>{i.email}</td>
                                    <td>{i.password}</td>
                                    <td>
                                        <Link to={`/Update/${i._id}`} type='submit' >
                                            <button id='btnedit'>Edit</button>
                                        </Link>
                                        <button id='btnedit' onClick={(e) => handledelete(i._id)}>Delete</button>
                                    </td>
                                </tr>

                            )
                        })}
                        {/* </tr> */}

                    </table>
                </div>

            {/* </div>xxxxxx` */}
          
        </>
    )
}

export default Users
