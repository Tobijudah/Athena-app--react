import React from 'react'
import './Device.css'

export default function Device({ device }) {

  console.log(device);

  const { img, text } = device

  return (
    <div id="device">
      <img src={img} alt={text} className="device"/>
      <h4>{text}</h4>
    </div>
  )
}
