import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width:100%;
  padding:30px 0 30px 0;
`
const VDO = styled.div`
  width:520px;
  height:292px;
  margin:0 auto 0 auto;
`
const Head = styled(Link)`
  font-family:'kanit';
  font-weight:600;
  font-size:32px;
  color:#3A2313;
  display:block;
  margin:16px 0 20px 0;
`
const Text =styled.p`
  font-family:'kanit';
  font-size:22px;
  color:#3A2313;
  margin-bottom:40px;
`
const Btn = styled(Link)`
  font-size:20px;
  color:white;
  height:44px;
  background:#1999A3;
  padding:5px 30px 5px 30px;
  font-family:'kanit';
  &:hover{
    color:#1999A3;
    background:none;
    border:1px solid #1999A3;
  }
`
const HomeMain= ({children}) => {
  return (
    <Container className='container'>
      <VDO><img src="/thumbnail.png" style={{width:520,height:292}} alt=""/></VDO>
      <Head to='/seramic'>เซรามิก</Head>
      <Text>“รถม้าลำปาง” เอกลักษณ์ที่ยังหายใจของจังหวัดลำปาง กับเส้นทาง Hub ความฮู้ เรียนรู้เรื่องรถม้าลำปางในทุกมิติ ทั้งม้า รถม้า อาหารม้า คนขับรถม้า</Text>
      <Btn to='/seramic'><span>เซรามิก</span></Btn>
    </Container>     
  )
}

export default HomeMain