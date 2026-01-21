import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected Successfully")
}).catch((error)=>{
    console.log(error)
})

export default mongoose