//Client Server Model 
//Client -> sends the request and wait for the response from the backend
//Server -> serve the response for the client request

import cors from "cors"
import express from "express";
import dotenv from "dotenv";
import mongoose from "./config/dbConfig.js";
import userRoute from "./routes/user.routes.js";
import taskRoute from "./routes/task.routes.js";

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

//server -> routes -> controllers
//While creating it will be in reverse process
app.use("/api",userRoute)
app.use("/task",taskRoute)

app.get("/",(req,res)=>{
    res.json({
        message:"Hello from server"
    })
})

//With out Middleware
//req->routes->controller->response
//with Middleware
//req->routes->middleware->controller->response


app.listen(8080,()=>{
    console.log("Hello from server");
})