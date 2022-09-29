import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import SignIn from "../components/sign-in/sign-in.component";

describe('Test sign-in component', () => {
    expect.assertions(1);
    test('test without crashing', () => {
        render(<BrowserRouter>
            <Routes>
                <Route path="*" element={<SignIn />}></Route>
            </Routes>
        </BrowserRouter>)
        expect(screen.getByTestId('sign-in')).toMatchSnapshot();        
    })

})