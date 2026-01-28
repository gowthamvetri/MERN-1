import Student from "../model/student.model.js"

export const getInfo = async(req,res)=>{
    if(req.role!='Student'){
        return res.status(402).json({
            message:"You have no access to this end point",
            error:true,
            success:false
        })
    }

    const id = req.userId;

    try{
    const student = await Student.findOne({_id:id})

    if(!student){
        return res.status(400).json({
            message:"User not exist",
            error:true,
            success:false
        })
    }

    return res.status(200).json({
        message:"User found",
        error:false,
        success:true,
        data:student
    })
    }
    catch(err){
         return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
        })
    }
}

export const updateUser = async(req,res)=>{
    if(req.role!='Student'){
        return res.status(402).json({
            message:"You have no access to this end point",
            error:true,
            success:false
        })
    }

    try {
        const id = req.userId;
        const data = req.body

        const update = await Student.findByIdAndUpdate({_id:id},{$set:data},{new:true})

        if(!update){
            return res.status(401).json({
                message:"Unable to update the user try again",
                error:true,
                success:false
            })
        }

        return res.status(200).json({
            message:"Updated successfully",
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