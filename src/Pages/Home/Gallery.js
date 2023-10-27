import React from 'react';
import './Gallery.css'


const Gallery = () => {
    return (
        <div className='my-20'>


            <h1 className='text-5xl text-primary font-bold text-center'> Our Facilities</h1>
            <h1 className='text-2xl text-center mt-2'>Worldwide Facilities</h1>
            <div className='flex justify-center items-center p-10'>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>


                 

                </div> */}
                <div className="gallery-container">

                    {/* <!-- BUTTONS (input/labels) --> */}
                    <input type="radio" name="slider" id="slide-1-trigger" className="trigger" checked />
                    <label className="gallery-btn" htmlFor="slide-1-trigger"></label>
                    <input type="radio" name="slider" id="slide-2-trigger" className="trigger" />
                    <label className="gallery-btn" htmlFor="slide-2-trigger"></label>
                    <input type="radio" name="slider" id="slide-3-trigger" className="trigger" />
                    <label className="gallery-btn" htmlFor="slide-3-trigger"></label>
                    <input type="radio" name="slider" id="slide-4-trigger" className="trigger" />
                    <label className="gallery-btn" htmlFor="slide-4-trigger"></label>

                    {/* <!-- SLIDES --> */}
                    <div className="slide-wrapper">
                        <div id="slide-role">
                            <div className="slide slide-1"></div>
                            <div className="slide slide-2"></div>
                            <div className="slide slide-3"></div>
                            <div className="slide slide-4"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;