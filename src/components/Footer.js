import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <>
        <div className='footer container'>
            <div className='row'>
                <div className='iconn col-4'><a href='https://www.linkedin.com/in/sakshi-singh-1a0691229/'><center><FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" /></center></a></div>
                <div className='iconn col-4'><a href=''><center><FontAwesomeIcon icon={faEnvelope} className="mail-icon" /><small>singhsakshidb@gmail.com</small></center></a></div>
                <div className='iconn col-4'><a href=''><center><FontAwesomeIcon icon={faPhone} className="phone-icon" /><small>8591903863</small></center></a></div>
            </div>
        </div>
    </>
  )
}

export default Footer;
