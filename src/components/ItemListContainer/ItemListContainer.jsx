import React from 'react'
import './ItemListContainer.css'

function ItemListContainer({nombre, amenaza}) {
  return <h1>{`Hola ${nombre} ${amenaza}`}</h1>
}

export default ItemListContainer