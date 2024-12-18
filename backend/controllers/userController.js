import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const creatToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try{

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success: false, message: "User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({success: false, message: "Invalid credentials"});
        }

        const token = creatToken(user._id);
        res.json({success: true, token})

    }catch(error){
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

const registerUser = async (req, res) => {

    const {name, email, password} = req.body;

    try{
    const exists = await userModel.findOne({email});
    if(exists){
        return res.json({success: false, message: "User already exists"});
    }

    if(!validator.isEmail(email)){
        return res.json({success: false, message: "Invalid email"});
    }

    if(password.length < 8){
        return res.json({success: false, message: "Password must be at least 8 characters"});
    }

    let countSpecial = 0;
    for(let i = 0; i < password.length; i++){
        if(password[i] == "!" || password[i] == "@" || password[i] == "#" || password[i] == "$" || password[i] == "%"){
            countSpecial++;
        }
    }
    if(countSpecial < 1){
        return res.json({success: false, message: "Password must contain at least one special character"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        name: name,
        email: email,
        password: hashPassword
    })

    const user = await newUser.save();

    const token = creatToken(user._id);

    res.json({success: true, token});

    }
    catch(error){
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export { loginUser, registerUser }