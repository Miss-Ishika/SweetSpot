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

/*
This code defines an authentication middleware for a Node.js/Express.js application.
This is done before addToCart, RemoveFromCart and getCart process for each id, which is tracked from token came from user in req.headers.
It checks for a token in the request headers, verifies the token, and extracts the user ID from it. If the token is valid, it adds the user ID to the req.body and passes control to the next middleware (which is addToCart, RemoveFromCart and getCart). If the token is missing or invalid, it sends an appropriate error response to the client.
*/