import React from 'react'
import Device from '../Device/Device'

import './Availability.css'

import Device1 from '../../images/Device-1.svg'
import Device2 from '../../images/Device-2.svg'
import Device3 from '../../images/Device-3.svg'
import Device4 from '../../images/Device-4.svg'

export default function Availability() {

  const deviceData = [
    {
      img: Device1,
      text: 'Desktop'
    },
    {
      img: Device2,
      text: 'Tablet'
    },
    {
      img: Device3,
      text: 'Mobile'
    },
    {
      img: Device4,
      text: 'Watch'
    }]

  return (
    <div id="availability">
      <h2>Athena is available on</h2>
      <div className="row">{
        deviceData.map((device, index) => {
          return <Device device={device} key={index} />
        })
      }</div>
    </div>
  )
}
