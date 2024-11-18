import React, { useContext } from 'react'
import { StoreContext } from './StoreContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const {cartItems, food_list, removeFromCart, getTotalAmount, url} = useContext(StoreContext)

    const navigation = useNavigate();

    let total1 = 0;

  return (
    <div className='mt-16'>
        <div className='mx-24 my-4 flex flex-col justify-center'> 
            <div className='classItems font-bold text-xl text-slate-500'>
                <p>Items</p>
                <p>Titles</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr className=' border-gray-500'/>
            <div className='flex flex-col gap-4'>
            {food_list.map((item, index) => {
                if(cartItems[item._id] > 0){
                    return (
                          <div key={index} className='classItems font-semibold text-lg text-slate-500 items-center m-2'>
                            <img src={url+'/images/'+item.image} alt={item.name} className='w-10 h-10 rounded-xl' />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{cartItems[item._id]}g</p>
                            <p>₹{(cartItems[item._id]/50)*item.price}/-</p>
                            <div className='hidden'>{total1 += (cartItems[item._id]/50)*item.price}</div>
                            <p><button className='hover:text-red-400' onClick={() => removeFromCart(item._id)}>{cartItems[item._id] === 50 ? "Remove Item" : "Reduce Quantity"}</button></p>
                            <hr className='w-3/4'/>
                          </div>
                    )
                }
            })}
            </div>
          </div>


          <div className='flex gap-32 justify-between p-16 mx-16'>
            <div className='flex-1'>
              <div className='text-3xl font-bold text-slate-700'>Cart Total</div>
              <div className='flex justify-between items-center'>
                <div className='font-semibold text-lg text-slate-500 my-2'>Subtotal</div>
                <div>₹{total1}.00</div>
              </div>
              <hr className='border-gray-300'/>
              <div className='flex justify-between items-center'>
                <div className='font-semibold text-lg text-slate-500 my-2'>Delivery Charge</div>
                <div>₹{total1 === 0 ? 0 : 10}.00</div>
              </div>
              <hr className='border-gray-300'/>
              <div className='flex justify-between items-center'>
                <div className='font-bold text-lg text-slate-600 my-2'>Total</div>
                <div>₹{total1 === 0 ? 0 : total1 + 10}.00</div>
              </div>
              <button className='bg-orange-600 hover:bg-orange-500 duration-300 rounded-lg text-white text-lg font-bold w-72 h-12 my-4' onClick={() => navigation('/placeOrder', { state: { total: total1 } })}>Preceed To Checkout</button>
            </div>
            
            <div className='flex-1 mx-8 my-8 flex flex-col gap-4'>
              <p className='text-lg text-slate-500'>If you have promo code, enter it here</p>
              <div className='flex'>
                <input className='bg-slate-300 w-96 text-slate-600 p-2 rounded-l-md' type='text' placeholder='promo code'/>
                <button className='bg-slate-900 hover:bg-black duration-300 text-white text-xl font-semibold p-2 px-8 rounded-r-md focus:outline-none'>Apply</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Cart