import React from 'react'
import Image from 'next/legacy/image'
function Fourcard({id,img,title,description,price}) {
  return (
    <div className="cursor-pointer rounded-xl  m-2 hover:scale-105 transform transition duration-300 ease-out">
        
    <div className="Relative m-4 rounded-xl 
    hover:scale-100 transition transform duration-200 ease-out 
    ">
    
       <div className="h-60 w-60">
        <Image src={img} layout="fill" className="rounded-lg"/>
       </div>
 
    </div>
    
    <div className=" relative items-stretch pl-4 ">
        <h2><strong>{title}</strong></h2>
         <p className="opacity-50 text-sm">{description}</p>
        <small>$</small>
        <strong>{price}</strong>
      </div>
      </div>

  )
}

export default Fourcard
