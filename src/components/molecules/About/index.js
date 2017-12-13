import React from 'react'
import styled from 'styled-components'

const Con = styled.div`
  background:#FEF5EE;
  padding:80px 0 80px 0;
  position:relative;
  top:-56px;
  @media (max-width:480px){
    position:static;
    padding:10px 0 10px 0;
  }
`
const Head = styled.h3`
  font-family:'kanit';
  font-size:32px;
  font-weight:medium;
  text-align:center;
  color:#000;
  @media (max-width:480px){
    font-size:14px;
    margin:5px 0 5px 0;
  }
`
const Line = styled.div`
  width:48px;
  height:4px;
  margin:20px auto 30px auto;
  background:#F2DACE;
  @media (max-width:480px){
    width:24px;
    height:3px;
    margin:0px auto 10px auto;
  }
`
const Detail = styled.p`
  color:#5D5C61;
  font-family:'kanit';
  font-size:22px;
  text-align:center;
  @media (max-width:480px){
    font-size:11px;
  }
`
const BR = styled.br`
  @media (max-width:480px){
    display:none;
  }
`

const About = ({children,style}) => {
  return (
    <Con>
      <div className='container'>
        <Head>เกี่ยวกับเรา</Head>
        <Line/>
        <Detail>
        สุดยอดนักออกแบบรถม้าและชามตราไก่ในยุค 4.0 อยู่ที่ไหน?<BR/>

ทุกวันนี้ การศึกษาไม่ได้จำกัดเฉพาะห้องเรียน แหล่งเรียนรู้สาธารณะไม่ว่าสวนสัตว์ สนามเด็กเล่น สนามกีฬา <BR/>
หรือแม้แต่สื่อออนไลน์ ล้วนเป็นอาณาจักรกว้างใหญ่ที่เปิดโอกาสให้ประชาชนทุกกลุ่มทุกวัยได้เข้าถึงทักษะความรู้ต่างๆ <BR/>
และพัฒนาศักยภาพที่ซ่อนอยู่ภายใน ขึ้นอยู่กับว่าเราจะใช้โอกาสต่อยอดจากองค์ความรู้<BR/>ที่เหมือนออกซิเจนรอบตัวไปสรรค์สร้างสิ่งใหม่ๆ อย่างไร<BR/>
ขั้นตอนการผลิตรถม้าและชามตราไก่อาศัยภูมิปัญญาพื้นถิ่น ผนวกกับเทคโนโลยีสมัยใหม่อย่างไร?<BR/>

ที่นครลำปาง เมืองแห่งมรดกวัฒนธรรมและธรรมชาติ แม้แต่สัตว์อย่างม้าและไก่<BR/> มีเรื่องราวน่าสนใจให้เข้ามาสืบค้นและนำไปประยุกต์มากมาย<BR/>

เมืองแห่งขุมทรัพย์ทางปัญญานี้ ไม่ได้มีแค่สถานที่ให้คุณค้นพบคำตอบและแรงบันดาลใจ แต่ให้คุณได้ทดลองลงมือทำ!
        </Detail>
      </div>
    </Con>    
  )
}

export default About