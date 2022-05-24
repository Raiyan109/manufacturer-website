import React from 'react';
import bg from '../../assets/images/banner-bg.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ background: `url(${bg})` }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Welcome</h1>
                    <p class="mb-5">Explore Our Submarine Parts</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;