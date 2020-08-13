import React from 'react'
import { NavLink } from 'react-router-dom'
import StyledNav from '../assets/css/StyledNavbar'

const Navbar = () => {
  const [navbarColor, setNavbarColor] = React.useState('rgba(255,255,255, 0)')
  const [valido, setValido] = React.useState(false)
  const [toggle, setToggle] = React.useState(false)
  const [products, setProducts] = React.useState(false)
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setNavbarColor('rgba(255,255,255, 1)')
        setValido(true)
      } else if (
        document.documentElement.scrollTop < 51 ||
        document.body.scrollTop < 51
      ) {
        setNavbarColor('rgba(255,255,255, 0)')
        setValido(false)
      }
    }
    window.addEventListener('scroll', updateNavbarColor)
    return function cleanup () {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })

  function handleClick () {
    setToggle(!toggle)
  }
  const handleEnter = () => {
    setProducts(true)
  }
  const handleLeave = () => {
    setProducts(false)
  }

  return (
    <StyledNav background={navbarColor} valido={valido}>
      <div className='logo'>
        <NavLink to='/' exact>
          <span>Uno</span>
          <img src={require('../assets/img/logouno.png')} alt='logo' />
          <p>Electromedicina</p>
        </NavLink>
      </div>
      <ul className={`ListaLink ${toggle ? 'active' : 'hidden'}`}>
        <li>
          <a
            className='link'
            href='https://www.google.com.ar/maps/dir//Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires,+Argentina/@-37.982938,-57.5634771,16z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!2m2!1d-57.5590997!2d-37.9829465!3e2'
          >
            <i class='fas fa-map-marker-alt'></i> ¿Cómo llegar?
          </a>
        </li>

        <li>
          <NavLink
            to='/contact'
            className='link'
            activeClassName='navActive'
            onClick={handleClick}
          >
            Contáctenos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shop'
            className='link'
            activeClassName='navActive'
            onClick={handleClick}
          >
            Servicio Técnico
          </NavLink>
        </li>
        <li>
          <button
            className='link'
            onFocus={handleEnter}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            Productos
            <span className='arrow'></span>
          </button>
          <div
            className={`productos ${products ? 'activeProds' : 'hiddenProds'}`}
          >
            <ul onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <li>Agitadores</li>
              <li>Autoanalizadores quimica clínica</li>
              <li>Baño termicos</li>
              <li>Biomarcadores de urgencia</li>
              <li>Cabinas flujo laminar</li>
              <li>Centrífugas</li>
              <li>Coagulómetros</li>
              <li>Contadores hematológicos</li>
              <li>Estufas de cultivo</li>
              <li>Estufas de esterilización</li>
              <li>Gases en sangre</li>
              <li>Ion selectivo</li>
              <li>Microscopios</li>
              <li>Quimioluminiscencia</li>
            </ul>
          </div>
        </li>
        <li>
          <a
            href='https://www.instagram.com/unoelectromedicina/'
            target='_blank'
            rel='noopener noreferrer'
            className='link icono'
          >
            <i className='fa fa-instagram fa-2x' aria-hidden='true'></i>
          </a>
          <a
            href='https://www.facebook.com/uno.electromedicina/'
            target='_blank'
            rel='noopener noreferrer'
            className='link icono'
          >
            <i className='fa fa-facebook-official fa-2x' aria-hidden='true'></i>
          </a>
        </li>
      </ul>
      <div className='burger' onClick={handleClick}>
        <div className={toggle ? 'on1' : ''}></div>
        <div className={toggle ? 'on2' : ''}></div>
        <div className={toggle ? 'on3' : ''}></div>
      </div>
    </StyledNav>
  )
}
export default Navbar
