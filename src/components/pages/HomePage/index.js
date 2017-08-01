import React from 'react'
import styled from 'styled-components'

import {Map,Footer,DownButton,Topbar,About} from 'components'

const Wrapper = styled.div`
`
const ButtonContainer = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
  top:-28px;
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
      <Footer/>
    </Wrapper>
  )
}

export default HomePage
