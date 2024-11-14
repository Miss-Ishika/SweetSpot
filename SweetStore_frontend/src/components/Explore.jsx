import React from 'react'
import { menu_data } from './data'
const Explore = ({category, setCategory}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-12'>
        <h1 className='text-4xl font-bold text-orange-400'>Explore</h1>
        <p className='text-lg text-slate-600 mt-8'>Satisfy your sweet tooth with the finest desserts delivered straight to your door. From rich cakes to decadent pastries, explore a world of indulgence that’s just a click away.</p>
        <p className='text-lg text-slate-600 mt-2'>Treat yourself to the ultimate dessert experience today!</p>
        <div className='flex gap-16 justify-center items-center mt-12'>
            {menu_data.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.title?"all":item.title)} key={index} className='flex flex-col justify-center items-center'>
                        <img src={item.image} alt={item.title} className={category===item.title?"w-20 h-20 rounded-full":"w-20 h-20 hover:scale-105 duration-200 rounded-full"}/>
                        <h2 className={category===item.title?'text-slate-600 font-bold mt-2' :'text-lg  text-slate-600 mt-2'}>{item.title}</h2>
                    </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default Explore