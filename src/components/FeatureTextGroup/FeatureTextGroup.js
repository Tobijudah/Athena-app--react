import React from 'react'
import './FeatureTextGroup.css'

export default function FeatureTextGroup({number, text}) {
  return (
    <div id="row">
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  )
}
