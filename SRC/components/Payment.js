import React from 'react'
import { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'

const Payment = () => {
    const history = useNavigate();


const [name,setName]=useState('');
const [cardNumber,setCNumber]=useState('');
const [EDate,setEDate]=useState('');
const [cvv,setCvv]=useState('');
const [Cardname,setCName]=useState('');

async function submit(e){
    e.preventDefault()

    try{

        await axios.post("http://localhost:3001/payment",{
            name,cardNumber,EDate,cvv,Cardname
        })
        .then(res =>{
            if(res.data == "Exist"){
                alert("Payment Done")
            }
            else if(res.data == "NotExist"){
                history("/payment")
                alert("payment  sent")
            }
        })
    }
    catch(e){
        alert("Payment Cancelled")
        console.log(e)
    }
}

  return (
    <>
    
    <div class="product-container">
        <h1>Payment Page</h1>
        <form  action ="POST" onSubmit={submit}>
            <div class="form-group">
                <label for="username">Name</label>
                <input type="text"  
                name="username"
                onChange={ (e) => (setName(e.target.value))}
                placeholder="Enter User Name"/>
            </div>
            <div class="form-group">
                <label for="card-number">Card Number</label>
                <input type="text"  
                name="card-number"
                placeholder="Enter card number"
                onChange={ (e) => (setCNumber(e.target.value))}/>
            </div>
            <div class="form-group">
                <label for="expiry">Expiry Date</label>
                <input type="text"  
                name="expiry"
                 placeholder="MM/YY"
                 onChange={ (e) => (setEDate(e.target.value))}/>
            </div>
            <div class="form-group">
                <label for="cvv">CVV</label>
                <input type="number"
                name="cvv"
                placeholder="Enter CVV"
                onChange={ (e) => (setCvv(e.target.value))}/>
            </div>
            <div class="form-group">
                <label for="name">Name on Card</label>
                <input type="text"
                 name="name" 
                 placeholder="Enter name on card"
                 onChange={ (e) => (setCName(e.target.value))}/>
            </div>
            <div class="btn-container">
                <button  name="pay" onClick={submit} id="pay" type="submit">Pay Now</button>
                <Link to="/Home"><button id="pay" >Home</button></Link>
                <Link to="/Product"><button id="pay" >Add More</button></Link>
                </div>
        </form>
    </div>
    </>
  )
}

export default Payment


