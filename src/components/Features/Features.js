import React from 'react'
import FeatureTextGroup from '../FeatureTextGroup/FeatureTextGroup'
import productVideo from '../../video/athena.mp4'
import './Features.css'

export default function Features() {

  const featureData = [
    {
      number: '01',
      text: 'Athena is a smart AI voice assistant that reminds you to keep up with your social life and everyday activities.'
    },
    {
      number: '02',
      text: 'Athena sends push notifications reminding you about uncompleted activities.'
    },
    {
      number: '03',
      text: 'Athena monitors your conversations, posts, calender and to-do list for maximum experience.'
    },
    {
      number: '04',
      text: 'Athena integrates third-party apps which is needed to get the app functional.'
    },
  ]

  return (
    <div id="features">
      <h2>Athena Features</h2>
      <div class="row">
        
        <div class="col col-1">
          <FeatureTextGroup number={featureData[0].number} text={featureData[0].text} />
          <FeatureTextGroup number={featureData[1].number} text={featureData[1].text} />
        </div>

        <div class="col col-2">
          <video autoplay="true" loop>
            <source 
              src={productVideo}
              type="video/mp4"
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>

        <div class="col-3 col">
          <FeatureTextGroup number={featureData[2].number} text={featureData[2].text} />
          <FeatureTextGroup number={featureData[3].number} text={featureData[3].text} />
        </div>

      </div>
    </div>
  )
}
