import React from 'react'
import '../App.css'

const Contact = () => {
  return (
    <>
      <div>
        <form className='formm'>
          <span className='headForm'>Get in touch with <b>SAKSHI SINGH</b></span><br/><br/>
          <input type='text' placeholder='Your Name'/><br/>
          <input type='text' placeholder='Your Designation'/><br/>
          <input type='text' placeholder='Your Contact'/><br/>
          <textarea placeholder='Your Message' rows={4} cols={50}/>
        </form>
      </div>
    </>
  )
}

export default Contact