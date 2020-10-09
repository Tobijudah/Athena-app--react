import React from 'react'
import Form from '../Form/Form'
import Blob from '../Blob/Blob'
import heroPhone from '../../images/Hero-phone.svg'
import firstBlob from '../../images/Blob-1.svg'
import secondBlob from '../../images/Blob-2.svg'
import thirdBlob from '../../images/Blob-3.svg'
import fourthBlob from '../../images/Blob-4.svg'
import './Hero.css'

export default function Hero() {
  return (
    <div id="hero">
      <Blob position="first" img={firstBlob}/>
      <Blob position="second" img={secondBlob}/>
      <Blob position="third" img={thirdBlob}/>
      <Blob position="fourth" img={fourthBlob}/>
      <div className="text">
        <h1>Never Forget to Keep Up</h1>
        <p>A smart solution for your busy life. Never miss out on your relationships because you cannot always keep in touch. <br/> We will be launching soon. Join for early access.</p>
        <Form />
      </div>
      <div className="image">
        <img src={heroPhone} alt="Mobile Phone"/>
      </div>
    </div>
  )
}
