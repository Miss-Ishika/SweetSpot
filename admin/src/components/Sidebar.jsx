import React, { useState } from 'react'
import { MdOutlinePendingActions } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { LuPlusCircle } from "react-icons/lu";
import { NavLink } from 'react-router-dom';




const Sidebar = () => {

  const [isOpen, setIsOpen] = useState('add');

  return (
    <div className='text-xl font-bold border-r-2 border-slate-500 min-h-screen p-8'>
        <NavLink to='/add' onClick={() => setIsOpen("add")} className={isOpen === 'add' ? 'flex items-center gap-4 bg-orange-600 p-2 text-white px-4 rounded-md mb-8 hover:bg-orange-600 duration-300 active:bg-orange-600' : 'flex items-center gap-4 bg-orange-500 p-2 text-white px-4 rounded-md mb-8 hover:bg-orange-600 duration-300 active:bg-orange-600'}>
            <LuPlusCircle className='text-3xl'/>
            <span>Add Items</span>
        </NavLink>
        <NavLink to='/list' onClick={() => setIsOpen("list")} className={isOpen === 'list' ? 'flex items-center gap-4 bg-orange-600 p-2 text-white px-4 rounded-md mb-8 hover:bg-orange-600 duration-300 active:bg-orange-600' : 'flex items-center gap-4 bg-orange-500 p-2 text-white px-4 rounded-md mb-8 hover:bg-orange-600 duration-300 active:bg-orange-600'}>
            <FaRegListAlt className='text-3xl'/>
            <span>List Items</span>
        </NavLink>
        <NavLink to='/order' onClick={() => setIsOpen("order")} className={isOpen === 'order' ? 'flex items-center gap-4 bg-orange-600 p-2 text-white px-4 rounded-md mb-8 hover:bg-orange-600 duration-300 active:bg-orange-600' : 'flex items-center gap-4 bg-orange-500 p-2 text-white px-4 rounded-md mb-8 hover:bg-orange-600 duration-300 active:bg-orange-600'}>
            <MdOutlinePendingActions className='text-3xl'/>
            <span>Orders</span>
        </NavLink>
    </div>
  )
}

export default Sidebar