import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import { GoQuestion } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export const Navbar = () => {
  const [val , setVal]=useState(false);
  const btnClick = ()=>{
          setVal(!val);
  }
  return (
    <div className=' '>

    <Disclosure as="nav" className={`${val? "mb-10 ":""}`}>
      <div className="mx-auto px-8 sm:px-12 lg:px-13 ">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
          
          <div onClick={btnClick} className="h-7 w-6 bg-zinc-300 rounded">
            
          </div>
           
          </div>
          
          <div className="flex flex-1 lg:gap-39 md:gap-25 xl:gap-59  2xl:gap-150  items-center justify-center  sm:items-stretch sm:justify-start">
            <div className="">
            <Link to='/' > <h2 className='font-bold text-[24px] tracking-[10px] mr-6 sm:m-0 '>TESLA</h2>
            </Link>
            </div>

            <div className={`${val ===false ?"hidden sm:ml-6 sm:block":""} `}>
            <div style={{
              
            }} className={` ${val? " flex gap-7  mt-20 ml-[-160px]  text-[12px] ":'gap-7 flex '} items-center`}>
            <NavLink style={{
              isActive:"bg-red-900"
            }}  to='/home' >Vehicles</NavLink>
            <NavLink  to='/energy' >Energy</NavLink>
            <NavLink to='/charging' >Charging</NavLink>
            <NavLink to='/discover' >Discover</NavLink>
            <NavLink to='/shop' >shop</NavLink>
             </div>
            </div>
            
          </div>


          <div className="absolute  inset-y-0 right-0 flex items-center   pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="flex gap-5 items-center">
            <div className="hidden  sm:ml-6 sm:block"><Link to="/questionMark"><GoQuestion size={22} /></Link>
            </div>
            <Link className='hidden  sm:ml-6 sm:block' to='/globel'><TbWorld size={22} /></Link>

            <Link  to='/contact'><IoIosContact size={22} ></IoIosContact><Menu as="div" className="relative ml-3  ">
              <div > 
                <MenuButton className="relative  flex rounded-full">
                  <span className="absolute  -inset-1.5 rounded-full h-6 mt-[-16px] ml-[-6px] w-6 " />
                  <span className="sr-only">Open user menu</span>
                  </MenuButton>
              </div>
              <MenuItems
                transition
              
                className="absolute  right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                     log-in
                  </a>
                  
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                  
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu></Link>
        </div>

           
            
          </div>
        </div>
      </div>

     
    </Disclosure>
 
    </div>
    
  )
}
export default Navbar





