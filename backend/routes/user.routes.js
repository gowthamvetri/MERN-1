import { createUser,login } from "../controller/user.controller.js";
import { Router } from "express";

const userRoute = Router()
userRoute .post("/register",createUser);
userRoute .post("/login",login);


export default userRoute