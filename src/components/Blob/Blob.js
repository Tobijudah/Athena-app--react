import React from 'react'
import './Blob.css'

export default function Blob({position, img}) {
  return <img src={img} id={position} className="blob"/>
}
