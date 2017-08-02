import React from 'react'
import styled from 'styled-components'

import {Map,Footer,DownButton,Topbar,About,HomeMain} from 'components'

const Wrapper = styled.div`
`
const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
  top:-28px;
`
const Main = styled.div`
  display:flex;
  justify-content:center;
  padding:46px 0 100px 0;
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
`
const HomePage = () => {
  return (
    <Wrapper>
      <Topbar/>
      <Map/>
      <ButtonContainer>
        <DownButton/>
      </ButtonContainer>
      <About/>
      <Main className='container'>
        <Flex>
          <HomeMain/>
        </Flex>
        <Line></Line>
        <Flex>
          <HomeMain/>
        </Flex>
      </Main>
      <Footer/>
    </Wrapper>
  )
}

export default HomePage
