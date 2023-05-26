import { styled } from "styled-components"

const StyledDiv = styled.div`
    max-width:50rem;
    margin: 0 auto;
    padding: 0 1.25rem;
`;

export default function Center({children}) {
    return (
        <StyledDiv>{children}</StyledDiv>
    )
}