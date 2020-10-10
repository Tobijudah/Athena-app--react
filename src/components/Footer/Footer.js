import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons'
import FooterText from '../FooterText/FooterText'

import './Footer.css'

import socialMediaIcon1 from '../../images/Social-1.svg'
import socialMediaIcon2 from '../../images/Social-2.svg'
import socialMediaIcon3 from '../../images/Social-3.svg'

export default function Footer() {

  const socialMediaIconsData = [
    {
      src: socialMediaIcon1,
      alt: 'Facebook'
    },
    {
      src: socialMediaIcon2,
      alt: 'Twitter'
    },
    {
      src: socialMediaIcon3,
      alt: 'Instagram'
    },
  ]

  return (
    <footer>
      <div className="container">
        <div className="row">
          <SocialMediaIcons data={socialMediaIconsData} />
          <FooterText>Copyright Athena 2020. All rights reserved</FooterText>
          <FooterText>Terms of service | Privacy Policy</FooterText>
        </div>
      </div>
    </footer>
  )
}
