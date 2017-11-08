import React from 'react'
import styled from 'styled-components'
import {seramic,carriage} from './data.js'
import {Map,DownButton,About,HomeMain} from 'components'
import truncate from 'lodash/truncate';

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
  height:574px;
  padding:24px 0 80px 0;
  @media (max-width:480px){
    display:block;
    height:auto;  
    padding:24px 0 0px 0;
  }
`
const Flex = styled.div`
  flex:1;
  height:470px;
  padding:0 15px 0 15px;
  overflow-y:auto;
  @media (max-width:480px){
    height:auto;
    padding:16px 15px 20px 15px;
  }
`
const Flex2 = styled.div`
  flex:1;
  height:470px;  
  padding:0 15px 0 15px;
  display:flex;
  flex-wrap: wrap;
  @media (max-width:480px){
    height:auto;
  }
`
const Main2 = styled.div`
display:flex;
justify-content:center;
padding:24px 0 80px 0;
@media (max-width:480px){
  display:block;
  height:auto;  
  padding:24px 0 0px 0;
}
`
const Flex3 = styled.div`
flex:6;
height:424px;
overflow-y:auto;
@media (max-width:480px){
  height:auto;
  padding:16px 15px 20px 15px;
}
`
const Flex4 = styled.div`
flex:4;
height:424px;  
padding:0 0 0 15px;
display:flex;
flex-wrap: wrap;
@media (max-width:480px){
  height:auto;
}
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
  margin:0;
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
const Box = styled.div`

`
const Seemore = styled.div`
  color:#1999A3;
  font-family:'kanit';
  font-size:22px;
  :hover{
    text-decoration:underline;
    cursor:pointer;
  }
  @media (max-width:480px){
    font-size:12px;
  }
`

const videoCariage = `<iframe width="736" height="414" src="https://www.youtube.com/embed/gIJH4rpsnC0" frameborder="0" allowfullscreen></iframe>`
const videoSeramic = `<iframe width="736" height="414" src="https://www.youtube.com/embed/LAdIzY0OLrY" frameborder="0" allowfullscreen></iframe>`
class Page extends React.Component {
  state={
    index:11
  }
  goto = (query) =>{
    if(query.match(/section=[1-9][0-9]*/)){
      var section = parseInt(query.match(/section=[1-9][0-9]*/)[0].split('section=')[1])
      if(section<11&&section>0){
        console.log(section)
        var offsets = document.getElementById(section).getBoundingClientRect();
        var posTop = offsets.top
        window.scrollBy(0, posTop);
      }
    }
  }
  showMore = (i,e) =>{
    // console.log(i)
    this.setState({index:i})
  }
  componentDidMount() {
    this.goto(this.props.location.search)
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.location.search!=this.props.location.search){
      this.goto(nextProps.location.search)
    }
  }
  
  
  render(){
  var isDesk = screen.width>480?true:false
  var isSeramic = this.props.location.pathname=='/seramic'?true:false
  var data = isSeramic?seramic:carriage

    return (
      <Wrapper>
        <Map src={isSeramic?'/img/seramic/map.png':'/img/carriage/map.png'}/>
        <Con>
          <Head>{isSeramic?"seramic":"รถม้าลำปาง"}</Head>
          <Line/>
          <VDO 	dangerouslySetInnerHTML={{
								__html: isSeramic?videoSeramic:videoCariage
					}}></VDO>
        </Con>
        {
          data.map((d,i)=>(
            <Box key={i}> 
              {d.map?
              <div className='container' style={{paddingBottom:isDesk?80:20}} id={i}> 
                <Main2 style={isDesk?{paddingBottom:16}:{padding:'5px 0 15px 0'}}>
                  <Flex3 className='rmpadding'>
                    <LImg src={`/img${this.props.location.pathname}/${i+1}/1.jpg`||'/h1.png'} style={{height:isDesk?424:162,marginBottom:0}}/>
                  </Flex3>
                  <Flex4 className='rmpadding'>
                    <SImg src={`/img${this.props.location.pathname}/${i+1}/2.jpg`||'/h1.png'} style={{paddingRight:7,height:isDesk?204:78,marginBottom:14}}/>
                    <SImg src={`/img${this.props.location.pathname}/${i+1}/3.jpg`||'/h1.png'} style={{paddingLeft:7,height:isDesk?204:78,marginBottom:14}}/>
                    <LImg src={`/img${this.props.location.pathname}/${i+1}/1.jpg`||'/h1.png'} className='hidden-xs' style={{height:isDesk?204:78,marginBottom:0}}/>                    
                  </Flex4>
                </Main2>
                <H3>{d.name}</H3>
                <Detail>
                {(this.state.index==i)? d.desc:truncate( d.desc, {
                  length:550,
                  separator: ' ',
                })}
                {(this.state.index!=i)&&<Seemore onClick={(e)=>this.showMore(i,e)} style={{display:'inline'}}>
                  seemore 
              </Seemore>}
                </Detail>
                
              </div > 
              :<Main className='container' id={i}>
              <Flex2>
                <LImg src={`/img${this.props.location.pathname}/${i+1}/1.jpg`||'/h1.png'}/>
                <SImg style={{paddingRight:7}} src={`/img${this.props.location.pathname}/${i+1}/2.jpg`||'/h1.png'}/>
                <SImg style={{paddingLeft:7}} src={`/img${this.props.location.pathname}/${i+1}/3.jpg`||'/h1.png'}/>
              </Flex2>
              <Flex style={{overflowY:(this.state.index==i)?'auto':'hidden'}}>
                <H3>{d.name}</H3>
                <Detail>
                {(this.state.index==i)? d.desc:truncate( d.desc, {
                  length:550,
                  separator: ' ',
                })}
                </Detail>
                {(this.state.index!=i)&&<Seemore onClick={(e)=>this.showMore(i,e)}>
                  seemore 
              </Seemore>} 
              </Flex>
            </Main>}
            </Box>
          ))
        }
        {/* {Det} */}

      </Wrapper>
    )
  }
}
export default Page
