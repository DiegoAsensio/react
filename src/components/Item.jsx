import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const Item = ({personaje}) => {
  const { name, image, species, status } = personaje

  return (
      <Card style={{ width: '18rem', margin: '5px' }}>
      <img src={image} alt={name} style={{ maxWidth: '250px', maxHeight: '250px' }} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    Species: {species}
    <br />
    Status: {status}
    </Card.Text>
  </Card.Body>
</Card>
  )
}

export default Item