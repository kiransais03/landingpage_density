import React from 'react';
import logo1 from "../images/Group.png";
import logo2 from "../images/Group-1.png";
import styled from "styled-components";
import phoneimg1 from "../images/iPhone 14 Pro Space Black Mockup label.png";
import phoneimg2 from "../images/iPhone 14 Pro Space Black Mockup label (1).png";
import phoneimg3 from "../images/iPhone 14 Pro Space Black Mockup label (2).png";
import {Button,Heading} from "../Styledcomponents";

const Navbar = styled.div`
display :flex;
flex-direction : row;
justify-content: space-around;
color : white;
height:2rem;
font-size:12px;
margin:20px 0;
`

const Logodiv = styled.div`
 display:flex;
 align-items:center;
 column-gap:5px;
`;

const Linksdiv = styled.div`
display : flex;
flex-direction : row;
align-items:center;
justify-content: space around;
column-gap:10px;
`

const Pagedata = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`;



const Phoneimgesdiv = styled.div`
display : flex;
flex-direction : row;
align-items:center;
justify-content: center;
border-radius:30px;
img {
    border-radius:30px;
box-shadow: 13px 20px 400px 8px rgb(2,156,63);
-webkit-box-shadow: 13px 20px 400px 8px rgb(2,156,63);
-moz-box-shadow: 13px 20px 400px 8px rgb(2,156,63);
}
`;

const Component1 = () => {
  return (
    <div>
      <Navbar>
        <Logodiv>
          <img src={logo2} alt='densitylogo1'/>
          <img src={logo1} alt='densitylogo2'/>
        </Logodiv>
        <Linksdiv>
          <div>Career</div>
          <div>Blogs</div>
          <div>Leaderboard</div>
          <div>Fees</div>
          <Button>TRADE NOW</Button>
        </Linksdiv>
      </Navbar>
    <Pagedata>
        <Heading style={{width:"50%"}}>
            It's time to trade,the <span style={{color: "rgba(212, 249, 56, 2)"}}>future.</span>
        </Heading>
        <p style={{color:"rgba(231, 231, 234, 1)",}}>Trade BTC,ETH Future With 125xLeverage And Earn Rewards.</p>
        <Phoneimgesdiv>
            <img style={{position:"relative",left:"20px",zIndex:"-1"}} src={phoneimg1} alt='ph1'/>
            <img style={{boxShadow:"none"}} src={phoneimg2} alt='ph2'/>
            <img style={{position:"relative",right:"20px",zIndex:"-1"}} src={phoneimg3} alt='ph3'/>
        </Phoneimgesdiv>
    </Pagedata>

    </div>
  )
}

export default Component1
