import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Styles
import { SignInContainer, 
    H2, StyledLink, StyledSmallLink, FormExtras, 
    KeepLoggedInDiv, SocialMediaDiv, StyledSpan } from './sign-in.styles.jsx'

// Icons
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg'
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as GoogleIcon } from '../../assets/icons/google.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icons/linkedin.svg';

// Components
import Button from '../button/button.component.jsx';
import Input from '../input/input.component.jsx';
import SocialMediaButton from '../social-media-button/social-media-button.component.jsx';


const inputSource = [
    {
        id: 1,
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        role: 'email',
        icon: <EmailIcon/>,
    },
    {
        id: 2,
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        role: 'password',
        icon: <LockIcon/>
    }
]


const SignIn = (props) => {
    const {pathname} = useLocation();
    const [inputs, setInputs] = useState(null);
    const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
    
    useEffect(()=>{
        const state = inputSource.reduce((initialState, input) => (initialState[input.name] = '', initialState), {});
        setInputs(state);
    }, [])

    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({ ...inputs, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const { email, password } = inputs;

        // Submit
    }

    return inputs && ( 
        <SignInContainer data-testid="sign-in" pathname={pathname}>
            <H2>Login</H2>
            <form onSubmit={onSubmit}>
                {inputSource.map( input => 
                        <Input key={input.id} value={inputs[input.name]} {...input} onChange={onChange}/> )}
                <FormExtras>
                    <KeepLoggedInDiv>
                        <input type="checkbox" checked={keepMeLoggedIn} onChange={()=>setKeepMeLoggedIn(!keepMeLoggedIn)}/>
                        <span>Keep me logged in</span>
                    </KeepLoggedInDiv>
                    <StyledSmallLink to="/forgot-password">Forgot password?</StyledSmallLink>
                </FormExtras>
                <Button text='Sign In' type='submit'/>
            </form>
            <StyledSpan>or connect with</StyledSpan>
            <SocialMediaDiv>
                <SocialMediaButton width='3rem' height='3rem' svgIcon={<FacebookIcon/>}  onClick={()=>alert('signed in with Facebook')}/>
                <SocialMediaButton width='3rem' height='3rem' svgIcon={<InstagramIcon/>}  onClick={()=>alert('signed in with Instagram')}/>
                <SocialMediaButton width='3rem' height='3rem' svgIcon={<GoogleIcon/>}  onClick={()=>alert('signed in with Google')}/>
                <SocialMediaButton width='3rem' height='3rem' svgIcon={<LinkedinIcon/>}  onClick={()=>alert('signed in with Linkedin')}/>
            </SocialMediaDiv>

            {/* Optional text on MV */}
            <p>
                Don't have an account? <StyledLink to="/sign-in">Sign up</StyledLink>
            </p>
        </SignInContainer>
    )
}

export default SignIn;

