import { styled } from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    th{
        text-align: left;
        text-transform: uppercase;
        color: #ccc;
        font-weight: 600;
        font-size: 0.7rem;
    }
    td{
        border-top: 0.063rem solid rgba(0,0,0,.1);
    }
`;

export default function Table(props) {
    return <StyledTable {...props} />
}