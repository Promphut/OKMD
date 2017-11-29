import React from 'react'
import styled from 'styled-components'
import {seramic,carriage} from './data.js'
import {Map,DownButton,About,HomeMain} from 'components'
import truncate from 'lodash/truncate';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

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
  padding:0 4px 0 16px;
  overflow-y:auto;
  @media (max-width:480px){
    height:auto;
    padding:16px 15px 20px 15px;
  }
`
const Flex2 = styled.div`
  flex:1;
  height:470px;  
  padding:0 4px 0 4px;
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
padding:0 0 0 4px;
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
  height:354px;
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
  margin:0 0 8px 0;
  color:#000;
  @media (max-width:480px){
    margin:0 0 5px 0;    
    font-size:18px;
  }
`
const H2 = styled.h2`
font-family:'kanit';
font-size:28px;
font-weight:300;
color:#000;
margin:0 0 16px 0;
@media (max-width:480px){
  font-size:15px;
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
  margin:0 0 4px 0;
  object-fit: cover;
  object-position:center;
  @media (max-width:480px){
    margin:0 0 8px 0;
    height:162px;
  }
`
const SImg = styled.img`
  width:50%;
  height:159px;
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
const GGMap = styled.a`
  height:210px;
  width:100%;
  @media (max-width:480px){
    margin:0 0 8px 0;
    height:162px;
  }
`
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={props.z}
  defaultCenter={{ lat: props.lat, lng: props.lng }}
>
  {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
</GoogleMap>
))

const videoCariage = `<iframe width="736" height="334" src="https://www.youtube.com/embed/gIJH4rpsnC0" frameborder="0" allowfullscreen></iframe>`
const videoSeramic = `<iframe width="736" height="334" src="https://www.youtube.com/embed/LAdIzY0OLrY" frameborder="0" allowfullscreen></iframe>`
class Page extends React.Component {
  state={
    index:12,
    isMarkerShown: false    
  }
  goto = (query) =>{
    if(query.match(/section=[1-9][0-9]*/)){
      var section = parseInt(query.match(/section=[1-9][0-9]*/)[0].split('section=')[1])
      if(section<11&&section>0){
        // console.log(section)
        var offsets = document.getElementById(section).getBoundingClientRect();
        var posTop = offsets.top
        window.scrollBy(0, posTop);
      }
    }
  }
  showMore = (e) =>{
    e.preventDefault();
    var a = e.target.id
    var i = a.split("s")[1]
    // console.log(i)
    this.setState({index:i})
  }
  delayedShowMarker = () => {
    this.setState({
      isMarkerShown:false
    },()=>{
      setTimeout(() => {
        this.setState({ isMarkerShown: true })
      }, 500)
    })
  }
  componentDidMount() {
    this.delayedShowMarker()
    this.goto(this.props.location.search)
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.location.search!=this.props.location.search){
      this.goto(nextProps.location.search)
    }
    if(nextProps.location.pathname!=this.props.location.pathname){
      this.delayedShowMarker()
    }
  }
  
  
  render(){
  var isDesk = screen.width>480?true:false
  var isSeramic = this.props.location.pathname=='/seramic'?true:false
  var data = isSeramic?seramic:carriage
  var ele = []
  for (var i in data) {
    let d = data[i]
    var ind = parseInt(i)+1
    if(d.map){
      var dm = d.map.split('/')
      var mm = dm[6].split(',')
      var lat = parseFloat(mm[0].split('@')[1]) 
      var lng = parseFloat(mm[1]) 
      var z = parseInt(mm[2].split('z')[0]) 
      // console.log(lat,lng,z) 
    }
    
    ele.push(
      <Box key={i}> 
        {d.map?
        <div className='container' style={{paddingBottom:isDesk?80:20}} id={ind}> 
          <Main2 style={isDesk?{paddingBottom:16}:{padding:'5px 0 15px 0'}}>
            <Flex3 className='rmpadding'>
              <LImg src={`/img${this.props.location.pathname}/${ind}/1.jpg`||'/h1.png'} style={{height:isDesk?424:162,marginBottom:0}}/>
            </Flex3>
            <Flex4 className='rmpadding'>
              {/* <SImg src={`/img${this.props.location.pathname}/${ind}/2.jpg`||'/h1.png'} style={{paddingRight:2,height:isDesk?204:78,marginBottom:4}}/>
              <SImg src={`/img${this.props.location.pathname}/${ind}/3.jpg`||'/h1.png'} style={{paddingLeft:2,height:isDesk?204:78,marginBottom:4}}/> */}
              <LImg src={`/img${this.props.location.pathname}/${ind}/2.jpg`||'/h1.png'} className='hidden-xs' style={{height:isDesk?210:78,marginBottom:4}}/>
              <GGMap href={d.map}>
                {this.state.isMarkerShown&&<MyMapComponent
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                  lat={lat}
                  lng={lng}
                  z={z}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height:isDesk?'210px':'162px' }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />}
              </GGMap>                                         
              {/* <LImg src={`/img${this.props.location.pathname}/${ind}/3.jpg`||'/h1.png'} className='hidden-xs' style={{height:isDesk?210:78,marginBottom:0}}/>                     */}
            </Flex4>
          </Main2>
          <H3>{d.name}</H3>
          <H2>{d.name2}</H2>  
          <Detail>
          {(this.state.index==ind)? d.desc:truncate( d.desc, {
            length:550,
            separator: ' ',
          })}
          {(this.state.index==ind&&d.addr)&&<span><br/>
          <br/>{d.addr}
          <br/>{d.time}
          <br/>{d.tel}</span>}
          {(this.state.index!=ind)&&<Seemore onClick={this.showMore} style={{display:'inline'}} id={`s${ind}`}>
            seemore 
        </Seemore>}
          </Detail>
          
        </div > 
        :<Main className='container' id={ind}>
        <Flex2>
          <LImg src={`/img${this.props.location.pathname}/${ind}/1.jpg`||'/h1.png'}/>
          <SImg style={{paddingRight:2}} src={`/img${this.props.location.pathname}/${ind}/2.jpg`||'/h1.png'}/>
          <SImg style={{paddingLeft:2}} src={`/img${this.props.location.pathname}/${ind}/3.jpg`||'/h1.png'}/>
        </Flex2>
        <Flex style={{overflowY:(this.state.index==ind)?'auto':'hidden'}}>
          <H3>{d.name}</H3>
          <H2>{d.name2}</H2>  
          <Detail>
          {(this.state.index==ind)? d.desc:truncate( d.desc, {
            length:550,
            separator: ' ',
          })}
          {d.addr}
          
          </Detail>
          {(this.state.index!=ind)&&<Seemore onClick={this.showMore} id={`s${ind}`}>
            seemore 
        </Seemore>} 
        </Flex>
      </Main>}
    </Box>
    )
  }

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
        
        {ele}

      </Wrapper>
    )
  }
}
export default Page
