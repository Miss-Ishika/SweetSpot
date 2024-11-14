import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {type: String, required: true},
    items : {type: Array, required: true},
    amount : {type: Number, required: true},
    address : {
        fname: {type:String, required: true},
    lname: {type:String, required: true},
    number: {type:Number, required: true},
    houseNo: {type:String, required: true},
    street: {type:String, required: true},
    landmark: {type:String, required: true},
    },
    status : {type: String, default: "Food Processing"},
    date : {type: Date, default: Date.now()},
    payment : {type: Boolean, default: false}
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;