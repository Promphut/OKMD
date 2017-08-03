import React from 'react'
import styled from 'styled-components'

const Con = styled.div`
  background:#FEF5EE;
  padding:80px 0 80px 0;
  position:relative;
  top:-56px;
  @media (max-width:480px){
    position:static;
    padding:10px 0 10px 0;
  }
`
const Head = styled.h3`
  font-family:'kanit';
  font-size:32px;
  font-weight:medium;
  text-align:center;
  color:#000;
  @media (max-width:480px){
    font-size:14px;
    margin:5px 0 5px 0;
  }
`
const Line = styled.div`
  width:48px;
  height:4px;
  margin:20px auto 30px auto;
  background:#F2DACE;
  @media (max-width:480px){
    width:24px;
    height:3px;
    margin:0px auto 10px auto;
  }
`
const Detail = styled.p`
  color:#5D5C61;
  font-family:'kanit';
  font-size:22px;
  text-align:center;
  @media (max-width:480px){
    font-size:11px;
  }
`

const About = ({children,style}) => {
  return (
    <Con>
      <div className='container'>
        <Head>เกี่ยวกับเรา</Head>
        <Line/>
        <Detail>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        </Detail>
      </div>
    </Con>    
  )
}

export default About