import React from 'react';

const Video = () => {
    return (
        <div>
            <section className='text-gray-600 body-font'>
                <div className='container mx-auto flex flex-col px-5 py-24 justify-center items-center'>

                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">About Leviathan</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Experience You Can Trust</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Since 1972, Leviathan has been a pioneer in the fabrication of high quality reactive metals and specialty alloy equipment. Products range from pressure vessels, pipe spool fabrication, heat exchangers, pump housings, valve bodies, and mixing equipment.  TiFab is the fabricator of choice with qualified procedures for titanium, zirconium, and nickel alloy fabrication and testing for most major oil & gas companies, chemical plants, pulp mills, and the U.S. Department of Defense.  We have two fabrication facilities (USA & Canada) as well as a  Europe/Middle East sales office in the U.K.</p>
                    </div>

                    <div
                        className="embed-responsive embed-responsive-21by9 relative w-full overflow-hidden"
                        style={{ paddingTop: '42.857143%' }}>

                        <iframe className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full" src="https://www.youtube.com/embed/5SomOy90aL8" title="How to Build A Nuclear Submarine Full BBC Documentary Eng Sub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Video;