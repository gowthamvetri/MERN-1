import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
       name:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true,
        unique:true
    },age:{
        type:Number,
        default:18,
    },department:{
        type:String,
        default:"",
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

export default mongoose.model("Student",studentSchema);