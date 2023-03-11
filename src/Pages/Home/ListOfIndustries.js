import React from 'react';
import hovImg from '../../assets/images/alvin_top_416193.jpg'
import jasonImg from '../../assets/images/jason_504993.jpg'
import nereidImg from '../../assets/images/nereid under ice.jpg'
import auvsImg from '../../assets/images/AUVs.jpg'
import camperImg from '../../assets/images/CAMPER.jpg'
import challengerImg from '../../assets/images/challengerdeep.jpg'
import seasoreImg from '../../assets/images/seasore2.jpg'
import sentryImg from '../../assets/images/sentry_504953.jpg'
const ListOfIndustries = () => {
    return (
        <div >
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl lg:text-5xl font-medium title-font mb-4 text-primary">The List of Industries We Serve</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={hovImg} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HOV Alvin</h2>

                                    <p className="leading-relaxed">Alvin during its 2014 science verification cruise in the Gulf of Mexico. The submersible has safely transported over 3,000 researchers on more than 5,000 dives to depths of 14,764 feet. Alvin is named for Allyn Vine, a WHOI engineer and geophysicist who helped pioneer deep submergence research and technology.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={jasonImg} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">ROV Jason</h2>

                                    <p className="leading-relaxed">Jason is equipped with sonars, video and still imaging systems, lighting, and numerous sampling systems. Jason’s manipulator arms collect samples of rock, sediment, or marine life and place them in the vehicle’s basket or on “elevator” platforms that float heavier loads to the surface.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={auvsImg} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Autonomous Underwater Vehicles (AUVs)</h2>

                                    <p className="leading-relaxed">Autonomous Underwater Vehicles (AUVs) are programmable, robotic vehicles that, depending on their design, can drift, drive, or glide through the ocean without real-time control by human operators. AUVs allow scientists to conduct other experiments from a surface ship. </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={nereidImg} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HROV Nereid Under Ice</h2>

                                    <p className="leading-relaxed">Ice-covered seas such as the Arctic and the water near calving glaciers are an important, and often dangerous, HROV Nereid Under-Ice is built to travel up to 40 kilometers (25 miles) laterally underwater, rather than the few hundred feet of a typical ROV</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={challengerImg} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">HOV DEEPSEA CHALLENGER</h2>

                                    <p className="leading-relaxed">The human-occupied vehicle (HOV) DEEPSEA CHALLENGERis a one-person submersible capable of reaching full-ocean depth. It was built in Sydney, Australia, by Acheron Project Pty., Ltd., and piloted by James Cameron to Challenger Deep, </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={sentryImg} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Sentry</h2>

                                    <p className="leading-relaxed">The autonomous underwater vehicle (AUV) Sentry is part of the National Deep Submergence Facility (NDSF). Following in the wake of its predecessor, ABE, Sentry is a fully autonomous underwater vehicle capable of exploring the ocean down to 6,000 meters (19,685 feet) depth.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={camperImg} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CAMPER</h2>

                                    <p className="leading-relaxed">The CAMera samPlER, or "Camper" is a large sampling sled that is towed by a research ship and lowered to the seafloor for collecting samples. The vehicle is
                                        positioned primarily by moving the ship, although the engineers can “drive” CAMPER in a small area using thrusters.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/3 sm:w-1/2 p-4">
                            <div className="flex relative">
                                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={seasoreImg} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">SeaSoar</h2>

                                    <p className="leading-relaxed">The SeaSoar, manufactured by Chelsea Instruments, Ltd., is a towed vehicle equipped with impeller-forced wings that can be rotated to allow the vehicle to undulate in the upper ocean. Under the original open-ocean configuration, SeaSoar undulates between the surface.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ListOfIndustries;