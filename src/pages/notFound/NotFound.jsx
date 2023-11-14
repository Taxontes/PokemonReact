import React from 'react'
import './notFound.css' 

const NotFound = () => {
  return (
    <>
      <div className='contenedor-notFound'>
        <div className="informacion-notFound">
          <h1>Not Found</h1>
          <h3>La url introducida no existe</h3>
          <img className='img-notFound' src="/snorNotFound.png" alt="Snorlax notFound" />
          <a className="btn-notfound" href='/'>Volver a inicio</a>
        </div>
      </div>
    
    </>
    
  )
}
export default NotFound