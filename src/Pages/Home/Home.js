import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import CTA from './CTA';
import ListOfIndustries from './ListOfIndustries';
import Parts from './Parts';
import Reviews from './Reviews';
import StayConnected from './StayConnected';
import { Team } from './Team';
import Testimonial from './Testimonial';
import Video from './Video';
import News from './News';
import Gallery from './Gallery';
import Timeline from './Timeline';
import Slider from './Slider';

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
            <News />
            <Timeline />
            {/* <Gallery /> */}
            {/* <Slider /> */}
            <CTA />
            <StayConnected />
            <Footer />
        </div>
    );
};

export default Home;