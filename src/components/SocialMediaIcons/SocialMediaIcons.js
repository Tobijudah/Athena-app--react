import React from 'react'
import './SocialMediaIcons.css'

export default function SocialMediaIcons({data}) {
  return (
    <div id="social-media-icons">{
      data.map(({src, alt}, index) => {
        return <img src={src} alt={alt} key={index} className="social"/>
      })
    }</div>
  )
}
