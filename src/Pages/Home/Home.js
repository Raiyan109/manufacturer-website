import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ListOfIndustries from './ListOfIndustries';
import Parts from './Parts';
import Reviews from './Reviews';
import StayConnected from './StayConnected';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <ListOfIndustries />
            <BusinessSummary />
            <Reviews />
            <Testimonial />
            <StayConnected />
            <Footer />
        </div>
    );
};

export default Home;