import React from 'react'
import "./Header.css"

const Footer = ({length}) => {
  return (
    
    <h1 className='footer'>{length} list {length >> 1 ? "items" : "item"} </h1>

   
    
    )
}
export default Footer;