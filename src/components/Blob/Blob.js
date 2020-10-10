import React from 'react'
import './Blob.css'

export default function Blob({position, img}) {
  return <img src={img} alt="" id={position} className="blob"/>
}
