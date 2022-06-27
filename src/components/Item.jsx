import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<Card style={{ width: "18rem", marginLeft: "15px" }}>
			<img
				src={item.img}
				alt={item.name}
				style={{ maxWidth: "250px", maxHeight: "250px" }}
			/>
			<Card.Body>
				<Card.Title>{item.name}</Card.Title>
			</Card.Body>
			<ListGroup className="list-group-flush">
				<ListGroupItem>Precio: ${item.price}</ListGroupItem>
				<ListGroupItem>Categoria: {item.category}</ListGroupItem>
				<Link to={`/detail/${item.id}`}>
					<Button variant="outline-primary" size="lg">
						Detalle
					</Button>
				</Link>
			</ListGroup>
		</Card>
	);
};

export default Item;
