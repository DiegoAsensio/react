import React from 'react'
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ItemCount from './ItemCount';

const ItemDetail = ({resultado}) => {
const onAdd = (count) =>{
    alert (`sumaste ${count} productos`)
  }

  return (
    <>
      <Card>
        <Card.Img src={resultado.img} alt={resultado.nombre} style={{ maxWidth: '800px', maxHeight: '800px' }} />
        <Card.Body>
          <Card.Text>
          {resultado.desc}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Monto: {resultado.precio}</ListGroupItem>
          <ListGroupItem>Categoria: {resultado.categoria}</ListGroupItem>
        </ListGroup>
        <ItemCount inicial={1} max={10} onAdd={onAdd} />
      </Card>
    </>
  )
}

export default ItemDetail