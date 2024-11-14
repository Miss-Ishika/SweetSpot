import React, { useContext, useEffect } from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import { StoreContext } from "./StoreContext";
import axios from 'axios';

const Verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url + "/api/order/verify", {success, orderId});
        if(response.data.success){
            navigate("/orders");
        }else{
            navigate("/");
        }
    }

    useEffect(() => {
      verifyPayment();
    },[])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
    </div>
  )
}

export default Verify