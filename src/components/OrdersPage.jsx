import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 1},
    1024: { items: 1 },
};

const items = [
    <div className="item" data-value="1">
        <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY48,$PN01,$WY19P,$IPB8&view=FRONT34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&" alt="" />
    </div>,
    <div className="item" data-value="2">
        <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY48,$PN01,$WY19P,$IPB8&view=SIDE&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&" alt="" />
    </div>,
    <div className="item" data-value="3">
        <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY48,$PN01,$WY19P,$IPB8&view=REAR34&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&" alt="" />
    </div>,
    <div className="item" data-value="4">
        <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY48,$PN01,$WY19P,$IPB8&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=2&crop=0,0,80,0&overlay=0&" alt="" />
    </div>,
    <div className="item" data-value="5">
        <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY48,$IPB8,$PN01&view=STUD_SEAT&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&" alt="" />
    </div>,
    <div className="item" data-value="5">
    <img src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IPB8,$MTY48&view=INTERIOR_ROW2&model=my&size=1920&bkba_opt=2&crop=0,0,0,0&overlay=0&" alt="" />
</div>,
];




export default function OrdersPage() {
   return (
    <div className="bg-white h-full">
      <div className="pt-6 ">
        <div className="mx-auto  max-w-2xl px-2 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-2 lg:px-8 lg:pt-16 lg:pb-24">
       <div className="py-10  lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
         <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        autoPlay={true}
        infinite
        animationDuration={2000}
        animationType="fadeout"
    /> </div>


    <div className="px-3   sm:overflow-scroll h-[90vh]">
           <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        <div className="justify-center items-center flex">
           <h1 className='text-[36px] font-bold mb-2'>Model Y</h1>
           </div>
             <div className="justify-center items-center flex">
       <p className='text-zinc-700 text-sm mb-4'>Reimagined exterior design, all-new interior. </p>

             </div>
        
        <div className="flex justify-center  gap-9 ">
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>345<span className='text-[12px] text-zinc-600 font-semibold'>mi</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Range (EPA est.)</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>125<span className='text-[12px] text-zinc-600 font-semibold'>mph</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">Top Speed</div>
        </div>
        <div className="">
             <div className="flex items-center justify-center">
                <h1 className='text-[20px] text-zinc-700 font-semibold'>4.6<span className='text-[12px] text-zinc-600 font-semibold'>sec</span></h1>
             </div>
             <div className="text-[14px] text-zinc-500 font-semibold">0-60 mpl</div>
        </div>
        
       
        </div>
        


    </div>

        </div>
       
      </div>
    </div>
  )
}
