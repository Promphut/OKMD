import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width:100%;
  padding:30px 0 30px 0;
  @media (max-width:480px){
    padding:15px;
  }
`
const VDO = styled.div`
  width:520px;
  height:292px;
  margin:0 auto 0 auto;
  img{
    width:520px;
    height:292px;
  }
  @media (max-width:480px){
    width:100%;
    height:182px;
    img{
      width:100%;
      height:162px;
    }
    iframe{
        width:100%;
        height:182px;      
      }
  }
`
const Head = styled(Link)`
  font-family:'kanit';
  font-weight:medium;
  font-size:32px;
  color:#3A2313;
  display:block;
  margin:16px 0 20px 0;
  @media (max-width:480px){
    font-size:18px;
    margin:10px 0 10px 0;
  }
`
const Text =styled.p`
  font-family:'kanit';
  font-size:22px;
  color:#3A2313;
  margin-bottom:40px;
  @media (max-width:480px){
    font-size:12px;
    margin-bottom:20px;
  }
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
  @media (max-width:480px){
    padding:5px 15px 5px 15px;
    font-size:12px;
  }
`
const videoSeramic = `<iframe width="520" height="235" src="https://www.youtube.com/embed/LAdIzY0OLrY" frameborder="0" allowfullscreen></iframe>`
 
const HomeMain2 = ({children}) => {
  return (
    <Container className='container'>
      <VDO dangerouslySetInnerHTML={{
								__html: videoSeramic
					}}></VDO>
      <Head to='/seramic'>เซรามิก</Head>
      <Text>“เซรามิกลำปาง” เอกลักษณ์ที่ได้เปรียบจากสินทรัพย์ทางธรรมชาติและภูมิปัญญาท้องถิ่น กับเส้นทาง Hub ความฮู้ เรียนรู้กระบวนการของเซรามิกในทุกมิติ ตั้งแต่ดินขาวสู่ผลิตภัณฑ์สร้างสรรค์</Text>
      <Btn to='/seramic'><span>เซรามิก</span></Btn>
    </Container>     
  )
}

export default HomeMain2