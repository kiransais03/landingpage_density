import React from 'react';
import {Heading,Tophead,Button} from "../Styledcomponents";
import styled from "styled-components";
import exploremarketimg from "../images/exploremarketimg.png"

const Exploremarketdiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:4rem;
row-gap:15px;
`;


function Exploremarketscomp() {
  return (
    <Exploremarketdiv>
    <Tophead>
    <Heading>
        Explore the Markets like it is your <span style={{color: "rgba(212, 249, 56, 2)"}}>Playground.</span>
    </Heading>
    <p style={{color: "rgba(231, 231, 234, 1)"}}>Search for your favourite coins and stay ahead of the market</p>
  </Tophead>
  <img src={exploremarketimg} alt='exploremarket'/>
  <Button style={{width:"10%"}}>
    EXPLORE MARKETS
  </Button>
  </Exploremarketdiv>
  )
}

export default Exploremarketscomp
