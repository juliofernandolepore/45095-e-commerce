import React from 'react'

const Carrito = () => {
  return (
    <div className='m-5 p-5'>
      <h1 className='h-15 mb-5 text-center'>Carrito de compras</h1>
      <p className='m-3 h-10 text-center'>aqui puedes ver tus productos seleccionados</p>
      <ul className='text-start'>
        <li>producto 1</li>
        <li>producto 2</li>
        <li>producto 3</li>
        <li>producto 4</li>
        <li>producto 5</li>
      </ul>
    </div>
  )
}

export default Carrito