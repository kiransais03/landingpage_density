import React from "react";
import deltaexchange from "../images/deltaexchange.png";
import coindcx from "../images/coindcx.png";
import density from "../images/density.png";
import styled from "styled-components";
import backg from "../images/backg.png";
import Texture from "../images/Texture.png";
import {Heading,Tophead,Heading3} from "../Styledcomponents";


const Trademorediv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:3rem;
`;



const Cards = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
`;

const Carddiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
row-gap:35px;
padding:3rem 6rem;
background-image:url(${backg});
background-color:rgba(25, 25, 29, 1);
img {
    width:140px;
    height:35px;
}

`;


const Para = styled.p`
color:rgba(255, 255, 255, 0.4);
`;

const Innerdiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Trademorecomp = ()=>{

    return (
    <Trademorediv>
      <Tophead>
        <Heading>
            Trade More.<span style={{color: "rgba(212, 249, 56, 2)"}}>Pay Less.</span>
        </Heading>
        <p style={{color: "rgba(231, 231, 234, 1)"}}>Our low Fees Supercharge.Your Profits</p>
      </Tophead>
      <Cards>
        <Carddiv>
            <img src={coindcx} alt="coindcx"/>
            <Innerdiv>
                <Heading3>0.025</Heading3>
                <Para>Maker Fees</Para>
            </Innerdiv>
            <Innerdiv>
                <Heading3>0.007</Heading3>
                <Para>Taker Fees</Para>
            </Innerdiv>
        </Carddiv>
        <Carddiv style={{background: "linear-gradient(179.64deg, #DAF760 -1.86%, rgba(50, 216, 117, 0.96) 146.77%)",boxShadow: "0px 0px 40px 0px rgba(226, 255, 111, 0.8)"}}>
            <img src={density} alt="density"/>
            <Innerdiv>
                <Heading3 style={{color:"black"}}>0.02</Heading3>
                <Para style={{color:"black"}}>Maker Fees</Para>
            </Innerdiv>
            <Innerdiv>
                <Heading3 style={{color:"black"}}>0.04</Heading3>
                <Para style={{color:"black"}}>Taker Fees</Para>
            </Innerdiv>
        </Carddiv>
        <Carddiv>
            <img src={deltaexchange} alt="deltaexhange"/>
            <Innerdiv>
                <Heading3>0.02</Heading3>
                <Para>Maker Fees</Para>
            </Innerdiv>
            <Innerdiv>
                <Heading3>0.05</Heading3>
                <Para>Taker Fees</Para>
            </Innerdiv>
        </Carddiv>
      </Cards>
    </Trademorediv>)
}

export default Trademorecomp;