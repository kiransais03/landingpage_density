import React from "react";
import Herocomp from "../components/Herocomp";
import styled from "styled-components";
import "./index-styles.css"
import Statscomp from "../components/Statscomp";


const IndexPage = () => {

  return (
    <div>
      <Herocomp/>
      <Statscomp/>
     <h3 style={{textAlign:"center"}}>Apologies,Website will be updated.Working on it.</h3> 
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
