import React from 'react'
import {  Logo, MiIconoSVG, ColorSun } from '../Icons'
import './navbar.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
          <Link to="/" className="navbar-brand" >Inicio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to="/pokedex" className="nav-link active" aria-current="page" >Pokédex</NavLink>
              <NavLink to="/favoritos" className="nav-link">Favoritos</NavLink>
              <NavLink to="/combate" className="nav-link">Combates</NavLink>
              <NavLink to="/minijuego" className="nav-link" >Mini Juego</NavLink>
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
