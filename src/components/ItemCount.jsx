import React, { useState } from 'react'

const ItemCount = ({ inicial, max, onAdd }) => {

    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if (count < max){
            setCount(count + 1)
        } else {
            alert(`No puedes agregar más productos por falta de stock`)
        }
    }
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert(`No puedes quitar mas productos`)
    }
    const reset = () => {
        setCount(inicial)
    }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={() => {onAdd(count); reset() }}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount