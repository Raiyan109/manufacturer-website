import React from 'react';
import './Timeline.css'

const Timeline = () => {
    return (
        <div className='my-20'>
            <h1 className='text-5xl text-primary font-bold text-center'> Testimonials</h1>
            <h1 className='text-2xl text-center mt-2'>What our Customers say</h1>
            <div className='flex justify-center items-center'>
                <div class="timeline">
                    <div class="outer">
                        <div class="timeline-card">
                            <div class="timeline-info">
                                <h3 class="timeline-title">Title 1</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div class="timeline-card">
                            <div class="timeline-info">
                                <h3 class="timeline-title">Title 2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div class="timeline-card">
                            <div class="timeline-info">
                                <h3 class="timeline-title">Title 3</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div class="timeline-card">
                            <div class="timeline-info">
                                <h3 class="timeline-title">Title 4</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                        <div class="timeline-card">
                            <div class="timeline-info">
                                <h3 class="timeline-title">Title 5</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;