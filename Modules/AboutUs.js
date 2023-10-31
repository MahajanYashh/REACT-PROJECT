
const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1/CustomCars")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
const About=new mongoose.Schema({
        name:{
            type:String
        },
        email:{
            type:String
        },
        feedback:{
            type:String
        }
    })
    
    const about = mongoose.model("abouts",About)
    
    module.exports=about
