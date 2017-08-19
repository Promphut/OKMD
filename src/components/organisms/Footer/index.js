import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Foot = styled.footer`
  width:100%;
  height:166px;
  background-color:#286368;
  padding:24px 0 0 0;
  @media (max-width:480px){
    height:auto;
    padding:16px 0 16px 0;
  }
`
const Row = styled.div`
  display:flex;
  justify-content:space-between;
  @media (max-width:480px){
    display:block;
  }
`
const Left = styled.div`
  flex:1;
  display:flex;
  @media (max-width:480px){
    justify-content:center;
  }
`
const Right = styled.div`
  flex:1 314px;
  max-width:314px;
   @media (max-width:480px){
    width:100%;
    max-width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
  }
`
const Img = styled.img`
  flex:0 64px;
  width:64px;
  height:64px;
  border-radius:50%;
  margin-right:30px;
  background-size:cover;
  background-position:center;
  @media (max-width:480px){
    display:none;
  }
`
const Menu = styled(Link)`
  font-family:'kanit';
  font-size:18px;
  color:#FEF5EE;
  @media (max-width:480px){
    font-size:16px;
  }
  &:hover{
    color:white;
  }
`
const Line = styled.div`
  width:100%;
  height:1px;
  background-color:#FEF5EE;
  @media (max-width:480px){
    margin:10px 0 5px 0;
  }
`
const Desc = styled.p`
  font-family:'kanit';
  font-size:14px;
  color:#FEF5EE;
  padding:8px 0 8px 0;
  margin:0;
  @media (max-width:480px){
    max-width:224px;
    text-align:center;
    font-size:10px;
  }
`
const Dot = styled.div`
  flex:0 6px;
  width:6px;
  height:6px;
  border-radius:50%;
  background-color:white;
  margin:1px 15px 0 15px;
`
const MenuRow = styled.div`
  display:flex;
  align-items:center;
  padding:10px 0 10px 0;
  @media (max-width:480px){
    justify-content:center;
  }
`
const Icon = styled.a`
  color:#FEF5EE;
  font-size:16px;
  margin:0 30px 8px 0;
  @media (max-width:480px){
    font-size:14px;
    margin:0 10px 0px 10px;
  }
  &:hover{
    color:white;
    cursor:pointer;
  }
`
const Footer = () => {
  return (
    <Foot>
      <div className='container'>
        <Row>
          <Left>
            <Img src='/HUB.png'/>
            <MenuRow style={{height:40}}>
              <Menu to='/'>หน้าหลัก</Menu>
              <Dot/>
              <Menu to='/seramic'>เซรามิก</Menu>
              <Dot/>
              <Menu to='/carriage'>รถม้า</Menu>
            </MenuRow>
          </Left>
          <Line className='visible-xs'/>
          <Right>
            <Desc>สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) โทรศัพท์ : 0 2105 6500 อีเมล : info@okmd.or.th</Desc>
            <MenuRow>
              <Icon><i className="fa fa-facebook" aria-hidden="true"></i></Icon>
              <Icon><i className="fa fa-instagram" aria-hidden="true"></i></Icon>
              <Icon><i className="fa fa-twitter" aria-hidden="true"></i></Icon>
              <Icon><i className="fa fa-youtube-play" aria-hidden="true"></i></Icon>
              <Icon><i className="fa fa-google-plus" aria-hidden="true"></i></Icon>
              <Icon><i className="fa fa-google-plus" aria-hidden="true"></i></Icon>
            </MenuRow>
          </Right>
        </Row>
        <Line className='hidden-xs'/>
        <Desc className='hidden-xs'>ลิขสิทธิ์ © 2547 - 2560 OKMD สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) สงวนลิขสิทธิ์</Desc>
      </div>
    </Foot>
  )
}

export default Footer