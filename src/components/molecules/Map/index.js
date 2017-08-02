import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  display:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-size:cover;
  background-position:center;
`

const Map = ({children}) => {
  return (
    <Img src={'/map.png'}>
      {children}
    </Img>      
  )
}

export default Map