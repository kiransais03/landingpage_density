import React from 'react';
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import styled from "styled-components";

const Imageslidesdiv = styled.div`
display:flex;
flex-direction:column;
row-gap:6rem;
justify-content:center;
align-items:center;
`;

const Image = styled.img`
width:20%;
`


function Imageslides() {
  return (
    <Imageslidesdiv>
        <Image src={slide1} alt='slide1'/>
        <Image src={slide2} alt='slide2'/>
        <Image src={slide3} alt='slide3'/>
    </Imageslidesdiv>
  )
}

export default Imageslides
