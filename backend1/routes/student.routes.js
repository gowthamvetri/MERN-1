import express from "express"
import { getInfo, updateUser } from "../controller/student.controller.js"
import { authMiddleware } from "../middleware/middleware.js"

const studentRouter = express.Router()

studentRouter.get("/get",authMiddleware,getInfo)
studentRouter.patch("/update",authMiddleware,updateUser)

export default studentRouter 