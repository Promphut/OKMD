import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  border:1px solid #1999A3;
  font-size:24px;
  color:#000;
  height:56px;
  background:none;
  padding-right:30px;
  padding-left:30px;
  font-family:'kanit';
`

const TopMenu = ({children,style}) => {
  return (
    <Btn type="button" style={{...style}}>{children}</Btn>      
  )
}

export default TopMenu