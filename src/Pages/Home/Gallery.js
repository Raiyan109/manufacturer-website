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
                <div class="gallery-container">

                    {/* <!-- BUTTONS (input/labels) --> */}
                    <input type="radio" name="slider" id="slide-1-trigger" class="trigger" checked />
                    <label class="gallery-btn" for="slide-1-trigger"></label>
                    <input type="radio" name="slider" id="slide-2-trigger" class="trigger" />
                    <label class="gallery-btn" for="slide-2-trigger"></label>
                    <input type="radio" name="slider" id="slide-3-trigger" class="trigger" />
                    <label class="gallery-btn" for="slide-3-trigger"></label>
                    <input type="radio" name="slider" id="slide-4-trigger" class="trigger" />
                    <label class="gallery-btn" for="slide-4-trigger"></label>

                    {/* <!-- SLIDES --> */}
                    <div class="slide-wrapper">
                        <div id="slide-role">
                            <div class="slide slide-1"></div>
                            <div class="slide slide-2"></div>
                            <div class="slide slide-3"></div>
                            <div class="slide slide-4"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Gallery;