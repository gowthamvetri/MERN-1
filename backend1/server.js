import express from "express"
import dotenv from "dotenv"
import coonnect from "./config/db.config.js"
import userRouter from "./routes/auth.routes.js"
import studentRouter from "./routes/student.routes.js"
import adminRouter from "./routes/admin.routes.js"

dotenv.config()

const app = express()
app.use(express.json())


app.use("/api",userRouter)
app.use("/api",studentRouter)
app.use("/api",adminRouter)



app.listen(8000,()=>{
    console.log("Hello from server");
})