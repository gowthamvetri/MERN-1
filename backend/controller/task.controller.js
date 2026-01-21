import jwt from "jsonwebtoken";
import Task from "../models/Task.js";

export const createTask = async(req,res)=>{
    try{
    const {title,description,status,id} = req.body
    const authHeader = req.headers.authorization;
    if (authHeader) {
        console.log(authHeader.split(" ")[1]);
    }

    const userId = jwt.decode(authHeader.split(" ")[1]);
    console.log(userId)

    const task = new Task({
        title,
        description,
        status,
        userId:id
    })

    task.save()

    return res.status(200).json({
        message:"The task created successfully",
        data:task
    })


    }catch(error){
         return res.status(500).json({
            message:"Internal serevr Error",
        })
    }


}