import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Btn = styled(NavLink)`
  border:1px solid #1999A3;
  font-size:24px;
  color:#1999A3;
  height:56px;
  background:none;
  padding-right:30px;
  padding-left:30px;
  font-family:'kanit';
  text-decoration:none;
  display:flex;
  align-items:center;
  &:hover{
    color:white;
    background:#1999A3;
  }
  .active{
    color:white;
    background:#1999A3;
  }
`

const TopMenu = ({children,style,to}) => {
  return (
    <Btn to={to||"/"} exact activeClassName='active' style={{...style}}>{children}</Btn>      
  )
}

export default TopMenu