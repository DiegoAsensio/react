import React from 'react'
import Item from "./Item"

const ItemDetail = ({personajes}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {personajes?.map(personaje => <Item key={personaje.id} personaje={personaje} />)}
    </div>
  )
}

export default ItemDetail