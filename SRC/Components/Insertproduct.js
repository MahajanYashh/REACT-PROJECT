import React from 'react'
import { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'

const Insertproduct = () => {
    const history = useNavigate();


const [file,setFile]=useState('');
const [name,setName]=useState('');
const [price,setPrice]=useState('');
const [Description,setDescription]=useState('');

// const [Description,setDescription]=useState('');

// function coverToBase64(e){
//     console.log(e);
//     var reader = new FileReader();
//     reader.readAsDataURL(e.target.files[0]);
//     reader.onload =() =>{
//         console.log(reader.result);
//         setImage(reader.result);
//     };
//     reader.onerror = error =>{
//         console.log("Error:",error);
//     }
// }

// const handleupload =(e) =>{
//     const formdata = new formdata()
//     formdata.append("file",file)
// axios.post('http://localhost:3001/Insertproduct',formdata)
// .then(res => console.log(res))
// .catch(err => console.log(err))
// }

async function submit(e){
    e.preventDefault()

    try{

        await axios.post("http://localhost:3001/Insertproduct",{
            name, price,Description
        })
        .then(res =>{
            if(res.data == "Exist"){
                alert("Product Added")
            }
            else if(res.data == "NotExist"){
                history("/InsertProduct")
                alert("Product processing")
            }
        })
    }
    catch(e){
        alert("Product Cancelled")
        console.log(e)
    }
}
    return (
        <>
            <form  action ="POST" onSubmit={submit} >
                
            <table>
                <h1>Add Package</h1>
                {/* <tr>
                    <th><label for="pname">Product Image</label></th>
                    <td><input type="file"accept='image/*'
                     placeholder="Enter Product Image"
                    //  onChange={e => setFile(e.target.files[0])}
                      /></td>
                      {/* <td><button onClick={handleupload}type="submit">Upload</button></td> */}
                    {/* //   <td>{image==""|| image==null?"": <img src={image} height={100} width={100}/>}</td> */}
                {/* </tr> */} 
                <tr>
                    <th><label for="pname">Package Name</label></th>
                    <td><input type="text"
                     placeholder="Enter Package Name" 
                     onChange={ (e) => (setName(e.target.value))}/></td>
                </tr>
                <tr>
                    <th><label for="pname">Package Price</label></th>
                    <td><input type="number" 
                    placeholder="Enter Package Price"
                    onChange={ (e) => (setPrice(e.target.value))} /></td>
                </tr>
                <tr>
                    <th><label for="pname">Product Description</label></th>
                    <td><textarea rows="4" cols="3"
                     placeholder="Enter Package Description"
                     onChange={ (e) => (setDescription(e.target.value))}></textarea></td>
                </tr>
                <tr>
                    <td><button onClick={submit} type="submit">ADD</button></td>
                    <td>
                        <Link to="/Admin">
                        <button type="submit">BACK</button>
                        </Link>
                        </td>
                </tr>
            </table>
            </form>
        </>
    )
}

export default Insertproduct