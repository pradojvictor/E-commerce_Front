/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components"
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`

`;
const WhiteBox = styled(Link)`
    text-transform: capitalize;
    background-color: #fff;
    padding: 1.25rem;
    height: 7.5rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.625rem;
    img{
        max-width: 100%;
        max-height: 5rem;
    }
`;
const Title = styled(Link)`
    font-weight: normal;
    font-size: .9rem;
    margin: 0;
    color: inherit;
    text-decoration: none;
`;
const ProductInfoBox = styled.div`
    margin-top: 0.313rem;
`;
const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.125rem;
`;
const Price = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`;

export default function ProductBox({ _id, title, description, price, images }) {
    const { addProduct } = useContext(CartContext);
    const url = '/product/' + _id;
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images[0]} alt="" />
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <Button
                        onClick={() => addProduct(_id)}
                        primary={1}
                        outline={1}>Add to cart</Button>
                </PriceRow>
            </ProductInfoBox>

        </ProductWrapper>
    )
}
//8:22:18