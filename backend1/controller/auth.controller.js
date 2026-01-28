import User from "../model/user.model.js"
import Student from "../model/student.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const register = async(req,res)=>{
    const{name,email,password,role} = req.body;

    try{
    if(!name || !email || !password){
        return res.status(400).json({
            message:"Enter all the fields mentioned",
            error:true,
            success:false
        })
    }

    const existUser = await User.findOne({email:email});

    if(existUser){
         return res.status(400).json({
            message:"User with this email already exist",
            error:true,
            success:false
        })
    }

    const hashPassword = await bcrypt.hash(password,10);

    if(!role){
        const user = new User({
            name,email,password:hashPassword
        })

        await user.save()

        const student = new Student({
            name,email
        })

        await student.save()

    return res.status(200).json({
        message:"User Registrtion completed",
        error:false,
        success:true,
        userdata:user,
        studentdata:student
    })
    }
    
    const user = new User({
        name,email,password:hashPassword,role
    })

    await user.save()

    return res.status(200).json({
        message:"User Registrtion completed",
        error:false,
        success:true,
        data:user
    })

    }catch(err){
         return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
        })
    }

}

export const login = async(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password){
          return res.status(400).json({
            message:"Enter all the fields mentioned",
            error:true,
            success:false
        })
    }
    try{

        const user = await User.findOne({email:email})
        if(!user){
            return res.status(404).json({
                message:"Email id is not registered yet!!",
                error:true,
                success:false
            })
        }
        
        if(! await bcrypt.compare(password,user.password)){
            return res.status(404).json({
                message:"Password is not matched . Try again",
                error:true,
                success:false
            })
        }

        if(user.role==='Student'){

            const student = await Student.findOne({email:user.email});
            const token = await jwt.sign({role:"Student",id:student.id},process.env.JWT_SECRET,{expiresIn:"1d"})
            console.log(token)

            return res.status(200).json({
                message:"User Login Successfully",
                error:false,
                success:true,
                data:student,
                token:token
            })
        }
        const token = await jwt.sign({role:"Admin",id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

        return res.status(200).json({
                message:"User Login Successfully",
                error:false,
                success:true,
                data:user,
                token:token
            })

        }catch(err){
            return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
        })
    }
}