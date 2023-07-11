import { styled } from "styled-components"

const StyledInput = styled.input`
    width: 100%;
    padding: 0.313rem;
    margin-bottom: 0.313rem;
    border: 0.063rem solid #ccc;
    border-radius: 0.313rem;
    box-sizing: border-box;
`;

export default function Input(props) {
    return <StyledInput {...props}/>
}