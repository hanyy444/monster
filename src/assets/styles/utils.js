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

export const margin = {
    bottom: { small: 'margin-bottom: 2rem;', medium: 'margin-bottom: 4rem;', large: 'margin-bottom: 8rem;' },
    left: { small: 'margin-left: 2rem;', medium: 'margin-left: 4rem;', large: 'margin-left: 8rem;' },
    right: { small: 'margin-right: 2rem;', medium: 'margin-right: 4rem;', large: 'margin-right: 8rem;' },
    top: { small: 'margin-top: 2rem;', medium: 'margin-top: 4rem;', large: 'margin-top: 8rem;' }
}

// createStyle('margin');

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

const horizontalGutter = '2rem';

const clearFix = css`
    &::after{
        content:"";
        display: table;
        clear: both;
    }
`

export const Row = styled.div`
    max-width: 114rem;
    /* ${clearFix} */
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    [class^="col-"]{
        &:not(:last-child){
            margin-left: 2rem;
        }
    }
    `
export const ColumnOneOfTwo = styled.div`
    width: calc((100% - ${horizontalGutter}) /2);
`
export const ColumnOneOfThree = styled.div`
    width: calc((100% - ${horizontalGutter}) /3);
`
