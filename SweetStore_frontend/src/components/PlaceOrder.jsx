import React, { useContext, useEffect, useState, } from "react";
import { StoreContext } from "./StoreContext";
import axios from "axios";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

const PlaceOrder = () => {

  const location = useLocation();
  const { total } = location.state || {}; // Retrieve total1

    const {food_list, getTotalAmount, cartItems, token, url} = useContext(StoreContext);

    const [data, setData] = useState({
      fname : "",
      lname : "",
      number : "",
      houseNo : "",
      street : "",
      landmark : ""
    })

    const onChangeHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setData(data => ({...data, [name]: value}))
    }

    const placeOrder = async (event) => {
          event.preventDefault();
          let orderItems = [];
          food_list.map((item) => {
            if(cartItems[item._id] > 0) {
              let itemInfo = item;
              itemInfo["quantity"] = cartItems[item._id];
              orderItems.push(itemInfo);
            }
          })
          let orderData = {
            userId : token,
            address : data,
            items : orderItems,
            amount : total + 2,
          }
          const response = await axios.post(url + "/api/order/place", orderData, {headers: {token}});

          if(response.data.success) {
            const {session_url} = response.data;
            window.location.replace(session_url);
          } else {
            alert("Something went wrong");
          }
    };

    const navigate = useNavigate();

    useEffect(() => {
      if(!token){
        navigate('/');
      }else if(total === 0){
        navigate('/')
      }
    },[token])

  return (
    <form onSubmit={placeOrder} className="flex justify-between gap-48 p-16 mx-24">

      <div className="flex flex-col gap-8 flex-1">
        <div className="text-3xl font-bold text-slate-700">Delivery Infomation</div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold text-slate-700">Receiver Details</div>
          <div className="flex gap-4">
            <input required type="text" placeholder="First Name" name="fname" onChange={onChangeHandler} value={data.fname} className="border-2 border-slate-300 rounded-sm p-1 w-full max-w-xs focus:border-orange-300 focus:outline-none" />
            <input required type="text" placeholder="Last Name" name="lname" onChange={onChangeHandler} value={data.lname} className="border-2 border-slate-300 rounded-sm p-1 w-full max-w-xs focus:border-orange-300 focus:outline-none" />
          </div>
          <input required type="tel"  placeholder="Receivers calling no." name="number" onChange={onChangeHandler} value={data.number} maxLength={10} className="border-2 border-slate-300 rounded-sm p-1 w-full max-w-xs focus:border-orange-300 focus:outline-none" />
        </div>
        <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-slate-700">Address</div>
            <div className="flex gap-4">
            <input required type="text" placeholder="House No./Name" name="houseNo" onChange={onChangeHandler} value={data.houseNo} className="border-2 border-slate-300 rounded-sm p-1 w-full max-w-xs focus:border-orange-300 focus:outline-none" />
            <input required type="text" placeholder="Street" name="street" onChange={onChangeHandler} value={data.street} className="border-2 border-slate-300 rounded-sm p-1 w-full max-w-xs focus:border-orange-300 focus:outline-none" />
          </div>
          <textarea required className="border-2 border-slate-300 rounded-sm p-1 w-full max-w-xs focus:border-orange-300 focus:outline-none" placeholder="Landmark" name="landmark" onChange={onChangeHandler} value={data.landmark}></textarea>
        </div>
        <div>
        <div>OR</div>
        <div>Choose on Map</div>
        </div>
      </div>

      <div className="flex-1">
        <div>
          <div className="text-3xl font-bold text-slate-700">Cart Total</div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-lg text-slate-500 my-2">
              Subtotal
            </div>
            <div>₹{total}.00</div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between items-center">
            <div className="font-semibold text-lg text-slate-500 my-2">
              Delivery Charge
            </div>
            <div>₹{total === 0 ? 0 : 10}.00</div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg text-slate-600 my-2">Total</div>
            <div>₹{total === 0 ? 0 : total + 10}.00</div>
          </div>
          <button
            type="submit"
            onClick={placeOrder}
            className="bg-orange-600 hover:bg-orange-500 duration-300 rounded-lg text-white text-lg font-bold w-72 h-12 my-4"
            
          >
            Preceed To Checkout
          </button>
        </div>
      </div>

    </form>
  );
};

export default PlaceOrder;
