import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TopMenu } from 'components'
import { withRouter } from 'react-router'

const Nav = styled.nav`
  position:${props=>props.stat?'static':'absolute'};
  width:100%;
  background:${props=>props.stat?'white':'none'};
  top:0;
  Left:0;
  @media (max-width:480px){
    height:60px;
  }
`
const Container = styled.div`
  display:flex;
  height:100px;
  align-items:center;
  justify-content:space-between;
  @media (max-width:480px){
    height:60px;
  }
`
const Logo = styled.img`
  height:100px;
  @media (max-width:480px){
    height:60px;
  }
`
const Left = styled.div`
  flex:1;
`
const Right =styled.div`
  flex:1;
  display:flex;
  justify-content:flex-end;
`
const Topbar = ({children,location}) => {
  //console.log(location)
  var stat = true
  if(screen.width>480&&location.pathname == '/'){
    stat = false
  }
  return (
    <Nav stat={stat}>
      <Container className='container'>
        <Left>
          <Link to="/"><Logo src='/HUB.png'/></Link>
        </Left>
        <Right>
          <TopMenu to='/seramic'>เซรามิก</TopMenu>
          <TopMenu to='/carriage' style={{marginLeft:screen.width>480?"30px":15}}>รถม้า</TopMenu>
        </Right>
      </Container>
    </Nav>      
  )
}

export default withRouter(Topbar)