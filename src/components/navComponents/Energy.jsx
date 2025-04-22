import React from 'react'

const Energy = () => {
  return (
    <div>
       <div className="w-full overflow-scroll  h-[70vh]">
        
        <div className="flex mt-9  h-full   gap-12">
            <div className=" mt-9 h-[55vh]   w-2/3 ">
                 
                 <div className="ml-40">
                     <div className=" flex flex-wrap pr-5 ">
                    <div className=" justify-center  items-center flex flex-col">
                    <img className='w-50 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png" alt="" />
                    <h1 className='font-bold '>Solar Panels</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <p>Learn</p>
                    <p>Order</p>
                    </div>
                     </div>
                     <div className=" justify-center items-center flex flex-col">
                    <img className='w-50 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Solar Roof</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <p>Learn</p>
                    <p>Order</p>
                    </div>
                     </div>
                     <div className=" justify-center items-center flex flex-col">
                    <img className='w-50 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Power Well</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <p>Learn</p>
                    <p>Order</p>
                    </div>
                     </div>
                    <div className=" justify-center items-center flex flex-col">
                    <img className='w-50 h-32' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>MegaPack</h1>
                    <div className="flex gap-3 underline text-zinc-500">
                        <p>Learn</p>
                    
                    </div>
                     </div>

                    
                    
                 </div>
               </div>
                </div>




            <div className= "  mb-8 pl-9 border-l-[1.7px] w-1/3  border-zinc-300 ">
              <ul className="text-sm font-semibold text-zinc-500 py-9">
                 <li> <a className="text-md hover:underline block mb-2" href="">Help me Choose</a> </li>
                 <li> <a  className="text-md hover:underline block mb-2" href=""> Demo Drive</a> </li>
                 <li> <a className="text-md hover:underline block mb-2" href="">Trade-in</a> </li>
                 <li> <a className="text-md hover:underline block mb-2" href="">Compare</a> </li>
                 <li> <a className="text-md hover:underline block mb-2" href="">Help me Choose</a> </li>
                 <li> <a className="text-md hover:underline block mb-2" href="">Fleet</a> </li>
                 <li> <a className="text-md hover:underline block mb-2" href="">semai</a> </li>
                 <li> <a className="text-md hover:underline block mb-2" href="">Help me Choose</a> </li>
                 <li> <a className="text-md hover:underline block mb-2" href="">Help me Choose</a> </li>
                 <li> <a className="text-md hover:underline block mb-2" href="">We, Robot</a> </li>
                
                </ul>  
             
            </div>



        </div>
       </div>
    </div>
  )
}

export default Energy
