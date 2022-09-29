import React from "react";
import { render, screen } from '@testing-library/react';

import Button from "../components/button/button.component";

describe('Test button component', () => {
    expect.assertions(2);
    test('renders without crashing', () => {
        render(<Button text='Sign In'/>)
        expect(screen.getByTestId("button")).toHaveTextContent('Sign In')
        expect(screen.getByTestId("button")).toMatchSnapshot()
    })
})
