import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

function Smallcard({id,img,title,description,price}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-2 rounded-xl cursor-pointer
    hover:scale-105 transition transform duration-300 ease-out shadow-sm
    ">
      {/*left*/}
      <Link href={`/items/${title}`}>
       <div className="relative h-40 w-40 ">
        <Image src={img} layout="fill" className="rounded-lg"/>
       </div>
       </Link>
      {/*right*/}
      <Link href={`/items/${title}`}>
      <div className=" align-text-bottom ">
        <h2><strong>{title}</strong></h2>
         <p className="opacity-50 text-sm">{description}</p>
        <small>$</small>
        <strong>{price}</strong>
      </div>
      </Link>
    </div>
  )
}

export default Smallcard
