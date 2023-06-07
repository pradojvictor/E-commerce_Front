/* eslint-disable react/jsx-key */
import { styled } from "styled-components"
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.25rem;
`;
const Title = styled.h2`
    font-size: 2rem;
    margin: 1.875rem 0 1.25rem;
    font-weight: normal;
`;

export default function NewProducts({ products }) {
    return (
        <Center>
            <Title>New Arrivals</Title>
            <ProductsGrid>
                {products?.length > 0 && products.map(product => (
                    <ProductBox {...product} />
                ))}
            </ProductsGrid>
        </Center>

    )
}