import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';
import StayConnected from './StayConnected';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <BusinessSummary />
            <Reviews />
            <Testimonial />
            <StayConnected />
            <Footer />
        </div>
    );
};

export default Home;