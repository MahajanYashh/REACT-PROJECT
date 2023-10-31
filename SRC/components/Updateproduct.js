import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'

const Updateproduct = () => {
    
    // const {id} = useParams();
    // const [values,setValues] = useState({
    //     id:id,
    //     name:'',
    //     price:''
    // });

    // useEffect(()=>{
    //     axios.get("http://localhost:3001/getproducts/"+id )
    //     .then(res => {
    //         setValues({...values, name: res.data.name, price: res.data.price})
    //     })
    //     .catch(err => console.log(err))
    // },[])

    // const navigate= useNavigate();

    // const handleSubmit =(e) =>{
    //     e.preventDefault();
    //     axios.post("http://localhost:3001/getproducts/"+id, values )
    //     .then(res => {

    //     })
    //     .catch(err => console.log(err))
    // }
    const Navigate = useNavigate();
    const history = useNavigate();
    const { id } = useParams('')
    const [name,setName]= useState('');
    const [price,setPrice]= useState('');
    const [Description,setDescription]= useState('');

    useEffect(() => {

        axios.get("http://localhost:3001/getproducts/" + id)
            .then(res => {
                console.log(res)

                setName(res.data.name)
                setPrice(res.data.price)
                setDescription(res.data.Description)

            })
            .catch(e => console.log(e))
    }, []);
    function update(e) {
        e.preventDefault();


        axios.put("http://localhost:3001/updateproduct/" + id, {
            name,price,Description
        })
            .then(res => {
                console.log(res)
                Navigate('/Admin')
            })
    }
  return (
    <>
       <h1>Update Product</h1>
                <form onSubmit={update}>
                    <div>
                        <label htmlFor="productName">Package Name:</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}

                        />
                    </div>
                    <div>
                        <label htmlFor="productPrice">Package Price:</label>
                        <input
                            type="text"
                            id="productPrice"
                            name="productPrice"
                            value={price}
                            onChange={(e)=>setPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="productDescription">Package Description:</label>
                        <input
                            type="text"
                            id="productPrice"
                            name="productPrice"
                            value={Description}
                            onChange={(e)=>setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Update</button>
                        <Link to="/Admin">
                            
                        <button type="submit">Back</button>
                        </Link>
                    </div>
                </form>
    </>
  )
}

export default Updateproduct
