import React, { useContext, useEffect, useState } from 'react';
import "./profile.css";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from './StoreContext';
import { CgProfile } from "react-icons/cg";
import { FaShoppingBag } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";


// NAVBAR IT IZZ

const Hero = ({setshowLogin}) => {

    const [menu, setMenu] = useState("Home")

    const {getTotalItem, token, setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const Logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/");

      
    }

  return (
    <div className='flex space-x-32 p-8 w-full md:px-8 md:text-lg  justify-between  items-center text-orange-500'>
      <Link to='/'><span className='text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold '>Sweet Spot .</span></Link>
      
      <ul className='menu-bar flex gap-8 md:flex md:gap-8 lg:gap-16 cursor-pointer'>
        <li  className={menu==="Home"?"font-bold border-b-2 border-orange-500":""} onClick={()=>setMenu("Home")} >Home</li>
        <li className={menu==="Menu"?"font-bold border-b-2 border-orange-500":""} onClick={()=>setMenu("Menu")} >Menu</li>
        <li className={menu==="MobileApp"?"font-bold border-b-2 border-orange-500":""} onClick={()=>setMenu("MobileApp")} >MobileApp</li>
        <li className={menu==="Contact Us"?"font-bold border-b-2 border-orange-500":""} onClick={()=>setMenu("Contact Us")} >Contact Us</li>
      </ul>
      <div className='text-xl flex md:gap-4'>
      <FaSearch className='cursor-pointer search text-2xl'/>
      <div className='flex'>
        <Link to='/cart'><FaCartPlus className='cursor-pointer cart text-2xl sm:'/></Link>
        <Link to='/cart'><span className='text-xl font-bold'>{getTotalItem() === 0 ? "" : <div className='border-2 border-green-600 bg-green-600 text-white text-lg w-5 h-5 p-3 mt-[-10px] ml-[-10px] font-bold rounded-full flex justify-center items-center'>{getTotalItem()}</div>}</span></Link>
      </div>
      {!token ? <button onClick={()=>setshowLogin(true)} className='cursor-pointer border-2 font-bold border-orange-500  px-4 py-1 rounded-full hover:bg-orange-500 hover:text-white duration-300'>Sign In</button> : 
      <div class='profile'>
        <CgProfile className='cursor-pointer text-3xl '/>
        <ul class='profile-dropdown'>
          <li onClick={() => navigate('/orders')} className='flex gap-2 font-semibold hover:text-green-500'><FaShoppingBag className='text-green-500' />Orders</li>
          <hr className='h-0.5 border-gray-400 mx-2'/>
          <li className='flex gap-2 font-semibold hover:text-red-500' onClick={Logout}><IoLogOutOutline className='text-red-500'/>Logout</li>
        </ul>
      </div>}
      
      </div>
    </div>
  )
}

export default Hero