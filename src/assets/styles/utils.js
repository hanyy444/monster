import styled, { css } from 'styled-components';

export const textCenter = css`text-align: center;`;
export const textLeft = css`text-align: left;`;

const createStyle = (property) => {

    const values = ['2rem', '4rem', '8rem'];

    const sizes = ['small', 'medium', 'large'];

    const directions = ['top', 'right', 'bottom', 'left'];

    const style = directions.reduce((prevDirectionState, direction) => {
        const style_sizes = sizes.reduce((prevSizeState, size, index) => {
            return {
                ...prevSizeState,
                [size]: `${property}-${direction}: ${values[index]};`
            }
        }, {});

        return {
            ...prevDirectionState,
            [direction]: style_sizes
        }
    }, {})

    return style;
}

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    @media screen and (max-width: 800px){
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`
export const ColumnOneOfTwo = styled.div`
    flex: .5;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 2rem;
    @media screen and (max-width: 800px){
        width: 100%;
    }
`

export const ColumnOneOfThree = styled.div`
    flex: .5;
`
