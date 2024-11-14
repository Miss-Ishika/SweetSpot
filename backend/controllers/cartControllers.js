import userModel from "../models/userModel.js";

// Add to cart
const addToCart = async (req, res) => {
    try{
    const userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 50;
    }else{
        cartData[req.body.itemId] += 50;
    }
    await userModel.findByIdAndUpdate(req.body.userId, {cartData});
    res.json({success: true, message: "Added to cart"})
}catch(error){
    console.log(error);
    res.json({success: false, message: "Error"})
}
}

// Remove item from Cart
const removeFromCart = async (req, res) => {
    try{
        const userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 50;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success: true, message: "Removed from cart"})
    }catch(error){
        console.log(error);
        res.json({success: false, message: "Error"})
    }
    
}

// Get cart items
const getCart = async (req, res) => {
    try{
        const userData = await userModel.findById(req.body.userId);
        const cartData = await userData.cartData;
        res.json({success: true, cartData})
    }catch(error){
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

export { addToCart, removeFromCart, getCart }