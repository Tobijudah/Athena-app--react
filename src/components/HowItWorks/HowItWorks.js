import React from 'react'
import WorkRow from '../WorkRow/WorkRow'

import Icon1 from '../../images/How-icon-1.svg'
import Icon2 from '../../images/How-icon-2.svg'
import Icon3 from '../../images/How-icon-3.svg'
import Icon4 from '../../images/How-icon-4.svg'
import Phone1 from '../../images/How-phone-1.svg'
import Phone2 from '../../images/How-phone-2.svg'
import Phone3 from '../../images/How-phone-3.svg'
import Phone4 from '../../images/How-phone-4.svg'

export default function HowItWorks() {

  const howItWorksData = [
    {
      icon: Icon1,
      heading: 'Voice Control',
      text: 'Athena recognises voice commands and executes your request. You can also type when you do not want to speak.',
      image: Phone1,
      alt: false
    },
    {
      icon: Icon2,
      heading: 'Voice Control',
      text: 'Athena recognises voice commands and executes your request. You can also type when you do not want to speak.',
      image: Phone2,
      alt: true
    },
    {
      icon: Icon3,
      heading: 'Voice Control',
      text: 'Athena recognises voice commands and executes your request. You can also type when you do not want to speak.',
      image: Phone3,
      alt: false
    },
    {
      icon: Icon4,
      heading: 'Voice Control',
      text: 'Athena recognises voice commands and executes your request. You can also type when you do not want to speak.',
      image: Phone4,
      alt: true
    }
  ]

  return (
    <div id="how">
      <h2>How It Works</h2>
      {
        howItWorksData.map((itemData, index) => {
          return <WorkRow data={itemData} key={index}/>
        })
      }
        
    </div>
  )
}
