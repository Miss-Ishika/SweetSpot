import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { CgFacebook } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="bg-gray-400 mt-16 w-full">
      <div className="content p-2 w-full text-slate-600 text-lg hover:cursor-pointer">
        <div className="flex gap-16 justify-betwwen p-16">
          <div className="about flex-1">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">Sweet Spot .</h1>
            <p className=" mb-4">
              Explore our website with ease. Find everything from our delicious
              range of sweets to detailed information about our company. Quick
              links for fast navigation.
            </p>
            <div className="flex gap-4">
              <CgFacebook className="w-8 h-8  duration-300 border-2 border-slate-600 rounded-full p-.5 hover:text-white hover:border-white" />
              <FaTwitter className="w-8 h-8  duration-300 border-2 border-slate-600 rounded-full p-1 hover:text-white hover:border-white" />
              <FaLinkedinIn className="w-8 h-8  duration-300 border-2 border-slate-600 rounded-full p-1 hover:text-white hover:border-white" />
            </div>
          </div>
          <div className="navbar">
          <h3 className="text-2xl font-bold text-slate-600 mb-4">About Us</h3>
            <ul className="flex flex-col">
              <li className="hover:text-white  duration-300">Home</li>
              <li className="hover:text-white  duration-300">About Us</li>
              <li className="hover:text-white duration-300">Careers</li>
              <li className="hover:text-white duration-300">Privacy Policy</li>
              <li className="hover:text-white duration-300">Terms & Conditions</li>
            </ul>
          </div>
          <div className="contact ">
          <h1 className="text-2xl font-bold text-slate-600 mb-4">Get in Touch</h1>
            <p>Email: support@yourwebsite.com</p>
            <p>Phone: +91-XXXXXXXXXX</p>
            <p>Address: 123 Main Street, Anytown, USA</p>
          </div>
          <div className="subscribe flex-1">
          <h1 className="text-2xl font-bold text-slate-600 mb-4">Subscribe</h1>
            <p>
              Subscribe to our newsletter and stay up-to-date with the latest
              news.
            </p>
            <div className="flex mt-8 hover:scale-105 duration-300">
              <input
                type="text" className=" w-9/12 border-l-2 border-b-2 border-t-2 rounded-l-lg bg-gray-400 border-slate-600 p-2 active:border-0"/>
              <button className="border-r-2 border-b-2 border-t-2 bg-orange-600  border-slate-600 rounded-r-lg p-2 text-slate-800 ">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="mx-24 bg-slate-600" />
        <div className="copyright flex justify-center items-center mt-2">
          © 2022 Sweet Store. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
