import SignIn from './sign-in.component.jsx';
import SignUp from './sign-up.component.jsx';
import {SignInPageContainer} from './sign-in.page.styles.jsx'

const SignInPage = (props) => {
    return ( 
        <SignInPageContainer data-testid="sign-in-page">
            <SignUp />
            <SignIn/>
        </SignInPageContainer>
    )
}

export default SignInPage;

