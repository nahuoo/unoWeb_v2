import React from 'react'
import styled from 'styled-components'
import fondo from '../assets/img/frente.jpg'

const StyledAbout = styled.div `
  margin:0px;
  padding:0px;

  .headerAbout{
    padding-top: 10%;
    width: 100%;
    height: 30vh;
    background-image: url("${fondo}");
    text-align: center;
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;

  }

  h1{
    font-family: 'Neuton', serif;
    font-size: 5rem;
    color: white;
    background: rgba(180, 172, 172, 0.4);
  }

  .body{
    background: #dfe0ee;
    height: 200vh;
    padding: 10%;
    font-family: 'Neuton', serif;
    font-size: 1.5rem;
    text-indent: 40px;
    letter-spacing: 0.5px;
    line-height: 1.2em;
    }
/* tablet */
    @media screen and (min-width:400px) {
      .body{
        height: auto;

      }
    }
/* desktop */ 
    @media screen and (min-width:1000px) {
      .body{
        height: 70vh;
      }
    }
`

const SobreNosotros = () => {

  return (
    <StyledAbout>
      <div className='headerAbout'>
        <h1>Nuestra historia</h1>
      </div>
      <div className='body'>
        <p>
          Iniciamos nuestras actividades en el año 1990, en un local pequeño en calle Chaco 801, esquina Chacabuco.
        </p>
        <br></br>
        <p>
         En sus comienzos la Firma solo se dedicaba al servicio técnico de pequeños equipos de laboratorio.
        </p>
        <br></br>
        <p>
          A partir del año 1999 se logra un crecimiento sostenido con varias representaciones, services oficiales y venta de productos destacados en el mercado.
        </p>
        <br></br>
        <p>
          En el año 2005 se contruye la ampliación de nuestro local con un edificio de 200 metros cuadrados y la incorporación de 6 empleados, tanto en el área técnica como la administrativa.
        </p>
        <br></br>
        <p>
          En el transcurso del año 2015 ya contábamos con las instalaciones necesarias y habilitadas como distribuidor de productos de uso "in vitro".
          Desde esa época a la actualidad el crecimiento de la empresa fue exponencial, contando hoy con más de 750 clientes activos en todo el país.
        </p>
      </div>
    </StyledAbout>
  )
}

export default SobreNosotros