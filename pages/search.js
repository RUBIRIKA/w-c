import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Menu from '../components/Menu';
import Kigalisearch from '../components/Kigalisearch';
import kigalisearchAjax from '../components/kigalisearchAjax';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';

function Search({id,img,title,description,price}) {

    const slidelefttwo = () => {
        var slidertwo = document.getElementById('slidertwo');
        slidertwo.scrollLeft = slidertwo.scrollLeft - 1000;
    };
    const sliderighttwo = () => {
        var slidertwo = document.getElementById('slidertwo');
        slidertwo.scrollLeft = slidertwo.scrollLeft + 1000;
    };

    const router = useRouter();
    const { location, startDate, endDate} = router.query;
   
    const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div>
       <div className="sticky top-0 z-50 ">
                {/*head*/}
                <Header placeholder={`${location}` } />
                {/*banner*/}

                <section className="pl-4   bg-white shadow-md ">
                    <div className="flex max-w-7xl mx-auto px-8 sm:px-16">
                        <div className="w-2/12 flex items-center">
                            <div className="w-full text-right pt-3 ">
                                <button
                                    className="opacity-60 hover:opacity-100 p-3 mr-1"
                                    onClick={slidelefttwo}
                                >
                                    <MdChevronLeft size={40} />
                                </button>
                            </div>
                        </div>

                        <div
                            id="slidertwo"
                            className="  flex  overflow-scroll  scroll-smooth scrollbar-hide 
      p-2 -ml-3"
                        >
                            <Menu />
                        </div>

                        <div className="w-2/12 flex items-center">
                            <div className="w-full pt-3">
                                <button
                                    className="opacity-60 hover:opacity-100 p-3  ml-1 "
                                    onClick={sliderighttwo}
                                >
                                    <MdChevronRight size={40} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

                 <main className="max-w-7xl mx-auto px-8 sm:px-16">

                   <section className="flex-grow pt-14 px-6">
                      <p className='text-xl pl-2'>100+ Venue, <small>{range}</small></p>
                      <h1 className='text-3xl font-semibold mt-2 mb-2 pl-2'>{location}</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {kigalisearchAjax?.map((element) => (
                            <Kigalisearch
                                id={element.id}
                                img={element.image}
                                title={element.title}
                                description={element.desc}
                                price={element.price}
                            />
                        ))}
                    </div>
                      
                   </section>

                 </main>


            <div className="">
                <Footer />
            </div>
    </div>
  )
}

export default Search
