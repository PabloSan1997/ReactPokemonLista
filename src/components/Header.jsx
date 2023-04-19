import React from 'react'
import login from "../recursos/logo1.svg";
import "../styles/header.scss";

export function Header() {
  return (
    <header>
        <img src={login} alt="logo" className='logoPokebola'/>
        <h1>Mi PokePagina</h1>
    </header>
  )
}
