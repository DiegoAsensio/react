import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
      <Card style={{ width: '18rem', marginLeft: '15px' }}>
      <img src={item.img} alt={item.nombre} style={{ maxWidth: '250px', maxHeight: '250px' }} />
  <Card.Body>
    <Card.Title>{item.nombre}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Monto: {item.precio}</ListGroupItem>
    <ListGroupItem>Categoria: {item.categoria}</ListGroupItem>
    <Link to={`/detail/${item.id}`}><Button variant="outline-primary" size="lg">Detalle</Button></Link>
  </ListGroup>
</Card>
  )
}

export default Item

