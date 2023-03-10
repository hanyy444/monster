import React from 'react';
import { ImageCompositionContainer, ImageOne, ImageTwo, ImageThree } from './image-composition.styles.jsx'

import ImageCompositionOne from 'assets/imgs/image-composition-1.jpg';
import ImageCompositionTwo from 'assets/imgs/image-composition-2.jpg';
import ImageCompositionThree from 'assets/imgs/image-composition-3.jpg';

const ImageComposition = (props) => {
    return ( 
        <ImageCompositionContainer id="image-composition" data-testid="image-composition">
            <ImageOne src={ImageCompositionOne} alt="Photo 1"/>
            <ImageTwo src={ImageCompositionTwo} alt="Photo 2"/>
            <ImageThree src={ImageCompositionThree} alt="Photo 3"/>
        </ImageCompositionContainer>
    )
}

export default ImageComposition;

