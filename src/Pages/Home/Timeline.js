import React from 'react';
import './Timeline.css'
import { Link } from 'react-router-dom';

const Timeline = () => {
    return (
        <div className='my-20'>
            {/* <h1 className='text-5xl text-primary font-bold text-center'> Testimonials</h1>
            <h1 className='text-2xl text-center mt-2'>What our Customers say</h1> */}
            <div className=''>
                {/* <div className="timeline">
                    <div className="outer">
                        <div className="timeline-card">
                            <div className="timeline-info">
                                <h3 className="timeline-title">Title 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div className="timeline-card">
                            <div className="timeline-info">
                                <h3 className="timeline-title">Title 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div className="timeline-card">
                            <div className="timeline-info">
                                <h3 className="timeline-title">Title 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div className="timeline-card">
                            <div className="timeline-info">
                                <h3 className="timeline-title">Title 4</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div className="timeline-card">
                            <div className="timeline-info">
                                <h3 className="timeline-title">Title 5</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <section>
                    <div className="bg-primary text-white py-8">
                        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                                <p className="ml-2 text-secondary uppercase tracking-loose">Our History</p>
                                <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Leviathan's Timeline of a decade</p>
                                {/* <p className="text-sm md:text-base text-gray-50 mb-4">
                                    Here’s your guide to the tech fest 2021 process. Go through all the steps to know the exact process of the
                                    fest.
                                </p> */}
                                <div className="flex items-center">
                                    {/* <Link to='/getQuote'> */}
                                    <button className="inline-flex text-primary font-OpenSans btn btn-secondary border-0 py-2 px-6 focus:outline-none rounded text-lg">See our Full History</button>
                                    {/* </Link> */}

                                </div>
                            </div>
                            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                                <div className="container mx-auto w-full h-full">
                                    <div className="relative wrap overflow-hidden p-10 h-full">
                                        <div className="border-2-2 border-yellow-555 absolute h-full border"
                                            style={{ right: '50%', border: '2px solid #FFC100', borderRadius: '1%', }}
                                        ></div>
                                        <div className="border-2-2 border-yellow-555 absolute h-full border"
                                            style={{ left: '50%', border: '2px solid #FFC100', borderRadius: '1%', }}

                                        ></div>
                                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                            <div className="order-1 w-5/12"></div>
                                            <div className="order-1 w-5/12 px-1 py-4 text-right">
                                                <p className="mb-3 text-base text-secondary">6 May, 2021</p>
                                                <h4 className="mb-3 font-bold text-lg md:text-2xl">Invented Leviathan</h4>
                                                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                    Invented World's No. 1 Submarine parts manufacturer company in Bangladesh
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                            <div className="order-1 w-5/12"></div>
                                            <div className="order-1  w-5/12 px-1 py-4 text-left">
                                                <p className="mb-3 text-base text-secondary">19 Jan, 2022</p>
                                                <h4 className="mb-3 font-bold text-lg md:text-2xl">New Facility</h4>
                                                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                    New Facility in Nepal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                            <div className="order-1 w-5/12"></div>
                                            <div className="order-1 w-5/12 px-1 py-4 text-right">
                                                <p className="mb-3 text-base text-secondary"> 22 March, 2022</p>
                                                <h4 className="mb-3 font-bold text-lg md:text-2xl">$100 Contract with Dubai</h4>
                                                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                    A new milestone in Leviathan
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                            <div className="order-1 w-5/12"></div>

                                            <div className="order-1  w-5/12 px-1 py-4">
                                                <p className="mb-3 text-base text-secondary">17 Feb, 2023</p>
                                                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">World's Best Manufacturer company award</h4>
                                                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                                    Our CEO takes the award
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Timeline;