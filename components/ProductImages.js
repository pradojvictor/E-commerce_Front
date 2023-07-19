/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { styled } from "styled-components";

const ImageProduct = styled.img`
    max-width: 100%;
`;
const ImageButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.625rem;
    margin-top: 0.625rem;
`;
const ImageButton = styled.div`
    border: 0.063rem solid #aaa;
    border-radius: 0.313rem;
    cursor: pointer;
    overflow: hidden;
    height: 3rem;
    ${props => props.active ? `border-color: #EEEEEE 1px;` : `border-color: transparent; opacity: .7`}
   
`;

export default function ProductImages({ images }) {
    const [activeImage, setActiveImage] = useState(images?.[0]);
    return (
        <>
            <ImageProduct src={activeImage} />
            <ImageButtons>
                {images.map(image => (
                    <ImageButton key={image} active={image === activeImage} onClick={() => setActiveImage(image)}>
                        <ImageProduct src={image} />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    )
}