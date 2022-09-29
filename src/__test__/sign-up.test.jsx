import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import SignUp from "../components/sign-up/sign-up.component";

describe('Test sign-in component', () => {
    expect.assertions(1);
    test('test without crashing', () => {
        render(<BrowserRouter>
            <Routes>
                <Route path="*" element={<SignUp />}></Route>
            </Routes>
        </BrowserRouter>)
        expect(screen.getByTestId('sign-up')).toMatchSnapshot();        
    })

})