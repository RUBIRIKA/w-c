import React from 'react';
import Image from 'next/legacy/image';

function Banner() {
  return (
    <div className="relative h-[100px] sm:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h[500px]">
      <Image src='/images/b4.jpg'  layout="fill" objectFit="cover"  />
      <div className="absolute top-1/3 w-full text-center">
        <p className="text-sm sm:text-lg">Don’t miss any moment, hire us</p>
        <button className=" text-white bg-[#17c5c2] px-4 py-2 shadow-md rounded-md font-bold my-3 
        hover:shadow-xl active:scale-90 transition duration-150 cursor-pointer">Here we are</button>
      </div>
    </div>
  )
}

export default Banner
