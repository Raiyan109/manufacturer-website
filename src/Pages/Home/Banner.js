import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/DrawKit Larry Character Illustration (3).png'


const Banner = () => {



    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Precision Parts for Your Submarine
                    </h1>
                    <div className='mx-auto'>
                        <p className="mb-8 leading-relaxed">Delivering Precision-Crafted Submarine Parts with Quality, Durability, and Performance Built to Withstand the Depths of the Ocean - Providing Safe and Reliable Solutions for Your Submarine Needs.</p>
                    </div>
                    <div className="flex justify-center">
                        <Link to='#part'>
                            <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg">Learn More</button>
                        </Link>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={bg} />
                </div>
            </div>
        </section>
    );
};

export default Banner;