import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  // const url = "http://localhost:4000"
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const reponse = await axios.get(`${url}/api/food/list`);
    // console.log(reponse.data)
    if(reponse.data.success === true){
      setList(reponse.data.data)
    }else{
      toast.error(reponse.data.message || "Something went wrong")
    }
  }

  const removeFood = async (FoodId) => {
    // console.log(FoodId);
    const response = await axios.post(`${url}/api/food/remove`, {id:FoodId});
    if(response.data.success === true){
      toast.success(response.data.message)
      fetchList();
    }else{
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchList()
  },[])

  return (
    <div className='px-20 py-8'>
      <h2 className='text-3xl italic font-bold text-slate-700 mb-8'>All Food List</h2>
      <div className='flex justify-between items-center gap-56 text-slate-600 text-xl mb-2'>
        <b className='flex-1'>Image</b>
        <b className='flex-1'>Name</b>
        <b className='flex-1'>Category</b>
        <b className='flex-1'>Price</b>
        <b className='flex-1'>Action</b>
      </div>
      <hr className='border-slate-500 mb-2'/>
      <div className='flex flex-col gap-4'>
        {list.map((item, index) => (
          <div key={index} className='flex gap-48 border-b-2 border-slate-300 p-2'>
            <img src={`${url}/images/`+item.image} alt="image" className='h-10 w-10 rounded-lg '/>
            <p className='flex-1 mx-12'>{item.name}</p>
            <p className='flex-1'>{item.price}</p>
            <p className='flex-1 '>{item.category}</p>
            <button onClick={() => removeFood(item._id)}>x</button>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default List