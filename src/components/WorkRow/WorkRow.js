import React from 'react'
import './WorkRow.css'

export default function WorkRow({ data }) {

  const { icon, heading, text, image, alt } = data

  return (
    <div id="work-row" className={alt&&'alt'}>
      <div className="text">
        <img src={icon} className="icon"/>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={image}/>
      </div>
    </div>
  )
}
