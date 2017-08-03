import React from 'react'
import styled from 'styled-components'

import {Map,DownButton,About,HomeMain} from 'components'

const Wrapper = styled.div`
  @media (max-width:480px){
    .rmpadding{
      padding:0;
    }
  }
`
const Con = styled.div`
  background:#FEF5EE;
  padding:34px 0 80px 0;
  position:relative;
  top:-56px;
  @media (max-width:480px){
    position:static;
    padding:15px 15px 24px 15px;
  }
`
const Main = styled.div`
  display:flex;
  justify-content:center;
  padding:24px 0 80px 0;
  @media (max-width:480px){
    display:block;
    padding:24px 0 0px 0;
  }
`
const Flex = styled.div`
  flex:1;
  padding:0 15px 0 15px;
  @media (max-width:480px){
    padding:16px 15px 20px 15px;
  }
`
const Flex2 = styled.div`
  flex:1;
  padding:0 15px 0 15px;
  display:flex;
  flex-wrap: wrap;
`
const Head = styled.h2`
  font-family:'kanit';
  font-size:48px;
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
    margin:0px auto 15px auto;
  }
`
const VDO = styled.div`
  width:736px;
  height:414px;
  margin:0 auto 0 auto;
  img{
    width:736px;
    height:414px;
  }
  @media (max-width:480px){
    width:100%;
    height:162px;
    img{
      width:100%;
      height:162px;
    }
  }
`
const H3 = styled.h3`
  font-family:'kanit';
  font-size:32px;
  font-weight:medium;
  color:#000;
  margin:0 0 16px 0;
  @media (max-width:480px){
    font-size:18px;
    margin:0 0 10px 0;
  }
`
const Detail = styled.p`
  color:#5D5C61;
  font-family:'kanit';
  font-size:22px;
  @media (max-width:480px){
    font-size:12px;
    margin:0;
  }
`
const LImg = styled.img`
  width:100%;
  height:306px;
  margin:0 0 16px 0;
  object-fit: cover;
  object-position:center;
  @media (max-width:480px){
    margin:0 0 8px 0;
    height:162px;
  }
`
const SImg = styled.img`
  width:50%;
  height:148px;
  object-fit: cover;
  object-position:center;
  @media (max-width:480px){
    height:78px;
  }
` 
const BreakLine = styled.div`
  width:100%;
  height:4px;
  background:#F2DACE;
  @media (max-width:480px){
    height:3px;
  }
`
const Page = () => {
  var isDesk = screen.width>480?true:false
  return (
    <Wrapper>
      <Map/>
      <Con>
        <Head>รถม้าลำปาง</Head>
        <Line/>
        <VDO><img src="/thumbnail.png"  alt=""/></VDO>
      </Con>
      <Main className='container'>
        <Flex2>
          <LImg src='/h1.png'/>
          <SImg src='/h2.png'/>
          <SImg src='/h3.png'/>
        </Flex2>
        <Flex>
          <H3>ศูนย์พัฒนาอุตสาหกรรม</H3>
          <Detail>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad sed do eiusmod tempor</Detail>
        </Flex>
      </Main>
      <div className='container' style={{paddingBottom:isDesk?80:20}}>
        <BreakLine></BreakLine>
        <H3 style={isDesk?{textAlign:'center',marginTop:80}:{textAlign:'left',marginTop:20}}>จุดบริการรถม้า</H3>
        <Main style={isDesk?{paddingBottom:16}:{padding:'5px 0 15px 0'}}>
          <Flex2 className='rmpadding'>
            <LImg src='/h1.png' style={{height:isDesk?424:162}}/>
          </Flex2>
          <Flex2 className='rmpadding'>
            <LImg src='/h1.png' className='hidden-xs' style={{height:isDesk?200:78}}/>
            <SImg src='/h2.png' style={{height:isDesk?200:78}}/>
            <SImg src='/h3.png' style={{height:isDesk?200:78}}/>
          </Flex2>
        </Main>
        <Detail>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit.
        </Detail>
      </div>
    </Wrapper>
  )
}

export default Page
