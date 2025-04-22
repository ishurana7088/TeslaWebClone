import React from 'react'

const Shop = () => {
  return (
    <div>
       <div className="w-full overflow-scroll  h-[38vh]">
        
        <div className="flex  mt-8  h-full   gap-12">
            <div className=" max-w-[1000px]  mx-auto">
                 
                 <div className="mt-7">
                     <div className=" flex gap-10 ">
                    <div className=" justify-center  items-center flex flex-col">
                    <img className='w-45 h-25' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png" alt="" />
                    <h1 className='font-bold '>Solar Panels</h1>
                    
                     </div>
                     <div className=" justify-center items-center flex flex-col">
                    <img className='w-45 h-25' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Solar Roof</h1>
                    
                     </div>
                     <div className=" justify-center items-center flex flex-col">
                    <img className='w-45 h-25' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>Power Well</h1>
                    
                     </div>
                    <div className=" justify-center items-center flex flex-col">
                    <img className='w-45 h-25' src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png" alt="" />
                    <h1 className='font-bold text-zinc-900'>MegaPack</h1>
                    
                     </div>

                    
                    
                 </div>
               </div>
                </div>




            



        </div>
       </div>
    </div>
  )
}

export default Shop
