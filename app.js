const express = require("express")
// const multer = require('multer')
const collection = require("./modules/mongo")
const About = require("./modules/AboutUs")
const Contact = require("./modules/Contact")
const Payment = require("./modules/payment")
const InsertProduct = require("./modules/Insertproduct")
const cors = require("cors")
// const Insertproducts = require("./modules/Insertproduct")
// const path = require("path")
// const { upload } = require("@testing-library/user-event/dist/upload")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'components/img')
//     },
//     filename:(req,file,cb) => { 
//         cb(null,file.fieldname+ "_"+Date.now()+ path.extname(file.originalname  )    )
//     }
// })

// const Upload = multer({
//     storage:storage
// })

app.get("/",cors(),()=>{

})

// INSERTING DATA INTO LOGIN FORM
app.post("/",async(req,res)=>{
    const{email}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


// INSERTING DATA INTO SIGNUP FORM
app.post("/Signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

// INSERTING DATA INTO CONTACT PAGE
app.post("/contact",async(req,res)=>{
    const{name,email}=req.body


    const data={
        name:name,
        email:email
    }

    try{
        const check=await Contact.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await Contact.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }
})

// INSERTING DATA INTO ABOUT PAGE
app.post("/About",async(req,res)=>{
    const{name,email,feedback}=req.body


    const data={
        name:name,
        email:email,
        feedback:feedback
    }

    try{
        const check=await About.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await About.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

// INSERTING DATA INTO PAYMENT PAGE
app.post("/payment",async(req,res)=>{
    const{name,cardNumber,EDate,cvv,Cardname}=req.body


    const Pdata={
        name:name,
        cardNumber:cardNumber,
        EDate:EDate,
        cvv:cvv,
        Cardname:Cardname
    }

    try{
        const check=await Payment.findOne({name:name})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await Payment.insertMany([Pdata])
        }

    }
    catch(e){
        res.json("fail")
    }

})
// ADDING PRODUCTS TO PRODUCT PAGE
app.post("/Insertproduct",async(req,res)=>{
    // console.log(req.file);
    const{name,price,Description}=req.body


    const data={
        name:name,
        price:price,
        Description:Description
    }

    try{
        // Image.create({Image:data});
        // res.send({status:"ok"})
        const check=await InsertProduct.findOne({name:name})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await InsertProduct.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})



// Displaying users Data
app.get("/Users",(req,res)=>{
    collection.find()
    .then(user => res.json(user))
    .catch(e=>res.json(e))
})


// Displaying Product Data
app.get("/getproducts",(req,res)=>{
    InsertProduct.find()
    .then(products => res.json(products))
    .catch(e=>res.json(e))
})



app.delete('/deleteuser/:id',(req,res)=>{
    const id= req.params.id;
    collection.findOneAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err=> res.json(err))
})
app.delete('/deleteproduct/:id',(req,res)=>{
    const id= req.params.id;
    InsertProduct.findOneAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err=> res.json(err))
})

app.get('/getuser/:id',(req,res)=>{
    const id= req.params.id;
    collection.findById({_id:id})
    .then(stu => res.json(stu))
    .catch(e=>res.json(e))
})
app.get('/getproducts/:id',(req,res)=>{
    const id= req.params.id;
    InsertProduct.findById({_id:id})
    .then(stu => res.json(stu))
    .catch(e=>res.json(e))
})
app.put('/updateusers/:id',(req,res) =>{
    const id= req.params.id;
    collection.findByIdAndUpdate({_id:id},{
        email:req.body.email
    })
    .then(fau => res.json(fau))
    .catch(e=> res.json(e))
})
app.put('/updateproduct/:id',(req,res) =>{
    const id= req.params.id;
    InsertProduct.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        price:req.body.price
    })
    .then(fau => res.json(fau))
    .catch(e=> res.json(e))
})
app.listen(3001,()=>{
    console.log("port connected");
})

