import React from 'react';
import Banner from '../Banner/Banner';
import HomePageWrittenPart from '../HomePageWritten/HomePageWrittenPart';
import HomeCard from '../HomeCard/HomeCard';
import NewsletterSection from '../NewsletterSection/NewsletterSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomePageWrittenPart></HomePageWrittenPart>
            <HomeCard></HomeCard>
            <NewsletterSection></NewsletterSection>
            
        </div>
    );
};

export default Home;