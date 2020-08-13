import React from 'react'
import Mapa from '../components/Mapa'
import Formulario from '../components/Formulario'
import Contacto from '../assets/css/StyledContacto'

const Contact = () => {

  return (
    <Contacto>
      <div className='contenedorFormulario'>
        <Formulario />
      </div>
      <div className='informacion'>
        <ul>
          <li><i class="fas fa-phone"></i> <a href="tel:02234739018" target="_blank" rel="noopener noreferrer">
                Teléfono: (0223)473-9018
              </a> </li>
          <li><i class="fas fa-route"></i> <a
                target="_blank"
                href="https://www.google.com.ar/maps/place/Chaco+801,+B7600BKQ+Mar+del+Plata,+Buenos+Aires/@-37.9833588,-57.5609986,17z/data=!4m5!3m4!1s0x9584d95a18c9fcd9:0x9d2f9ec1205da2e9!8m2!3d-37.9829465!4d-57.5590997"
                rel="noopener noreferrer"
                >
                Dirección: Chaco 801
                <p className="direction">
                  Mar del Plata (B7600BKQ)
                </p>
                </a>
                
            </li>
          <li><i class="fab fa-whatsapp"></i> Celular: +54 9 (0223) 156 800944 </li>
          <li><i className="fa fa-envelope-o icon" aria-hidden="true">&nbsp;</i>
                <a href="mailto:unoelectromedicina@gmail.com" target="_blank" rel="noopener noreferrer">
                   E-Mail:&nbsp;unoelectromedicina@gmail.com  </a> </li>     
        </ul>   
      </div>
    
      <div className='contenedorMapa'>
        <Mapa />
      </div>
    </Contacto>
  )
}

export default Contact