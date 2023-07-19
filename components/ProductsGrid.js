/* eslint-disable react/jsx-key */
import { styled } from "styled-components";
import ProductBox from "./ProductBox";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.25rem;
`;

export default function ProductsGrid({products}) {
    return (
        <Grid>
             {products?.length > 0 && products.map(product => (
                    <ProductBox key={product._id} {...product} />
                ))}
        </Grid>
    );
}