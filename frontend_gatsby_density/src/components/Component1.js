import React from 'react';
import logo1 from "../images/Group.png";
import logo2 from "../images/Group-1.png";
import styled from "styled-components";

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
`;

const Linksdiv = styled.div`
display : flex;
flex-direction : row;
align-items:center;
justify-content: space around;
column-gap:10px;
`

const Button = styled.div`
background: linear-gradient(85.85deg, #D4F938 23.09%, #32D875 108.69%);
padding: 10px;
font-size:1rem;
border-radius:8px;
color:black;
font-weight:500;`

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
    </div>
  )
}

export default Component1
