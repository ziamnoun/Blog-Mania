import React from 'react';
import Banner from '../Banner/Banner';
import HomePageWrittenPart from '../HomePageWritten/HomePageWrittenPart';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageWrittenPart></HomePageWrittenPart>
            <HomeCard></HomeCard>
            
        </div>
    );
};

export default Home;