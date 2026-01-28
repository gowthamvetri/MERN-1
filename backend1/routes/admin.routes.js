import express from "express"
import { createUser, deleteStudent, getStudent, getStudents, updateStudent } from "../controller/admin.controller.js"
import { authMiddleware } from "../middleware/middleware.js"


const adminRouter = express.Router()

adminRouter.get("/getAllUser",authMiddleware,getStudents)
adminRouter.get("/getUser/:id",authMiddleware,getStudent)
adminRouter.post("/createUser",authMiddleware,createUser)
adminRouter.patch("/updateUser/:id",authMiddleware,updateStudent)
adminRouter.delete("/deleteStudent/:id",authMiddleware,deleteStudent)

export default adminRouter