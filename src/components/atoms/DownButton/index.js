import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  width:56px;
  height:56px;
  border-radius:50%;
  z-index:1;
`

const DownButton = ({children}) => {
  return (
    <Btn type="button" className="btn btn-default" ><i className="fa fa-chevron-down" aria-hidden="true"></i></Btn>      
  )
}

export default DownButton