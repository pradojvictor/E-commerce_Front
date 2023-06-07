import { primary } from "@/lib/colors";
import { css, styled } from "styled-components"

export const ButtonStyle = css`
    border: 0;
    padding: 0.313rem 0.938rem;
    border-radius: 0.313rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-weight: 400;
    svg{
        height: 1rem;
        margin-right: 0.313rem;
    }
    ${props => props.block && css`
        display: block;
        width: 100%;
    `}
    ${props => props.white && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.white && props.outline && css`
        background-color: transparent;
        border: 0.063rem solid #fff;
        color: #fff;
    `}
    ${props => props.black && !props.outline && css`
        background-color: #000;
        color: #fff;
    `}
    ${props => props.black && props.outline && css`
        background-color: transparent;
        border: 0.063rem solid #000;
        color: #000;
    `}
    ${props => props.primary && !props.outline && css`
        background-color: ${primary};
        border: 0.063rem solid ${primary};
        color: #fff;
    `}
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        border: 0.063rem solid ${primary};
        color: ${primary};
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