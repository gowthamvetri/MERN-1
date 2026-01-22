import jwt from "jsonwebtoken"

export const checkAuth = (req,res,next)=>{
    // console.log("Hello")
    const token = req.headers.authorization.split(" ")[1];

    if(!token){
        return res.status(400).json({
            message:"Session expired please login in to continue"
        })
    }

    try {
        const verified = jwt.verify(token,process.env.JWT_SECRET)
        req.user = verified
        // console.log(verified);
        next()
    } catch (error) {
        return res.status(500).json({
            message:"Internal server !",
            error:error
        })
    }
}

