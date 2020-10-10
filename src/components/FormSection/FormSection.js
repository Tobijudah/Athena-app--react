import React from 'react'
import Form from '../Form/Form'
import './FormSection.css'

export default function FormSection() {
  return (
    <div id="form-section">
      <div className="container">
        <div className="form-box">
          <h2>Can't Wait To Try This Out?</h2>
          <p>We would we launching soon. Join for early access</p>
          <Form/>
        </div>
      </div>
    </div>
  )
}
