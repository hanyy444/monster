import React from 'react';
import { HeadingSecondary } from 'assets/styles/typography.js';
import { ProductsSectionContainer } from './products-section.styles.jsx';
import ImageCarousel from 'components/display/image-carousel/image-carousel.component';

const ProductsSection = (props) => {
    return ( 
        <ProductsSectionContainer id="products-section" data-testid="products-section">
            <HeadingSecondary>Monster Motorcycles</HeadingSecondary>
            <ImageCarousel />
        </ProductsSectionContainer>
    )
}

export default ProductsSection;

