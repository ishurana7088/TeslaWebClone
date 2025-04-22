import React from 'react'
import video from '../videos/video.mp4'
import { Link } from 'react-router-dom'
const Proudct = ({data}) => {
    
  return (
    <div>

        {data.map((item, index)=>{
            
            return (
                <div className="w-full bg-amber-300 sm:h-screen h-[60vh]">
            <img  className='w-full h-[60vh] sm:h-full shrink-0 object-cover absolute' src={item.image} alt="" />
            <div className="justify-center relative items-center flex  sm:pt-15">
                <div className="flex flex-col justify-center items-center">
                    <div className="justify-center items-center flex flex-col">
                        <h1 className='text-[50px] font-bold text-white '>{item.heading}</h1>
                        <p className='text-[25px] text-white font-bold '>{item.heading1}</p>
                        <p className='text-[18px] font-bold text-white '>{item.paragraph}</p>
                    </div>
                    <div className={`flex gap-3 ${item.mt===true ? "mt-3 ":'sm:mt-[47%]  mt-[40%]'} `}>
                        
                        
                        {item.btn ?<Link to="/orders"></Link> :<><Link to='/orders'><button className={`rounded py-2 px-3 text-[12px] sm:text-[16px] sm:px-22 font-bold  ${item.mt===true ? "bg-blue-400 hover:bg-blue-600   duration-500":'bg-blue-400'} `}>Order Now</button></Link></>}
                        <button className='rounded bg-white text-[12px] sm:text-[15px] text-black py-2 px-2 sm:px-22 font-bold'>Learn More</button>
                    </div>
                </div>
            </div>
         </div>
            )
        })}
         
         <div className="">
            <div className="absolute text-white mt-[20%] m-9 ">
                   <h1 className='text-[28px] font-bold mb-3'>We Are Tesla </h1>
                   <button className='bg-zinc-100 px-5 py-2   text-zinc-900 rounded'>Join Tesla </button>
            </div>
            <div className="">
                 <video  
           
            autoPlay
            muted
            playsInline src={video}></video>
            </div>
           
         </div>
         
    </div>
  )
}

export default Proudct
