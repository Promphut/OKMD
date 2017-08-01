import React from 'react'
import styled from 'styled-components'

import {Map,Footer,DownButton} from 'components'

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
      <Map/>
      <ButtonContainer>
        <DownButton/>
      </ButtonContainer>
      <Footer/>
    </Wrapper>
  )
}

export default HomePage
