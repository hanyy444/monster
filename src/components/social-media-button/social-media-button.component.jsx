import React from 'react';
import { SocialMediaButtonContainer } from './social-media-button.styles.jsx'

const SocialMediaButton = ({ svgIcon, ...buttonProps}) => {
    return ( 
        <SocialMediaButtonContainer data-testid="social-media-button" {...buttonProps}>
            {svgIcon}
        </SocialMediaButtonContainer>
    )
}

export default SocialMediaButton;

