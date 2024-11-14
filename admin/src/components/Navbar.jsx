import React from 'react'
import profile from '../assets/admin_profile.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mb-4  mx-16'>
        <span className='text-4xl font-bold text-orange-500'>Sweet Spot .</span>
        <span className='text-2xl font-bold text-slate-500 font-serif'>Admin Panel</span>
        <div><img src={profile} alt='profile' className='w-16 h-16'/></div>
    </div>
  )
}

export default Navbar