import React, { useState } from 'react'
import uploads from '../assets/uploads.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {

  // const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name : "",
    category : "Select Category",
    price : "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name] : value}));
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('category', data.category)
    formData.append('price', Number(data.price))
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData);
    if(response.data.success === true){
      setData({
        name : "",
        category : "Ladoo",
        price : "",
      })
      setImage(false)
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }else{
      toast.error(response.data.message)
    }
    
  }

  return (
    <div>
      <form className='flex flex-col gap-8 p-16 mx-16' onSubmit={onSubmitHandler}>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <p className='text-2xl font-bold text-slate-600 '>Upload Image</p>
          <label htmlFor="image"><img src={image ? URL.createObjectURL(image) : uploads} alt="uploads" className='w-20 h-20 rounded-lg'/></label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" name="image" id="image" required hidden className='border-2 border-slate-400 '/>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-2xl font-bold text-slate-600 '>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" id="name" required placeholder='type here' className='border-2 border-slate-300 w-100 h-10 rounded-lg px-4 focus:outline-none focus:border-2 focus:border-orange-500'/>
        </div>
        <div className='flex gap-16'>
          <div>
            <p className='text-2xl font-bold text-slate-600 mb-4'>Category</p>
            <select onChange={onChangeHandler} value={data.category} defaultValue="Select" name="category" id="category" required className='border-2 border-slate-300 w-60 h-10 rounded-lg px-4 focus:outline-none focus:border-2 focus:border-orange-500 text-gray-500'>
            <option value="Select">Select Category</option>
            <option value="Ladoo">Ladoo</option>
            <option value="Dry Fruit Sweet">Dry Fruit Sweet</option>
            <option value="Rasgulla">Rasgulla</option>
            <option value="Indian Sweets">Indian Sweets</option>
            <option value="Barfi">Barfi</option>
            <option value="Pastry">Pastry</option>
            <option value="Brownies">Brownies</option>
            <option value="Ice cream">Ice cream</option>
            <option value="Halwa">Halwa</option>
            </select>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-2xl font-bold text-slate-600 '>Price</p>
            <input type="number" onChange={onChangeHandler} value={data.price} min={50.00} max={10000.00} step={50.00} inputMode='numeric' pattern='[0-9]*' name="price" id="price" required placeholder='type here' className='border-2 border-slate-300 w-60 h-10 rounded-lg px-4 focus:outline-none focus:border-2 focus:border-orange-500'/>
          </div>
        </div>
        <div className='flex justify-center mt-8'><button type='submit' className='bg-orange-500 hover:bg-orange-600 p-2 text-white px-4 rounded-md place-items-center w-60'>Add</button></div>
      </form>
    </div>
  )
}

export default Add