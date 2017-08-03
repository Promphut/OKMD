import React from 'react'
import styled from 'styled-components'

import {Footer,Topbar} from 'components'

const Wrapper = styled.div`
`

const Template = ({children}) => {
  return (
    <Wrapper>
      <Topbar/>
      {children}
      <Footer/>
    </Wrapper>
  )
}

export default Template
