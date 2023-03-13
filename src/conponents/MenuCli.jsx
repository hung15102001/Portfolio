import React, { useEffect, useLayoutEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoMeow from "../../public/meow_demo_logo.jpg";
import en from "../assets/en.png";
import vn from "../../public/vi.png";
const MenuCli = () => {
    // const [mobile, setMobile] = useState(false)
    // const toggleMenuMobile = () => {
    //     if(mobile == false){
    //         mobile = true
    //     }else{
    //         mobile = false
    //     }
    // }
    useEffect(() => {
      const test = window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      console.log(test)
    },[])

  return (
    <div>
      {/* bg-white shadow-lg */}
      <nav className="">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a href="" className="flex items-center py-4 px-2">
                <img src={logoMeow} alt="" className=' w-[100px] h-[90px]' />
                </a>
              </div>

              <div className="hidden md:flex items-center space-x-1">

                <NavLink
                  to={"/"}
                  className="py-4 px-2 text-purple-500 border-b-4 border-purple-500 font-semibold"
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/profile"}
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
                >
                  Portfolio
                </NavLink>
                <NavLink
                  to={"/"}
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
                >
                  About
                </NavLink>
                <NavLink
                  to={"/"}
                  className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
                >
                  Contact
                </NavLink>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3 ">
              <a
                href
                className="py-1 px-1 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                
                  <img src={vn} alt="" className="w-[38px] h-[26px]" />
              
              </a>
              <a
                href
                className="py-1 px-1 font-medium text-white bg-[#fdecef] rounded hover:bg-green-400 transition duration-300"
              >
            
                  <img src={en} alt="" className="w-[38px] h-[26px]" />
               
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={()=>{}}>
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={ 
             "hidden mobile-menu"
             }>
          <ul className>
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MenuCli;
