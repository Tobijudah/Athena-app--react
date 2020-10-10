import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <form>
      <input type="email" name="email" id="email" placeholder="Email" required/>
      <button className="btn">Notify Me</button>
    </form>
  )
}
