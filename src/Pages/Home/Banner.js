import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/nuclear submarine.jpg'
import nereidImg from '../../assets/images/nereid under ice.jpg'
import auvsImg from '../../assets/images/AUVs.jpg'
import camperImg from '../../assets/images/CAMPER.jpg'
import challengerImg from '../../assets/images/challengerdeep.jpg'
import seasoreImg from '../../assets/images/seasore2.jpg'
import sentryImg from '../../assets/images/sentry_504953.jpg'
import bg2 from '../../assets/images/banner-bg.jpg'


const Banner = () => {



    return (
        // <section className="text-gray-600 body-font">
        //     <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        //         <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        //             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Precision Parts for Your Submarine
        //             </h1>
        //             <div className='mx-auto'>
        //                 <p className="mb-8 leading-relaxed">Delivering Precision-Crafted Submarine Parts with Quality, Durability, and Performance Built to Withstand the Depths of the Ocean - Providing Safe and Reliable Solutions for Your Submarine Needs.</p>
        //             </div>
        //             <div className="flex justify-center">
        //                 <Link to='#part'>
        //                     <button className="inline-flex text-primary btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-pink-200 rounded text-lg">Learn More</button>
        //                 </Link>

        //             </div>
        //         </div>
        //         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        //             <img className="object-cover object-center rounded" alt="hero" src={bg} />
        //         </div>
        //     </div>
        // </section>
        <section className="text-black body-font mb-28 mt-5">
            <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font tracking-wide text-6xl md:text-6xl xl:text-8xl mb-4 font-bold mt-4 font-Montserrat">Precision Parts for Your Submarine
                    </h1>
                    <p className="mb-8 leading-relaxed opacity-50 font-Montserrat text-sm lg:text-lg">Delivering Precision-Crafted Submarine Parts with Quality, Durability, and Performance Built to Withstand the Depths of the Ocean - Providing Safe and Reliable Solutions for Your Submarine Needs. </p>
                    <div className="flex justify-center">
                        <Link to='/getQuote'>
                            <button className="inline-flex text-primary font-OpenSans btn btn-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary hover:text-secondary rounded text-lg">Get Quote</button>
                        </Link>

                    </div>
                </div>
                <div id="pattern" className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16 mt-6">
                    <div className="w-full flex gap-3 justify-center ">

                        <img className="object-cover object-center rounded-xl h-40 w-96" alt="hero" src={bg} />
                        <img className="object-cover object-center rounded-xl h-40 w-96" alt="hero" src={auvsImg} />
                    </div>
                    <div className="w-full h- flex gap-2 justify-center items-center my-2">

                        <img className="object-cover object-center rounded-xl h-40 w-96" alt="hero" src={seasoreImg} />
                        <img className="object-cover object-center rounded-xl h-40 w-96" alt="hero" src={sentryImg} />
                        <img className="object-cover object-center rounded-xl h-40 w-96" alt="hero" src={nereidImg} />
                    </div>
                    <div className="w-full flex gap-3 justify-center">

                        <img className="object-cover object-center rounded-xl h-40 w-96" alt="hero" src={camperImg} />
                        <img className="object-cover object-center rounded-xl h-40 w-96" alt="hero" src={challengerImg} />
                    </div>
                    <div className="w-full flex gap-3 justify-center my-2">

                        <img className="object-cover object-center rounded-xl h-40 w-96" alt="hero" src={bg2} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;