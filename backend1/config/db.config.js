import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const coonnect = mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Connected successfully with DB")).catch((err)=>console.log("Failed to connect :"+err))

export default coonnect;