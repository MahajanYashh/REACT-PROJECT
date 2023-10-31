const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1/CustomCars")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
const payment=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    cardNumber:{
        type:String,
        required:true
    },
    EDate:{
        type:String,
        required:true
    },
    cvv:{
        type:String,
        required:true
    },
    Cardname:{
        type:String,
        required:true
    }

})

const Payment= mongoose.model("Payment",payment)

module.exports=Payment