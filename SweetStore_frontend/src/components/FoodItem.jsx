import React, { useContext } from "react";
import star from "../assets/star.jpg";
import add from "../assets/add.png";
import inc from "../assets/inc.png";
import dec from "../assets/dec.png";
import { StoreContext } from "./StoreContext";
import { Link } from "react-router-dom";


const FoodItem = ({ id, name, image, price, category }) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);

  return (
    <div className="mx-2 my-4 hover:scale-105 duration-300 ">
      
        <Link to='/cart'><img src={url+'/images/'+image} alt={name} className="w-96 h-72 rounded-2xl " /></Link>
      
      <div className="mx-4 py-2">
        <div className="flex justify-between mt-4">
          <div className="text-2xl font-bold text-slate-600">{name}</div>
          <div className="flex">
            <img src={star} alt="star" className="w-10 h-8" />
            {/* <span className="text-2xl font-bold text-yellow-500">{stars}</span> */}
          </div>
        </div>
        <div className="text-lg text-slate-500">{category}</div>
        <div className="flex justify-between my-2">
            <div className="flex font-bold text-orange-400"><div className="text-3xl">{price}</div><div className="mt-3">/kg</div></div>
            {!cartItems[id]
              ? <img src={add} alt="add" className="w-4 h-4 cursor-pointer m-4 hover:scale-105 duration-300" onClick={() => addToCart(id, price)}/>
              : <div className="flex gap-0">
              <img src={dec} alt="dec" className="w-4 h-4 cursor-pointer m-4 hover:scale-105 duration-300" onClick={() => removeFromCart(id)}/>
                <span className="text-xl mt-2 font-bold text-slate-700">{cartItems[id]}g</span>
                <img src={inc} alt="inc" className="w-4 h-4 cursor-pointer m-4 hover:scale-105 duration-300" onClick={() => addToCart(id, price)}/>  
              </div> 
            }
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
