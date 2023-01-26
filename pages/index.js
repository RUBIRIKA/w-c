import Head from 'next/head';
import { Inter } from '@next/font/google';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Smallcard from '../components/Smallcard';
import Citysmcard from '../components/Citysmcard';
import SecondcardsAjax from '../components/SecondcardsAjax';
import Secondcard from '../components/Secondcard';
import Thirdcard from '../components/Thirdcard';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import fourcardAjax from '../components/fourcardAjax';
import Fourcard from '../components/Fourcard';
import { useRouter } from 'next/router';



export default function Home() {
    const slideleft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideright =()=>{
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const slidelefttwo = () => {
        var slidertwo = document.getElementById('slidertwo');
        slidertwo.scrollLeft = slidertwo.scrollLeft - 1000;
    };
    const sliderighttwo = () => {
        var slidertwo = document.getElementById('slidertwo');
        slidertwo.scrollLeft = slidertwo.scrollLeft + 1000;
    };


    return (
        <>
        
            <Head>
                <title>Wedding Center</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="sticky top-0 z-50 ">
                {/*head*/}
                <Header />
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
                <section className="pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {Citysmcard?.map((element) => (
                            <Smallcard
                                id={element.id}
                                img={element.image}
                                title={element.title}
                                description={element.desc}
                                price={element.price}
                            />
                        ))}
                    </div>
                </section>

                <section className="pt-6">
                    <div className="flex">
                        <div className="w-2/12 flex items-center">
                            <div className="w-full text-right ">
                                <button
                                    className="opacity-60 hover:opacity-100 p-3 rounded-xl border border-gray-100 shadow-lg mr-5"
                                    onClick={slideleft}
                                >
                                    <svg
                                        className=" w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                     
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div
                            id="slider"
                            className="flex space-x-6 overflow-scroll transition-margin duration-700 scroll-smooth 
        scrollbar-hide p-3 -ml-3"
                        >
                            {SecondcardsAjax?.map((element) => (
                                <Secondcard
                                    id={element.id}
                                    img={element.image}
                                    title={element.title}
                                    desc={element.desc}
                                    key={element.id}
                                />
                            ))}
                        </div>

                        <div className="w-2/12 flex items-center">
                            <div className="w-full ">
                                <button
                                    className="opacity-60 hover:opacity-100 p-3 rounded-xl border border-gray-100 shadow-lg ml-5 "
                                    onClick={slideright}
                                >
                                    <svg
                                        className="w-6 h-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                       
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="">
                    <Thirdcard
                        img="/images/lux.jpg"
                        title="Choices You Make"
                        description="As Wedding Center, Every Day Is Different."
                        buttont="Here we go"
                    />
                </section>

                <section className=" pb-8 ">
                    <h1 className="text-4xl">
                        <strong>Top Bridal Venue</strong>
                    </h1>

                    <div className="grid grid-cols-1  pt-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                        {fourcardAjax?.map((element) => (
                            <Fourcard
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
        </>
    );
}