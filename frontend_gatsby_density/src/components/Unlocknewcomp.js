import React from 'react';
import styled from "styled-components";
import { Heading,Tophead } from '../Styledcomponents';
import graph1 from "../images/graph1.png";
import graph2 from "../images/graph2.png";

const Unlocknewcompdiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:60%;
margin:0 auto;
row-gap:3rem;
`;

const Tiles = styled.div`
display:flex;
`;

const Tiletext = styled.div`
border-right:0.5px solid whitesmoke;
font-size:2rem;
font-weight:700;
padding:1rem;
text-align:center;
`;

const Images = styled.div`
display:flex;
`


function Unlocknewcomp() {
  return (
    <Unlocknewcompdiv>
      <Tophead>
        <Heading>
            Unlock <span style={{color: "rgba(212, 249, 56, 2)"}}>New Frontiers.</span>
        </Heading>
        <p style={{color: "rgba(231, 231, 234, 1)"}}>Are you a stock trader looking for new oppurtunities to make money?We got you covered!</p>
      </Tophead>
      <Tiles>
        <Tiletext>Same Strategies</Tiletext>
        <Tiletext>Same Indicators</Tiletext>
        <Tiletext>Better Leverage</Tiletext>
        <Tiletext style={{border:"none"}}>24x7 Trading</Tiletext>
      </Tiles>
      <Images>
        <div>
          BTCUSDT
          <img src={graph1} alt='graph1'/>
        </div>
        <div style={{position:"relative"}}>
          <img src={graph2} alt='graph2'/>
           <span style={{position:'absolute',right:"0",bottom:"0"}}>NIFTY</span>
        </div>
      </Images>
    </Unlocknewcompdiv>
  )
}

export default Unlocknewcomp
