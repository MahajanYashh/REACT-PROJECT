const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1/CustomCars")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
const contact=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const Contact = mongoose.model("Contact",contact)

module.exports=Contact