import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
     const {token} = req.headers;
     if(!token){
        return res.json({success: false, message: "Not Authorized, login again"});
     }
     try{
        const token_decod = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decod.id;
        next();
     }catch(error){
        res.json({success: false, message: "Error"});
     }
}

export default authMiddleware;