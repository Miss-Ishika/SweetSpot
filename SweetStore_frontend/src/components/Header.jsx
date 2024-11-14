import React from 'react'
import bg from "../assets/best.mp4"
// import '/Animations.css'

const Header = () => {
  return (
    <div className='flex justify-center items-center mt-12'>
        <div className='relative h-[600px] w-4/5 overflow-hidden rounded-xl'>
            <video src={bg} autoPlay loop muted className='absolute object-cover' />
            <div className="relative flex flex-col gap-8 justify-center transition-opacity text-white h-full bg-black bg-opacity-10">
                <h1 className='mx-8 text-6xl font-bold flex flex-col gap-4'>
                    <span >Indulge Your</span>
                    <span>Sweet Cravings...</span></h1>
                <h2 className='mx-8 text-4xl  font-bold'>Fresh Desserts Delivered to Your Doorstep!</h2>
                <p className='mx-8 text-xl w-3/5 font-bold'>Discover a world of delightful desserts, crafted with love and delivered fresh to your door. Whether you're celebrating or simply treating yourself, our desserts are just what you need to make every moment sweeter.</p>
                <button className='transition ease-in-out delay-150 bg-orange-600 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 mx-10 text-white font-bold py-2 px-4 rounded-full w-1/6'>Explore Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Header