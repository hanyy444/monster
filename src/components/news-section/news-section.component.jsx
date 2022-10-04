import React from 'react';
import { HeadingSecondary, HeadingTertiary, Paragraph } from '../../assets/styles/typography.js';
import { ColumnOneOfTwo, Row } from '../../assets/styles/utils.js';
import Button from '../button/button.component.jsx';
import ImageComposition from '../image-composition/image-composition.component.jsx';
import { NewsSectionContainer } from './news-section.styles.jsx'



const NewsSection = (props) => {
    return ( 
        <NewsSectionContainer>
            <HeadingSecondary>Awesome rides for adventerous people</HeadingSecondary>
            <Row>
                <ColumnOneOfTwo>
                    <HeadingTertiary>Join. Race. Win.</HeadingTertiary>
                    <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe sit delectus repellendus tempora quas adipisci nesciunt quisquam accusantium optio consequuntur?</Paragraph>
                    
                    <HeadingTertiary>Enjoy night rides</HeadingTertiary>
                    <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe sit delectus repellendus tempora quas adipisci nesciunt quisquam accusantium optio consequuntur?</Paragraph>

                    <Button text={"Learn more"}/>
                </ColumnOneOfTwo>
                <ColumnOneOfTwo>
                    <ImageComposition/>
                </ColumnOneOfTwo>
            </Row>
        </NewsSectionContainer>
    )
}

export default NewsSection;

