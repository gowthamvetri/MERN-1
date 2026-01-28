import User from "../model/user.model.js"
import Student from "../model/student.model.js"
import bcrypt from "bcryptjs"

export const getStudents = async(req,res)=>{
    if(!req.role=="Admin"){
        return res.status(402).json({
            message:"You have no access to this end point",
            error:true,
            success:false
        })
    }

    try {

        const data = await Student.find();

        if(!data){
            return res.status(400).json({
                message:"Unable to retrive the data",
                error:true,
                success:false
            })
        }

        if(data.length == 0){
            return res.status(200).json({
            message:"There is no students registered yet!",
            error:false,
            success:true,
            data:[]
        })
        }

        return res.status(200).json({
            message:"Students retived Successfuly",
            error:false,
            success:true,
            data:data
        })
        
    } catch (err) {
            return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
        })
    }
}

export const getStudent = async(req,res)=>{
    if(!req.role=="Admin"){
        return res.status(402).json({
            message:"You have no access to this end point",
            error:true,
            success:false
        })
    }

    try {
        const userId = req.params.id

        const student = await Student.findOne({_id:userId})

        if(!student){
            return res.status(400).json({
                message:"User not found",
                error:true,
                success:false
            })
        }

        return res.status(200).json({
            message:"Student retived Successfuly",
            error:false,
            success:true,
            data:student
        })
        
    } catch (err) {
            return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
            })
    }
}

export const createUser = async(req,res)=>{
    if(!req.role=="Admin"){
        return res.status(402).json({
            message:"You have no access to this end point",
            error:true,
            success:false
        })
    }

    try {
        const {name,email,age,department} = req.body

        if(!name ||!email||!age||!department){
            return res.status(400).json({
            message:"Enter all the fields mentioned",
            error:true,
            success:false
        })
        }

        const existUser = await User.findOne({email:email})

        if(existUser){
            return res.status(400).json({
                message:"User with this email already exist",
                error:true,
                success:false
            })
        }

        const hashPassword = await bcrypt.hash((name+age),10);

        const newUser = new User({
            name:name,
            email:email,
            password:hashPassword
        })

        await newUser.save()

        const newStudent = new Student({
            name:name,
            email:email,
            age:age,
            department:department
        })

        await newStudent.save()

        if(!newUser || !newStudent){
            return res.status(400).json({
                message:"Unable to create user",
                error:true,
                success:false
            })
        }

        return res.status(200).json({
            message:"Student Created Successfully",
            error:false,
            success:true,
            newUser,
            newStudent
        })


    } catch (err) {
        return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
        })
    }
}

export const updateStudent = async(req,res)=>{

    if(!req.role=="Admin"){
        return res.status(402).json({
            message:"You have no access to this end point",
            error:true,
            success:false
        })
    }

    try {
        const id = req.params.id
        const data = req.body

        const update = await Student.findOneAndUpdate({_id:id},{$set:data},{new:true})

        if(!update){
            return res.status(400).json({
                message:"Unable to update the user",
                error:true,
                success:false
            })
        }

        return res.status(200).json({
            message:"User updated successfully",
            error:false,
            success:true,
            data:update
        })

    } catch (err) {
        return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
        })
    }
}

export const deleteStudent = async(req,res)=>{
    if(!req.role=="Admin"){
        return res.status(402).json({
            message:"You have no access to this end point",
            error:true,
            success:false
        })
    }

    try {
        const id = req.params.id
        const email = await Student.findOne({_id:id})
        const deleteStudent = await Student.findOneAndDelete({_id:id})
        const deleteUser = await User.findOneAndDelete({email:email.email})

        if(!deleteStudent || !deleteUser){
            return res.status(400).json({
                message:"Unable to delete the user",
                error:true,
                success:false
            })
        }

        return res.status(200).json({
            message:"User and Student deleted successfully",
            error:false,
            success:true
        })
        
    } catch (err) {
        return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
        })
    }
}