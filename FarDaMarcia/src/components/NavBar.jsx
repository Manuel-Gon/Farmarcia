import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <div className='navbar-container'>
      <img src="/farmarcia-logo-pq.avif" alt="" />

     <button className='botao-um'>Home</button>

     <button className='botao-dois'>Novidades</button>

     <button className='botao-tres'>Contato</button>

     <button className='botao-quatro'>Localização</button>

    </div>
  )
}

export default NavBar
