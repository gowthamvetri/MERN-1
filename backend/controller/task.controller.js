import jwt from "jsonwebtoken";
import Task from "../models/Task.js";

export const createTask = async(req,res)=>{
    try{
        const id = req.user.id;
        const {title,description,status} = req.body
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

export const getTasks = async(req,res)=>{
    try{
        const id = req.user.id;

        const tasks = await Task.find({userId:id});

        if(tasks.length == 0){
            return res.status(202).json({
                message:"You have not added any tasks yet",
                data:[]
            })
        }

        return res.status(200).json({
            message:"Tasks retrived",
            data:tasks
        })

    }catch(error){
        return res.status(500).json({
            message:"Internal server error",
            error:error
        })
    }
}

export const getTask = async(req,res)=>{
    try{
        const task = req.params['id'];
        
        const taskRetrived = await Task.findById(task)

        if(!taskRetrived){
            return res.status(400).json({
                message:"No such task available",
                data:null
            })
        }

        if(taskRetrived.userId!=req.user.id){
            return res.status(400).json({
                message:"No such task available the given user ID",
                data:null
            })
        }

        return res.status(200).json({
            message:"Task retrived Successfully",
            data:taskRetrived
        })

    }catch(error){
        return res.status(500).json({
            message:"Internal server error",
            error:error
        })
    }
}

export const updateTask = async(req,res)=>{
    try {
        const task = req.params['id'];

        const content = req.body;

        const update = await Task.findOneAndUpdate(
            {_id:task,userId:req.user.id},
            {content},
            {new:true}
        )

        if(!update){
            return res.status.json({
                message:"Either user not have access to the task or the task not exist",
                data:null
            })
        }

        return res.status(200).json({
            message:"Updated successfully",
            data:update
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error",
            error:error
        })
    }
}

export const deleteTask = async(req,res)=>{
    try{
        const task = req.params['id']

        const del = await Task.findOneAndDelete(
            {_id:task,userId:req.user.id}
        )

        if(!del){
            return res.status.json({
                message:"Either user not have access to the task or the task not exist",
                data:null
            })
        }

        return res.status(200).json({
            message:"Task Deleted",
            data:del
        })


    }catch(error){
        return res.status(500).json({
            message:"Internal server error",
            error:error
        })
    }
}