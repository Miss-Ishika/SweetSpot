import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import deliveryBox from "../assets/deliveryBox.jpeg";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    })
    if(response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='flex flex-col w-10/12'>
      <h2 className="text-2xl font-bold mx-16 my-8 text-slate-600 ">Order Page</h2>
      <div className='flex flex-col px-8'>
        {orders.map((order, index) => {
          return (
            <div key={index} className="flex justify-between items-center border-2 px-16 py-4 border-orange-300 m-8 rounded-xl hover:bg-slate-100">
              <img src={deliveryBox} className="w-20 h-20"/>
              <div className="flex flex-col gap-8">
                <p className="font-semibold">
                  {order.items.map((item, index) => {
                    if (index === (order.items.length - 1)) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + " , ";
                    }

                  })}
                </p>
                <div>
                  <p>{order.address.fname + " " + order.address.lname}</p>
                  <p>{order.address.houseNo}</p>
                  <p>{order.address.street}</p>
                  <p>{order.address.number}</p>
                </div>
              </div>
              <p className="text-slate-600 font-semibold text-lg">items : {order.items.length}</p>
              <p className="text-slate-600 font-semibold text-lg">₹ {order.amount}/-</p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="text-slate-600 font-semibold text-lg bg-orange-200 py-2 px-4 rounded-lg border-2 border-orange-400 hover:bg-orange-300 focus:outline-none">
                <option>Food preparing</option>
                <option>Out for delivery</option>
                <option>Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
