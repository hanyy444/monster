import React from "react";
import { render, screen } from '@testing-library/react';

import SocialMediaButton from "../components/social-media-button/social-media-button.component";

describe('Test social media button', () => {
    expect.assertions(2);
    test('renders without crashing', () => {
        render(<SocialMediaButton />)
        expect(screen.getByTestId('social-media-button')).toBeInTheDocument();
        expect(screen.getByTestId('social-media-button')).toMatchSnapshot();
    })
})