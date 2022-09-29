import React from "react";
import { render, screen } from '@testing-library/react';

import Input from "../components/input/input.component";

describe('Test Input component', () => {
    expect.assertions(2);
    test('renders without crashing', () => {

        const mockInput = {
            id: 1,
            type: 'email',
            placeholder: 'Email',
            name: 'email',
            role: 'email'
        }

        render(<Input {...mockInput} />)

        // Test for existance
        expect(screen.getByRole(mockInput.role)).toBeInTheDocument();
        expect(screen.getByRole(mockInput.role)).toMatchSnapshot();
    })
})
