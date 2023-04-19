import React from 'react'
import imagen from "../asserts/logo1.svg";
import "../styles/header.scss";

export function Header() {
  return (
    <header>
        <img src={imagen} alt="logoPokebola" className='logoPokebola'/>
        <h1>Mi PokePagina</h1>
    </header>
  )
}
