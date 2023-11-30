import React from "react";
import Herocomp from "../components/Herocomp";
import styled from "styled-components";
import "./index-styles.css"
import Statscomp from "../components/Statscomp";
import Imageslides from "../components/Imageslides";
import Trademorecomp from "../components/Trademorecomp";
import Exploremarketscomp from "../components/Exploremarketscomp";


const IndexPage = () => {

  return (
    <div>
      <Herocomp/>
      <Statscomp/>
      <Imageslides/>
      <Trademorecomp/>
      <Exploremarketscomp/>
     <h3 style={{textAlign:"center"}}>Apologies,Website will be updated.Working on it.</h3> 
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
