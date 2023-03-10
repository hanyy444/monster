import React from 'react';

import Header from 'components/layout/header/header.component';
import NewsSection from 'components/layout/news-section/news-section.component';
import ProductsSection from 'components/layout/products-section/products-section.component';

import {HomePageContainer, Main} from './home.styles.js';
import Footer from 'components/layout/footer/footer.component.jsx';
import BookingSection from 'components/layout/booking-section/booking-section.component.jsx';

const HomePage = (props) => {
    return ( 
        <HomePageContainer> 
            <Header /> 
            <Main>
                <NewsSection />
                <ProductsSection/>
                <BookingSection/>
            </Main>
            <Footer/>
        </HomePageContainer>
    )
}

export default HomePage;

