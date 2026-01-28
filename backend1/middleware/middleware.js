import jwt from "jsonwebtoken"

export const authMiddleware = async(req,res,next)=>{
    const authHead = req.headers.authorization

    // console.log(authHead) 

    if(!authHead.startsWith("Bearer ")){
        return res.status(404).json({
            message:"Invalid user token type",
            error:true,
            success:false
        })
    }

    try {
        const token = authHead.split(" ")[1];

        if(!jwt.verify(token,process.env.JWT_SECRET)){
            return res.status(400).json({
            message:"Token invald could you please login again",
            error:true,
            success:false
        })
        }

        const data = jwt.verify(token,process.env.JWT_SECRET);
        console.log(data)
        req.role = data.role
        req.userId = data.id

        next()
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error please try again : "+err,
            error:true,
            success:false
        })
    }
}