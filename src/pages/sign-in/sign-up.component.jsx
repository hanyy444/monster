import React from 'react';
import { useLocation } from 'react-router-dom';

// Styles
import { Container, Link } from './sign-in.page.styles'
import { HeadingQuaternary, Paragraph } from 'assets/styles/typography.js';

// Icons
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

// Components
import Input from 'components/input/input.component.jsx';
import FormButton from 'components/button/form-button.component.jsx';

const inputSource = [
    {
        id: 1,
        type: 'text',
        placeholder: 'Full Name',
        name: 'fullName',
        role: 'fullName',
        icon: FaUser
    },
    {
        id: 2,
        type: 'email',
        placeholder: 'Email',
        name: 'email',
        role: 'email',
        icon: FaEnvelope
    },
    {
        id: 3,
        type: 'password',
        placeholder: 'Password',
        name: 'password',
        role: 'password',
        icon: FaLock
    },
    {
        id: 4,
        type: 'password',
        placeholder: 'Confirm Password',
        name: 'confirmPassword',
        role: 'confirmPassword',
        icon: FaLock
    }
]

const initialState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = (props) => {

    const { pathname } = useLocation();

    const [data, setData] = React.useState(initialState);

    const onChange = (event) => {
        const { value, name } = event.target;
        setData({ ...data, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const { fullName, email, password, confirmPassword } = data;

        // validate
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return;
        }

        // Submit
    }

    return ( 
        <Container data-testid="sign-up" className='sign-up' pathname={pathname}>
            <HeadingQuaternary>Create Account</HeadingQuaternary>
            <form onSubmit={onSubmit}>
                {inputSource.map( input => 
                    <Input key={input.id} 
                        value={data[input.name]} 
                        Icon={input.icon} 
                        onChange={onChange}
                        {...input}/> )}
                <FormButton text='Sign Up'/>
            </form>
            {/* Optional text on MV */} 
            <Paragraph>
                Already have an account? <Link to="/sign-in">Sign in</Link>
            </Paragraph>
        </Container>
    )
}

export default SignUp;

