import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
// import dotenv from "dotenv"

// dotenv.config()

export const createUser = async(req,res)=>{
    const {name,email,password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({
            error:"Enter all the valid fields"
        });
    }

    //await - wait until a promis is resolved either in positive or negative way
    try{
    const user = await User.findOne({email:email});

    if(user){
        return res.status(400).json({
            error:"User with the email already exist"
        });
    }

    const hashPassword = await bcrypt.hash(password,10)
    console.log(hashPassword)

    const newUser = new User({
        name,
        email,
        password:hashPassword
    })
 
    newUser.save()

    return res.status(200).json({
        message:"User created successfully",
        data : newUser
    })
    }catch(err){
        return res.status(500).json({
            error:"Internal server error"
        });
    }
    // return res.status(200).json(data)
}

export const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user =await User.findOne({email:email});

        if(!user){
            return res.status(400).json({
                message:"Entered mail id not registered"
            })
        }

        if(!await bcrypt.compare(password,user.password)){
            return res.status(400).json({
                message:"Password is wrog please verify the password"
            })
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        return res.status(200).json({
            message:`Welcom back ${user.name} !!`,
            data:user,
            token:token
        })
    } catch (error) {
        return res.status(500).json({
            error:"Internal server error"
        })
    }
}