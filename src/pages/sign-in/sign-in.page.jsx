import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';
import { SignInContainer, H1 } from './sign-in.page.styles.jsx'

const SignInPage = (props) => {
    return ( 
        <SignInContainer data-testid="sign-in-page">
            <SignUp />
            <SignIn/>
        </SignInContainer>
    )
}

export default SignInPage;

