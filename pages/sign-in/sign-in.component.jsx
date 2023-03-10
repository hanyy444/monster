import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Styles
import { Container, Link, FormExtras, 
    KeepLoggedInDiv, SocialMediaDiv } from './sign-in.page.styles.jsx'
import { HeadingQuaternary, Paragraph } from 'assets/styles/typography'

// Icons
import {  FaEnvelope, FaLock, FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Components
import FormButton from 'components/button/form-button.component';
import Input from 'components/input/input.component.jsx';
import SocialMediaButton from 'components/button/social-media-button.component.jsx';


const inputSource = [
    {
        id: 1,
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        icon: FaEnvelope
    },
    {
        id: 2,
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        icon: FaLock
    }
]

const initialState = {
    email: '',
    password: ''
}


const SignIn = (props) => {
    const {pathname} = useLocation();
    const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
    
    const [data, setData] = useState(initialState);
    const onChange = (event) => {
        const { value, name } = event.target;
        setData({ ...data, [name]: value})
    }
    const onSubmit = (event) => {
        event.preventDefault();

        const { email, password } = data;

        // Submit
    }

    return ( 
        <Container className="sign-in" data-testid="sign-in" pathname={pathname}>
            <HeadingQuaternary>Login</HeadingQuaternary>
            <form onSubmit={onSubmit} >
                {inputSource.map( input => 
                    <Input key={input.id} 
                    value={data[input.name]} 
                    {...input} 
                    Icon={input.icon} 
                    onChange={onChange}/> )
                }
                <FormExtras>
                    <KeepLoggedInDiv>
                        <input type="checkbox" checked={keepMeLoggedIn} onChange={()=>setKeepMeLoggedIn(!keepMeLoggedIn)}/>
                        <span>Keep me logged in</span>
                    </KeepLoggedInDiv>
                    <Link>Forgot password?</Link>
                </FormExtras>
                <FormButton text='Sign In' type='submit'/>
            </form>
            <Paragraph>or connect with</Paragraph>
            <SocialMediaDiv>
                <SocialMediaButton svgIcon={<FaFacebook/>}  onClick={()=>alert('signed in with Facebook')}/>
                <SocialMediaButton svgIcon={<FaInstagram/>}  onClick={()=>alert('signed in with Instagram')}/>
                <SocialMediaButton svgIcon={<FaGoogle/>}  onClick={()=>alert('signed in with Google')}/>
                <SocialMediaButton svgIcon={<FaLinkedin/>}  onClick={()=>alert('signed in with Linkedin')}/>
            </SocialMediaDiv>

            {/* Optional text on MV */}
            <Paragraph>
                Don't have an account? <Link to="/sign-in">Sign up</Link>
            </Paragraph>
        </Container>
    )
}

export default SignIn;

