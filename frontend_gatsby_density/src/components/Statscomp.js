import React from 'react'
import styled from 'styled-components';

const Statsdiv = styled.div`
display:flex;
justify-content:center;
margin:3rem;
`;

const Numbersdiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border: 1px solid rgba(235, 255, 37, 0.2);
padding:1.5rem 2rem;
border-radius:3px;
`;

const Num = styled.div`
color:rgba(235, 255, 37, 1);
font-size:25px;
font-weight:600;
`;

const Text = styled.div`
color: rgba(169, 169, 169, 1);
font-size:16px;
`


function Statscomp() {
  return (
    <Statsdiv>
      <Numbersdiv>
        <Num>00%</Num>
        <Text>Conversion Fee</Text>
      </Numbersdiv>
      <Numbersdiv>
        <Num>500 Mn+</Num>
        <Text>Lifetime Value Traded</Text>
      </Numbersdiv>
      <Numbersdiv>
        <Num>250+</Num>
        <Text>Total Traded Pairs</Text>
      </Numbersdiv>
      <Numbersdiv>
        <Num>15,000+</Num>
        <Text>Traders</Text>
      </Numbersdiv>
    </Statsdiv>
  )
}

export default Statscomp;
