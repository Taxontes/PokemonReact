import React from 'react'
import {  Logo, MiIconoSVG, ColorSun } from '../Icons'
import './navbar.css'
import { useEffect, useState } from 'react'

export const Navbar = () => {

  const [tema, setTema] = useState('light')

  const handleChange = (e) => setTema(e.target.checked ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('data-tema', tema)
  }, [tema])


  return (
    <>
      <nav className={`navbar navbar-expand-lg ${tema === 'dark' ? 'navbar-light bg-light' : ' navbar-dark bg-dark'} fixed-top`}>
        <Logo></Logo>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link " aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
        <div className="iluminacion">
          <ColorSun></ColorSun>
          <label >
            <input type="checkbox" className='check-switch' onChange={handleChange} hidden/>
            <span className='slider'></span>
          </label>
          <MiIconoSVG></MiIconoSVG>
        </div>
      </nav>
    </>
  )
}
