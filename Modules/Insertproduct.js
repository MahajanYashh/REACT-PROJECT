const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1/CustomCars")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
const InsertProduct=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    price:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    }

})

const Insertproducts= mongoose.model("Products",InsertProduct)

module.exports=Insertproducts
