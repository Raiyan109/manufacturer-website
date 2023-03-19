import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ListOfIndustries from './ListOfIndustries';
import Parts from './Parts';
import Reviews from './Reviews';
import StayConnected from './StayConnected';
import { Team } from './Team';
import Testimonial from './Testimonial';
import Video from './Video';

const Home = () => {
    return (
        <div>
            <Banner />
            <Parts />
            <ListOfIndustries />
            <Video />
            <BusinessSummary />
            {/* <Reviews /> */}
            <Team />
            <Testimonial />
            <StayConnected />
            <Footer />
        </div>
    );
};

export default Home;