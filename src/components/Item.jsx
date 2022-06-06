import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const Item = ({item}) => {
  return (
      <Card style={{ width: '18rem', marginLeft: '15px' }}>
      <img src={item.img} alt={item.nombre} style={{ maxWidth: '250px', maxHeight: '250px' }} />
  <Card.Body>
    <Card.Title><p>{item.nombre}</p></Card.Title>
    <Card.Text>
    <p>{item.desc}</p>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><p>Monto: {item.precio}</p></ListGroupItem>
    <ListGroupItem><p>Categoria: {item.tipo}</p></ListGroupItem>
    <Button variant="outline-primary" size="lg">Detalle</Button>
  </ListGroup>
</Card>
  )
}

export default Item