import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Vehicles = () => {
  return (
    <div>
       <div className="w-full  h-[70vh]">
        <div className="flex mt-9  h-full gap-12 overflow-scroll p-5">
            <div className=" mt-9 h-[55vh]   pl-4 ">
                 
                 <div className="w-full  ">
                     <div className="flex  gap-8 w-full">
                    <div className=" justify-center items-center flex flex-col">
                    <img className='w-55 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="" />
                    <h1 className='font-bold '>Models</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <Link>Learn</Link>
                    <Link>Order</Link>
                    </div>
                     </div>
                     <div className=" justify-center items-center flex flex-col">
                    <img className='w-55 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3-Performance-LHD.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Models</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <Link>Learn</Link>
                    <Link>Order</Link>
                    </div>
                     </div>
                     <div className=" justify-center items-center flex flex-col">
                    <img className='w-55 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y-2-v2.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Models</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <Link>Learn</Link>
                    <Link>Order</Link>
                    </div>
                     </div>
                    

                    
                    
                 </div>

                 <div className="flex gap-8">
                 <div className=" justify-center items-center flex flex-col">
                    <img className='w-55 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Models</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <Link>Learn</Link>
                    <Link>Order</Link>
                    </div>
                     </div>
                     
                     <div className=" justify-center items-center flex flex-col">
                    <img className='w-55 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Models</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <Link>Learn</Link>
                    <Link>Order</Link>
                    </div>
                     </div>

                     <div className=" justify-center items-center flex flex-col">
                    <img className='w-55 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Inventory.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Models</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <Link>Learn</Link>
                    <Link>Order</Link>
                    </div>
                     </div>
                    
                    
                 </div>
                 </div>
                
            



            
            </div>
            <div className= "   pl-9 border-l-[1.7px] w-1/3  h-[60vh] border-zinc-300 ">
              <ul className="text-sm font-semibold text-zinc-500 py-9">
                 <li> <Link className="text-md hover:underline block mb-2" href="">Help me Choose</Link> </li>
                 <li> <Link  className="text-md hover:underline block mb-2" href=""> Demo Drive</Link> </li>
                 <li> <Link className="text-md hover:underline block mb-2" href="">Trade-in</Link> </li>
                 <li> <Link className="text-md hover:underline block mb-2" href="">Compare</Link> </li>
                 <li> <Link className="text-md hover:underline block mb-2" href="">Help me Choose</Link> </li>
                 <li> <Link className="text-md hover:underline block mb-2" href="">Fleet</Link> </li>
                 <li> <Link className="text-md hover:underline block mb-2" href="">semai</Link> </li>
                 <li> <Link className="text-md hover:underline block mb-2" href="">Help me Choose</Link> </li>
                 <li> <Link className="text-md hover:underline block mb-2" href="">Help me Choose</Link> </li>
                 <li> <Link className="text-md hover:underline block mb-2" href="">We, Robot</Link> </li>
                
                </ul>  
             
            </div>
        </div>
       </div>
    </div>
  )
}

export default Vehicles
