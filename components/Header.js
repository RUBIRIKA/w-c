import React, { useState } from 'react';
import Image from 'next/legacy/image';
import PublicIcon from '@mui/icons-material/Public';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';


import 'react-datetime/css/react-datetime.css';
import { useRouter } from 'next/dist/client/router';
import BasicMenu from './ProfileMenu';


function Header({placeholder}) {

const [searchInput, setSearchInput] = useState("");
const router = useRouter();
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());

 const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
 };

const selectRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
};

const resetInput = () => {
    setSearchInput("");
};

const search = () => {
    router.push({
        pathname: "/search",
        query:{
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
        },
    });
};
 
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm py-5 p-5 md:px-10">
            {/*leftside*/}
            <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
              
                <Image
                    src="/images/oologin.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
               
            </div>

            {/*midlle */}

            <div className="flex items-center  lg:border-2 rounded-2xl py-1 md:shadow-sm ">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow pl-4 w-full  bg-transparent outline-none text-lg
           text-gray-600 placeholder-gray-400"
                    type="text"
                    placeholder={placeholder || "search"}
                />
                <SearchIcon
                    className="hidden lg:inline-flex h-8  bg-[#17c5c2] text-white  
          rounded-xl p-2 cursor-pointer md:mx-2"
                />
            </div>

            {/*right */}
            <div className="flex items-center space-x-4 justify-end text-gray-700">
                {/*<p className="hidden lg:hidden xl:hidden md:inline">W.C, Every detail matters</p>*/}
                  
               {/*} <MenuIcon className="h-6 md:flex-inline lg:hidden xl:hidden cursor-pointer" />*/}

               
               <BasicMenu />
                <PublicIcon className="h-6  cursor-pointer" />
                <Link href="/cart">
                <ShoppingCartIcon className="h-6  cursor-pointer" />
                </Link>
            </div>


            {searchInput && (
           
        
             <div className='flex flex-col col-span-3 mx-auto'>
               
               <div className='flex flex-col 
               col-span-3 mx-auto p-2'>

                 <DateRangePicker 
                 
                 ranges={[selectRange]}
                 minDate={new Date()}
                 rangeColors={["#17c5c2"]}
                 onChange={handleSelect}

                 />

               </div>

               <div className='flex gap-10 items-center mb-4 mx-auto'>
 
                <h2 className='text-xl flex-grow font-semibold'> Search your Venue</h2>

                 <div className='flex w-max gap-4'>

                   <button onClick={resetInput} className='bg-[#17c5c2] text-white border-2 border-gray-200 rounded-2xl w-20 h-10
                   hover:scale-110 transition transform duration-200 ease-out' >Ignore</button>
                   <button onClick={search} className='bg-[#17c5c2] text-white border-2 border-gray-200 rounded-2xl w-20 h-10
                   hover:scale-110 transition transform duration-200 ease-out' >Search</button>

                </div> 
               </div>
               </div>
            )}
        </header>
    );
}

export default Header;
