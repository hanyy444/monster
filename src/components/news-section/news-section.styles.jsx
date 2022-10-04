import styled from 'styled-components';
import { linearGradientText } from '../../assets/styles/mixins';
import {colors} from '../../assets/styles/variables'


const NewsSectionContainer = styled.section`
    height: 100vh;
    background-color: ${colors.whiteColor};
    padding: 7rem;

    button{
        border: none;
        border-bottom: 1px solid ${colors.tertiaryColor};
        background-color: transparent;
        border-radius: 0;
        float: left;
        padding: 1rem;

        &:hover{
            color: ${colors.whiteColor};
            border-radius: .2rem;
            background-color: ${colors.tertiaryColor};
            box-shadow: 0 2rem 4rem rgba(0,0,0,.15);
        }
    }
    
`

export {
    NewsSectionContainer
}