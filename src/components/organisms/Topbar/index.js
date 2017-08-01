import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TopMenu } from 'components'
const Nav = styled.nav`
  position:relative;
  width:100%;
  background:white;
  top:0;
  Left:0;
`
const Container = styled.div`
  display:flex;
  height:100px;
  align-items:center;
  justify-content:space-between;
`
const Logo = styled.img`
  height:56px;
`
const Left = styled.div`
  flex:1;
`
const Right =styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
`
const Topbar = ({children}) => {
  return (
    <Nav>
      <Container className='container'>
        <Left>
          <Link to="/"><Logo src='/okmd-logo.png'/></Link>
        </Left>
        <Right>
          <TopMenu>เซรามิก</TopMenu>
          <TopMenu style={{marginLeft:"30px"}}>รถม้า</TopMenu>
        </Right>
      </Container>
    </Nav>      
  )
}

export default Topbar