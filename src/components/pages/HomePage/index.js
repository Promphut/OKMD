import React from 'react'
import styled from 'styled-components'

import {Map,DownButton,About,HomeMain,HomeMain2} from 'components'

const Wrapper = styled.div`
`
const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
  top:-28px;
  @media (max-width:480px){
    display:none;
  }
`
const Main = styled.div`
  display:flex;
  justify-content:center;
  padding:46px 0 100px 0;
  @media (max-width:480px){
    display:block;
    padding:10px 0 40px 0;
  }
`
const Flex = styled.div`
  flex:1;
`
const Line = styled.div`
  flex:0 4px;
  width:4px;
  height:550px;
  background-color:#FEF5EE;
  margin:30px 30px 0 30px;
  @media (max-width:480px){
    margin:12px auto 12px auto;
    width:90%;
    height:3px;
  }
`
const HomePage = () => {
  return (
    <Wrapper>
      <Map src={'/map.png'}/>
      <ButtonContainer>
        <DownButton/>
      </ButtonContainer>
      <About/>
      <Main className='container'>
        <Flex>
          <HomeMain2/>
        </Flex>
        <Line></Line>
        <Flex>
          <HomeMain/>
        </Flex>
      </Main>
    </Wrapper>
  )
}

export default HomePage
