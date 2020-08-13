import React from 'react'
import { Link } from 'react-router-dom'
import StyledFooter from '../assets/css/StyledFooter'

function Footer () {
  return (
    <StyledFooter>
      <div>
        <ul>
          <li className='titulo'>Nosotros</li>
          <li>
            <Link to='/contact'>Contacto</Link>
          </li>
          <li>
            <Link to='/about'>Sobre Nosotros</Link>
          </li>
          <li>
            <a
              target='_blank'
              href='https://www.google.com.ar/maps/place/Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires/@-37.9833588,-57.5609986,17z/data=!4m5!3m4!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!8m2!3d-37.9829465!4d-57.5590997'
              rel='noopener noreferrer'
            >
              <p>Chaco 801, Mar del Plata</p>
              <p className='direction'>(B7600BKQ)</p>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='titulo'>Contacto</li>
          <li>
            <i className='fa fa-envelope-o icon' aria-hidden='true'>
              &nbsp;
            </i>
            <a
              href='mailto:unoelectromedicina@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              E-Mail:&nbsp;unoelectromedicina@gmail.com
            </a>
          </li>
          <li>
            <i className='fa fa-facebook-official icon' aria-hidden='true'>
              &nbsp;
            </i>
            <a
              href='https://www.facebook.com/uno.electromedicina/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Facebook:&nbsp;/uno.electromedicina
            </a>
          </li>
          <li>
            <i className='fa fa-instagram icon' aria-hidden='true'>
              &nbsp;
            </i>
            <a href='https://www.instagram.com/unoelectromedicina/'>
              Instagram:&nbsp;/unoelectromedicina
            </a>
          </li>
        </ul>
      </div>
      <div className='copyright'>
        {new Date().getFullYear()}, Uno Electromedicina © Todos los derechos
        reservados.
      </div>
    </StyledFooter>
  )
}

export default Footer
