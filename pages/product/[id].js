/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Products";
import { useContext } from "react";
import { styled } from "styled-components";

const ColWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 2.5rem;
    margin-top: 2.5rem;
`;
const PriceRow = styled.div`
    display:flex;
    gap: 1.25rem;
    align-items: center;
`;
const PriceSpan = styled.span`
    font-size: 1.4rem;
`;

export default function ProductPage({ product }) {
    const {addProduct} = useContext(CartContext)
    return (
        <>
            <Header />
            <Center>
                <ColWrapper>
                    <WhiteBox>
                        <ProductImages images={product.images} />
                    </WhiteBox>
                    <div>
                        <Title>{product.title}</Title>
                        <p>{product.description}</p>
                        <PriceRow>
                            <div>
                                <PriceSpan>
                                    ${product.price}
                                </PriceSpan>
                            </div>
                            <div>
                                <Button onClick={() => addProduct(product._id)} primary={1} outline={1} ><CartIcon />Add to cart</Button>
                            </div>
                        </PriceRow>
                    </div>
                </ColWrapper>
            </Center>
        </>
    )
}

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const product = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
        }
    }
}