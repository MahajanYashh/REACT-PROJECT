import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './css/admin.css'
import logo from './img/Customcarslogo.png'

const Packages = () => {

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
        let filter1 = document.getElementById('myinput1').value.toUpperCase();

        let mytable1 = document.getElementById('mytable1');

        let tr1 = mytable1.getElementsByTagName('tr');


        for (var i = 0; i < tr1.length; i++) {
            let td = tr1[i].getElementsByTagName('td')[0];
            let td2 = tr1[i].getElementsByTagName('td')[1];
            if (td) {
                let textvalue = td.textContent || td.innerHTML;
                if (textvalue.toUpperCase().indexOf(filter1) > -1) {
                    tr1[i].style.display = "";
                }
                else {
                    tr1[i].style.display = "none";
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
                {/* <div> */}
                {/* <div className='outlook'> */}
                
                <table id="mytable1">
                <h1>Welcome Admin to Package Section</h1>
                    <tr>

                        <td colSpan={4}> <input type="text" id="myinput1" placeholder="Search" onKeyUp={search} /></td>
                    </tr>
                    <tr>
                        <th colSpan={3}>
                            <b>Records of Package</b></th>
                        <th><Link to="/Insertproduct"><button type="submit">Add Package</button></Link></th>
                    </tr>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th className='action'>Action</th>

                    </tr>

                    {pdata.map((products) => {
                        return (
                            <tr>
                                <td>{products.name}</td>
                                <td>{products.price}</td>
                                <td>{products.Description}</td>
                                <td className='action'>
                                    <Link to={`/Updateproduct/${products._id}`}><button type="submit">Update</button></Link>
                                    <Link to=""><button type="submit" onClick={(e) => handledeleteproduct(products._id)}>Delete</button></Link>
                                </td>
                            </tr>
                        )


                    })
                    }
                </table>

            </div>
        {/* </div > */}


            {/* </div> */ }
        </>
    )
}

export default Packages
