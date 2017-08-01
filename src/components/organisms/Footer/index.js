import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Foot = styled.footer`
  width:100%;
  height:166px;
  background-color:#286368;
  padding:24px 0 0 0;
`
const Row = styled.div`
  display:flex;
  justify-content:space-between;
`
const Left = styled.div`
  flex:1;
  display:flex;
`
const Right = styled.div`
  flex:1 314px;
  max-width:314px;
`
const Img = styled.img`
  flex:0 64px;
  width:64px;
  height:64px;
  border-radius:50%;
  background-color:#C4C4C4;
  margin-right:30px;
`
const Menu = styled(Link)`
  font-family:'kanit';
  font-size:18px;
  color:#000;
`
const Line = styled.div`
  width:100%;
  height:1px;
  background-color:#C4C4C4;
`
const Desc = styled.p`
  font-family:'kanit';
  font-size:14px;
  color:#C4C4C4;
  padding:8px 0 8px 0;
  margin:0;
`
const Dot = styled.div`
  flex:0 6px;
  width:6px;
  height:6px;
  border-radius:50%;
  background-color:#C4C4C4;
  margin:1px 15px 0 15px;
`
const MenuRow = styled.div`
  display:flex;
  align-items:center;
  padding:10px 0 10px 0;
`
const Icon = styled.a`
  color:#c4c4c4;
  font-size:16px;
  margin:0 30px 8px 0;
`
const Footer = () => {
  return (
    <Foot>
      <div className='container'>
        <Row>
          <Left>
            <Img/>
            <MenuRow style={{height:40}}>
              <Menu to='/'>หน้าหลัก</Menu>
              <Dot/>
              <Menu to='/'>เซรามิก</Menu>
              <Dot/>
              <Menu to='/'>รถม้า</Menu>
            </MenuRow>
          </Left>

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
        <Line/>
        <Desc>ลิขสิทธิ์ © 2547 - 2560 OKMD สำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน) สงวนลิขสิทธิ์</Desc>
      </div>
    </Foot>
  )
}

export default Footer