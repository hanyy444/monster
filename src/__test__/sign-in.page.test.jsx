import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import SignInPage from "../pages/sign-in/sign-in.page";

describe('Test sign-in page', () => {
    expect.assertions(3);
    test('test without crashing', () => {
        render(<BrowserRouter>
            <Routes>
                <Route path="*" element={<SignInPage />}></Route>
            </Routes>
        </BrowserRouter>)
        expect(screen.getByTestId('sign-in-page')).toMatchSnapshot();         
        expect(screen.getByTestId('sign-in-page')).toContainElement(screen.getByTestId('sign-up'));         
        expect(screen.getByTestId('sign-in-page')).toContainElement(screen.getByTestId('sign-in'));         
    })

})