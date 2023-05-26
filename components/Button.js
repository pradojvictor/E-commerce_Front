import { css, styled } from "styled-components"

export const ButtonStyle = css`
    border: 0;
    padding: 0.313rem 0.938rem;
    border-radius: 0.313rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    svg{
        height: 1rem;
        margin-right: 0.313rem;
    }
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 0.063rem solid #fff;
    `}
    ${props => props.primary && css`
        background-color: #5542f6;
        color: #fff;
        border: 0.063rem solid #5542f6;
    `}
    ${props => props.size === 'lg' && css`
        font-size: 1.2rem;
        padding: 0.625rem 1.25rem;
        svg{
            height: 1.25rem; 
        }
    `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
    return (
        <StyledButton {...rest}>{children}</StyledButton>
    )
}