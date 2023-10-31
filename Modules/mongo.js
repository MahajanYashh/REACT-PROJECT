const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1/CustomCars")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const collection = mongoose.model("users",newSchema)

module.exports=collection

