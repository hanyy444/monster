import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Styles
import { SignUpContainer, H2, StyledLink } from './sign-up.styles.jsx'


// Icons
import { ReactComponent as PersonIcon } from '../../assets/icons/person.svg'
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg'
import { ReactComponent as LockIcon } from '../../assets/icons/lock.svg'

// Components
import Input from '../input/input.component.jsx';
import Button from '../button/button.component.jsx';

const inputSource = [
    {
        id: 1,
        type: 'text',
        placeholder: 'Full Name',
        name: 'fullName',
        role: 'fullName',
        icon: <PersonIcon/>
    },
    {
        id: 2,
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        role: 'email',
        icon: <EmailIcon/>
    },
    {
        id: 3,
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        role: 'password',
        icon: <LockIcon/>
    },
    {
        id: 4,
        type: 'password',
        placeholder: 'Confirm Password',
        name: 'confirmPassword',
        role: 'confirmPassword',
        icon: <LockIcon/>
    }
]


const SignUp = (props) => {

    const { pathname } = useLocation();

    const [inputs, setInputs] = useState(null);
    
    useEffect(()=>{
        const state = inputSource.reduce((initialState, input) => (initialState[input.name] = '', initialState), {});
        setInputs(state);
    }, [inputSource])

    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({ ...inputs, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const { password, confirmPassword } = inputs;

        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return;
        }

        // Submit
    }

    return inputs && ( 
        <SignUpContainer data-testid="sign-up" pathname={pathname}>
            <H2>Create Account</H2>
            <form onSubmit={onSubmit}>
                {inputSource.map( input => 
                        <Input key={input.id} value={inputs[input.name]} {...input} onChange={onChange}/> )}
                <Button text='Sign Up'/>
            </form>
            {/* Optional text on MV */} 
            <p>
                Already have an account? <StyledLink to="/sign-in">Sign in</StyledLink>
            </p>
        </SignUpContainer>
    )
}

export default SignUp;

