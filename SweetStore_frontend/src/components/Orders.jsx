import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from './StoreContext';
import axios from 'axios';
import deliveryBox from '../assets/deliveryBox.jpeg'

const Orders = () => {

  const {url, token} = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorder", {}, {headers : {token}});
    
    setData(response.data.data);
    console.log(response.data.data);
  }

  useEffect(() => {
    if(token){
      fetchOrders();
    }
  },[token])

  return (
    <div className='flex flex-col'>
      <h2 className='text-2xl font-bold px-24 py-2'>My Order</h2>
      <div className='flex flex-col px-8'>
        {data.map((order, index) => {
          return (
            <div key={index} className='flex  justify-between items-center border-2 border-orange-300 py-4 px-8 m-8 rounded-xl'>
              <img src={deliveryBox} className='h-10 w-10' alt='img'/>
              <p className='flex flex-col'>
                {order.items.map((item, index) => {
                  if(index === order.items.length - 1){
                    return item.name + " x " + item.quantity
                  }else{
                    return item.name + " x " + item.quantity + " , "
                  }
                })}
              </p>
              <p>₹ {order.amount}/-</p>
              <p>Items : {order.items.length}</p>
              <p><b>{order.status}</b></p>
              <button onClick={() => fetchOrders()} className='bg-orange-200 py-2 px-4 rounded-lg text-orange-600 font-semibold hover:bg-orange-300 hover:text-orange-700 duration-300'>Track Order</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders