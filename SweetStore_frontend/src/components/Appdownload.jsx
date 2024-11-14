import React from 'react'
import phoneimg from "../assets/phoneimg.jpg"
import playstore from "../assets/playstore.png"
import appstore from "../assets/applestore.png"
const Appdownload = () => {
  return (
    <div className='mt-32'>
        <div className='flex gap-32 justify-center items-center m-32'>
            <div className='info flex flex-col gap-16'>
                <h1 className='text-5xl font-bold text-slate-600 flex flex-col gap-4'>
                    <span>For Better Experience</span>
                    <span className='text-orange-400'>Download the Sweet Spot App</span>
                </h1>
                <p className='text-lg text-gray-700'>Many apps allow users to access certain features and content even without an internet connection,<br/> unlike websites that generally require an active connection to function. <br/>
                App often provide a more personalized experience, tailoring content and features based on user <br/> preferences and behavior.</p>
                <div className='flex gap-8'>
                    <img src={playstore} className='w-64 h-20 hover:scale-105 duration-300'/>
                    <img src={appstore} className='w-64 h-20 hover:scale-105 duration-300'/>
                </div>
            </div>
            <div><img src={phoneimg} alt="bgimg" className='hover:scale-105 duration-300'/></div>
        </div>
    </div>
  )
}

export default Appdownload