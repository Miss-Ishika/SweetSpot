import React, { useContext, useEffect, useState } from 'react'
import { BiCheckSquare } from 'react-icons/bi';
import { RxCross2 } from "react-icons/rx";
import { StoreContext } from './StoreContext';
import axios from 'axios';

const Login = ({setshowLogin}) => {

  const [currState, setCurrState] = useState("Login");

  const {url, setToken} = useContext(StoreContext)

  const [data, setData] = useState({
    name : "",
    email: "",
    password: ""
  })

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if(currState === "Sign Up"){
      newUrl += "/api/user/register"
    }else{
      newUrl += "/api/user/login"
    }

    const response = await axios.post(newUrl, data);

    if(response.data.success){
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setshowLogin(false);
    }
    else{
      alert(response.data.message)
    }

  }

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData(data => ({...data, [name]: value}))
  }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-30 '>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <div className='flex justify-between text-3xl font-bold'>
          <h1>{currState}</h1>
          <RxCross2 onClick={()=>setshowLogin(false)}/>
        </div>
        <form onSubmit={onLogin} className='flex flex-col gap-4 mt-8'>
          {currState === "Sign Up" ? <input type="text" placeholder='Name' name='name' onChange={onChangeHandler} value={data.name} required className='focus:border-b-2 focus:border-orange-300 border-spacing-2 border-b-2 border-white focus:outline-none '/> : <></>}
          <input type="email" placeholder='Email' name='email' onChange={onChangeHandler} value={data.email} required className='focus:border-b-2 focus:border-orange-300 border-spacing-2 border-b-2 border-white focus:outline-none '/>
          <input type="password" placeholder='Password' name='password' onChange={onChangeHandler} value={data.password}  required className='focus:border-b-2 focus:border-orange-300 border-spacing-2 border-b-2 border-white focus:outline-none '/>
          <div className='flex gap-2 mt-4 text-gray-500'>
          <input type="checkbox" required className='w-4 h-4'/>
          <p>By continuing, I agree to the Terms of Service and Privacy Policy</p>
        </div>
          <button type='submit' className='bg-orange-600 hover:bg-orange-500 duration-300 text-white font-bold py-2 px-4 rounded mt-4'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        </form>
        
        <div className='mt-4 text-slate-700 font-semibold'>
          {
            currState === "Sign Up" ? 
            <p>Already have an account ? <span onClick={() => setCurrState("Login")} className='hover:underline hover:cursor-pointer text-blue-600'>Login</span></p>
            : <p>Don't have an account? <span onClick={() => setCurrState("Sign Up")} className='hover:underline hover:cursor-pointer text-blue-600'>Sign Up</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login