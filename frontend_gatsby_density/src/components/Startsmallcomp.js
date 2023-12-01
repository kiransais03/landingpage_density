import React from 'react';
import percent from "../images/25percent.png";
import profileimg from "../images/profileimg.png";
import styled from "styled-components";
import { Heading,Tophead,Heading3 } from '../Styledcomponents';
import backg from "../images/backg.png";

const Startsmallcompdiv = styled.div`
background-color:white;
color:black;
padding:10%;
`;

const Cardsdiv = styled.div`
display:flex;
justify-content:center;
column-gap:10px;
align-items:center;
`;

const Card = styled.div`
background-color:rgba(243, 243, 243, 1);
background-image:url(${backg});
backround-position:right top;
background-repeat:no-repeat;
`;

function Startsmallcomp() {
  return (
    <Startsmallcompdiv>
         <Tophead>
        <Heading>
            Start Small.Earn Big.
        </Heading>
        <p style={{color: "rgba(50, 51, 58, 1)",textAlign:"center"}}>Deposity a minimum of 1000 and get a Deposit bonus + dedicagted relationship manager</p>
      </Tophead>
      <Cardsdiv>
        <Card>
            <img src={percent} alt='left'/>
        <div>
            <Heading3>
              Dedicated Relationship Manager.
            </Heading3>
            <p style={{color: "rgba(102, 102, 115, 1)"}}>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
         </div>
        </Card>
        <Card>
            <img src={profileimg} alt='right'/>
        <div>
            <Heading3>
              Unlock <span style={{color: "rgba(102, 102, 115, 1)"}}>New Frontiers.</span>
            </Heading3>
            <p style={{color: "rgba(231, 231, 234, 1)"}}>Are you a stock trader looking for new oppurtunities to make money?We got you covered!</p>
         </div>
        </Card>
      </Cardsdiv>
    </Startsmallcompdiv>
  )
}

export default Startsmallcomp
