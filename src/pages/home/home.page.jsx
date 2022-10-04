import React from 'react';
import Header from '../../components/header/header.component';
import NewsSection from '../../components/news-section/news-section.component';
import {HomePageContainer, Main} from './home.styles.js';

const HomePage = (props) => {
    return ( 
        <HomePageContainer> 
            <Header /> 
            <Main>
                <NewsSection />
            </Main>
        </HomePageContainer>
    )
}

export default HomePage;

