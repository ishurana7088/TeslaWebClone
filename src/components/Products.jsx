import React from 'react'
import Proudct from './Proudct'
import img from '.././assets/images/car.avif'
import img2 from '.././assets/images/car2.avif'
import img3 from '.././assets/images/car3.avif'
import img4 from '.././assets/images/car4.avif'
import img5 from '.././assets/images/car5.avif'
import img6 from '.././assets/images/car6.avif'
import img7 from '.././assets/images/car7.avif'
import img8 from '.././assets/images/car8.avif'
import img9 from '.././assets/images/car9.avif'
const Products = () => {
    const data = [
        {   mt:true,
            id: 1,
            image:img,
            heading:'Model Y',
            heading1:'Starting at $3494',
            paragraph:'After $7500 Feaderal Tax Credit',
            
        },
        {   mt:false,
            id: 2,
            image:img2,
            heading:'Model 3',
            paragraph:'$299/mo Leasing With $1,000 Down',
 
        },
        {   mt:false,
            id: 3,
            image:img3,
            heading:'Model T',
            paragraph:'$3900 Federal Tax Credit at Purchase',
           
        },
        {   mt:false,
            id: 4,
            image:img4,
            heading:'MODEL X',
            heading1:'free SuperCharging Lncluded',
           
        },
        {   mt:false,
            id: 5,
            image:img5,
            heading:'MODEL S',
            heading1:"Free SuperCharging Included",
            
        },
        {   mt:false,
            id: 6,
            image:img6,
            heading:'Solar Panels',
            heading1:'Schedule a Virtual Consultation',
            
        },
        {   mt:false,
            id: 7,
            image:img7,
            heading:'Solar Roof',
            paragraph:'$3900 Federal Tax Credit at Purchase',
            
        },
        {   mt:false,
            id: 8,
            image:img8,
            heading:'Powerwell',
            
           
        },
        {   mt:false,
            id: 9,
            image:img9,
            btn:true,
            heading:'Accessories',
        },
       
        

    ]
  return (
    <div> 
       <Proudct data={data}></Proudct>
       
    </div>
  )
}

export default Products
