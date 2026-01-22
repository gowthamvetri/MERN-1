import express from "express"
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controller/task.controller.js";
import { checkAuth } from "../middleware/auth.middleware.js"

const taskRoute = express.Router();

taskRoute.post("/create",checkAuth,createTask)
taskRoute.get("/getTasks",checkAuth,getTasks)
taskRoute.get("/getTask/:id",checkAuth,getTask)
taskRoute.put("/updateTask/:id",checkAuth,updateTask)
taskRoute.delete("/deleteTask/:id",checkAuth,deleteTask)

export default taskRoute; 