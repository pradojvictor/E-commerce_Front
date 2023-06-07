/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 3.125rem 0;
`;
const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
    text-transform: capitalize;
`;
const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 2.5rem;
    img{
        max-width: 100%;
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap: 0.625rem;
    margin-top: 1.563rem;
`;

export default function Featured({ product }) {
    const { addProduct } = useContext(CartContext)
    function addFeaturedCart() {
        addProduct(product._id);
    }
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/products/' + product._id} outline={1} white={1}>Read more</ButtonLink>
                                <Button wwhite={1} onClick={addFeaturedCart}>
                                    <CartIcon />
                                    Add to cart
                                </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://prado-next-ecommerce.s3.amazonaws.com/1685056910976.png" />
                    </Column>
                </ColumnsWrapper>

            </Center>
        </Bg>
    )
}