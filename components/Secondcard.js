import React from 'react'
import Image from 'next/legacy/image'

function Secondcard({id,img,title,desc}) {
  return (
    
     
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        
        <div className="relative h-80 w-80">
            <Image src={img} layout="fill" className="rounded-xl cursor-pointer " />
           <div className="relative text-center py-60">
            <h3 className=" text-black text-4xl"><strong>{title}</strong></h3>
           
            </div>
        </div>
       
       {/* <h3 className="text-l mt-3"><strong>{title}</strong></h3>
        <h5 className=' opacity-50 text-2xl'>{desc}</h5>*/}
        

       
    </div>

    

    
  )
}

export default Secondcard
