import mongoose from "mongoose";
// import User from "./User";

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },description:{
        type:String,
        required:true
    },status:{
        type:String,
        enum:["Active","Inactive"],
        required:true
    },userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

export default mongoose.model("Task",taskSchema)