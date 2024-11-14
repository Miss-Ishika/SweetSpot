import React, { useContext } from 'react'
import { StoreContext } from './StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);

  return (
    <div className='mt-24 flex flex-col justify-center items-center gap-16'>
        <h1 className='text-3xl italic font-bold text-slate-600'>Top dishes near you</h1>
        <div className='grid grid-cols-3 grid-flow-row gap-16'>
            {food_list.map((item, index)=>{
                {console.log(category, item.category);}
                if(category === "all" || item.category === category) {
                  return <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} category={item.category}/>
                }
            })}
        </div>
    </div>
  )
}

// amount += cartItems[item]*50

export default FoodDisplay