import React from 'react'
import {NavLink} from "react-router-dom"
import './style_navbar.css'

export function Navbar() {
  return (
    <nav>
      <NavLink to={"/home"}> Inicio </NavLink>
      <NavLink to={"/services"}> Servicios </NavLink>
      <NavLink to={'/about'} > Sobre nosotros </NavLink>
      <NavLink to={"/contact"}> Contactos </NavLink>
      <NavLink to={"/blogs"}> Blog </NavLink>
      <NavLink to={"/access"}> Unete </NavLink>
    </nav>
  )
}
